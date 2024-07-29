const { IgApiClient } = require('instagram-private-api');
require('dotenv').config()
const fs = require('fs');
const util = require('util');

const readFileAsync = util.promisify(fs.readFile);

const ig = new IgApiClient();

ig.state.generateDevice(process.env.IG_USERNAME);
(async () => {
    await attemptLogin(process.env.IG_USERNAME, process.env.IG_PASSWORD);

    const videoPath = await readFileAsync("out/remotionVideo.mp4");
    const thumbnailPath = await readFileAsync("public/image0.png");

    await ig.publish.video({
        coverImage: thumbnailPath,
        video: videoPath,
        caption: ''
    })
})();

async function attemptLogin(username, password) {
    ig.state.generateDevice(username);
    try {
        await ig.simulate.preLoginFlow();
        const loggedInUser = await ig.account.login(username, password);
        console.log(loggedInUser);
        process.nextTick(async () => await ig.simulate.postLoginFlow());
    } catch (err) {
        if (err.response && err.response.body.message == 'checkpoint_required') {
            console.log('You have to verify your account');
            // Insert the challenge solving process here
        } else {
            console.error(err);
        }
    }
}