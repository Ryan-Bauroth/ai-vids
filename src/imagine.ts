const imaginesdk = require("imaginesdk");
const client = imaginesdk.client;
const GenerationStyle = imaginesdk.GenerationStyle;
const Status = imaginesdk.Status;

const imagine = client("vk-XTtK18gCSZ20kyGHQ32QaEJXyHsPW1O3DPSxYDohghHG7")

const generationStyles = [GenerationStyle.ANIME, GenerationStyle.Realistic, 33]

const main = async (prompt, iteration) => {
    const response = await imagine.generations(
        prompt,
        {
            style: generationStyles[getRandomInt(0, 2)], //generationStyles[getRandomInt(0, generationStyles.length)],
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

const prompts = [
    "Design a majestic alien canyon with towering, iridescent rock formations and a glowing river winding through it. The scene should be photorealistic and captured in one high-resolution image from a dramatic vantage point.",

    "Create a tranquil Earth-like arctic scene with crystal-clear ice formations, a serene frozen lake, and the Northern Lights dancing across the sky. The artwork should be highly detailed and presented as a single, breathtaking photo.",

    "Generate a vibrant, otherworldly coral reef with bioluminescent marine life and a translucent, colorful ocean. The image should be extremely realistic and captured in one stunning photo that highlights the surreal beauty of the underwater world.",

    "Imagine a futuristic cityscape on a distant planet with towering skyscrapers, floating vehicles, and an aurora-lit sky. The scene should be incredibly detailed and photorealistic, shown as a single high-resolution image from an expansive viewpoint.",

    "Produce an enchanting Earth-like tropical rainforest with towering trees, exotic wildlife, and a misty waterfall cascading into a crystal-clear pool. The scene should be highly realistic, captured in one immersive and vibrant photo.",

    "Create a breathtaking alien ice planet with sprawling frozen tundra, shimmering ice crystals, and a distant, glowing star. The image should be rendered in photorealistic detail and presented as a single, high-quality photo showcasing the alien landscape."
];

let iteration = 0

main(prompts[iteration], iteration)