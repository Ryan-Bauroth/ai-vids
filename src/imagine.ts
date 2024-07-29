const imaginesdk = require("imaginesdk");
const client = imaginesdk.client;
const GenerationStyle = imaginesdk.GenerationStyle;
const Status = imaginesdk.Status;
const _ = require('lodash');
const { newGenerateGenAIPrompts } = require('./google.js');

require('dotenv').config()

const imagine = client(process.env.IMAGINE_API_KEY)

const generationStyles = [GenerationStyle.Realistic] //GenerationStyle.ANIME,

const main = async (prompt, iteration) => {
    const response = await imagine.generations(
        prompt,
        {
            style: generationStyles[getRandomInt(0, generationStyles.length)], //generationStyles[getRandomInt(0, generationStyles.length)],
            aspectRatio: '9:16'
        },
    );

    if (response.status() === Status.OK) {
        const image = response.getOrThrow();
        image.asFile("public/image" + iteration + ".png");
    }
    else{
        console.log(response.errorOrThrow());
    }
}

//TODO ts isnt running? works tho
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

let iteration = 0

const prompts = [
    "Generate a high-quality, realistic image of an abandoned grand hotel lobby, featuring ornate chandeliers, dusty furniture, and peeling wallpaper. Ensure the scene is empty of people and conveys a sense of past luxury contrasted with current decay.",
    "Create a high-resolution, realistic image of a derelict amusement park, highlighting rusting rides, overgrown vegetation, and empty pathways. Capture the eerie, nostalgic feel of the deserted attractions with no human figures present.",
    "Produce a lifelike, high-quality image of an abandoned industrial factory, focusing on crumbling machinery, dusty floors, and neglected workspaces. The scene should illustrate the stark contrast between previous activity and current abandonment, with no people included.",
    "Generate a high-definition, realistic image of a forsaken school, emphasizing empty classrooms with dusty desks and abandoned playgrounds overtaken by nature. Convey the melancholic atmosphere of the school with no human presence.",
    "Create a high-quality, realistic image of a deserted shopping mall, featuring vacant storefronts, faded advertisements, and empty corridors. Ensure the scene reflects the haunting stillness of the mall with no people present."
];

async function runMain(){
    const promptNum = 8
    const realPromptNum = 6
    // let prompts = await newGenerateGenAIPrompts(
    //     "Discover high-quality, realistic images of abandoned places, where once-vibrant locations like forgotten theaters and derelict factories now stand in silent solitude, their haunting beauty captured without the presence of people, allowing the stillness and decay to tell their own compelling stories.",
    //     promptNum
    // )
    //
    // prompts = _.shuffle(prompts)
    //
    // if(prompts.length >= realPromptNum) {
    //     prompts = prompts.filter((item, index) => index < realPromptNum)
    // }

    console.dir(prompts)

    const mainPromises = prompts.map((prompt, i) => {
        console.log(i);
        return main(prompt.trim(), i);
    });

    await Promise.all(mainPromises);

    console.log("All runs completed.");
}

runMain()
//main(prompts[iteration], iteration)