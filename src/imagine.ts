const imaginesdk = require("imaginesdk");
const client = imaginesdk.client;
const GenerationStyle = imaginesdk.GenerationStyle;
const Status = imaginesdk.Status;

const imagine = client("vk-Ju9onXr2pzI9NqBd9yJ1VLSnwSFFvUzoFUY5j3psl82ubDL")

const generationStyles = [GenerationStyle.Realistic, 33] //GenerationStyle.ANIME,

const main = async (prompt, iteration) => {
    const response = await imagine.generations(
        prompt,
        {
            style: generationStyles[getRandomInt(0, 2)], //generationStyles[getRandomInt(0, generationStyles.length)],
        },
        {
            aspect_ratio: '9:16',
        }

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
    "Create a photorealistic image of a majestic **dragon** perched on a cliff overlooking a vast, enchanted forest with glowing flora and a misty valley below. The scene should highlight the dragon's shimmering scales and fiery breath, showcasing the magical and otherworldly environment in a single stunning photo.",

    "Generate a high-resolution image of a **glow-in-the-dark phoenix** soaring through a starry night sky, with its feathers casting a radiant glow over a serene, ancient temple nestled among mountains. The scene should be photorealistic and capture the mystical beauty of the phoenix and its celestial surroundings in one breathtaking photo.",

    "Design a high-quality image of a **panda** in a lush **bamboo forest**, surrounded by towering bamboo stalks and dappled sunlight filtering through the leaves. The scene should be photorealistic, highlighting the panda's adorable features and the vibrant, green environment in a single captivating photo.",

    "Create a high-resolution image of a **majestic elephant** walking through the lush **Okavango Delta** in Botswana. The scene should capture the elephant’s grandeur as it moves through the verdant landscape, with a backdrop of tranquil water channels and rich vegetation. The photorealistic image should highlight the elephant’s textured skin and the vibrant, natural environment in one stunning photo.",

    "Generate a high-resolution image of a **snow leopard** stealthily prowling through a frosty Himalayan landscape, with snow-covered peaks and a rugged, icy terrain in the background. The scene should be photorealistic, capturing the leopard's elegant form and the harsh beauty of its cold environment in a single dramatic photo.",

    "Design a photorealistic image of a **bioluminescent jellyfish** drifting through an otherworldly, deep-sea abyss, with its glowing tentacles illuminating the dark waters and mysterious marine creatures floating nearby. The scene should be high-resolution and showcase the ethereal beauty of the jellyfish and its surreal surroundings in one captivating photo."
];


let iteration = 4

//main(prompts[iteration], iteration)


async function runMain(){
    for(let i = 0; i < 6; i++){
        console.log(i)
        await main(prompts[i], i)
        console.log("run " + i)
    }
}

runMain()