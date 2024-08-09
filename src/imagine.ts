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

let iteration = 4

const prompts = [
    "A cozy, rustic cabin with a stone fireplace, featuring a plush bed with soft blankets, nestled in a snowy forest. Lanterns cast a warm glow, creating a serene nighttime atmosphere.",
    "A luxurious yurt with elegant furnishings and a comfortable, inviting bed, set in a peaceful meadow under a starry night sky, softly illuminated by ambient lights from inside.",
    "A charming seaside tent with a comfortable bed, set on a quiet moonlit beach. Gentle waves lap at the shore, and a campfire glows softly nearby, providing a cozy and relaxing spot.",
    "A secluded bamboo bungalow with a thatched roof and a hammock draped in the open air, set amidst a lush garden. Soft lantern lighting and the sounds of nature create a tranquil nighttime setting.",
    "A quaint mountain lodge with a warm, inviting bed placed next to a roaring fireplace, surrounded by a snowy landscape, offering a cozy retreat for a restful night.",
    "A serene glamping tent with plush bedding and fairy lights, set in picturesque countryside. The clear, star-filled sky and peaceful surroundings make for a relaxing night under the stars."
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
    // console.dir(prompts)
    const mainPromises = prompts.map((prompt, i) => {
        return main(prompt.trim(), i);
    });
    console.log(prompts.length)

    await Promise.all(mainPromises);

    console.log("All runs completed.");
}

runMain()
//main(prompts[iteration], iteration)