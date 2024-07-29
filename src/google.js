const {TextServiceClient} = require("@google-ai/generativelanguage").v1beta2;
const {GoogleAuth} = require("google-auth-library");
require('dotenv').config()
const MODEL_NAME = "models/text-bison-001";
const API_KEY = process.env.GOOGLE_API_KEY;
const fs = require('fs');

const client = new TextServiceClient({
    authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

const caption = "Return the caption for a video using hashtags such as #vibes #chill #relax #city #nature #ai or any other # you deem important" +
    ". The prompt is for the video is" + "ai generated party locations" + "and the caption should not be more than a few words. do not do any line breaks"

async function generateVidTopic(extraExamples) {
    const prompt = "I want you to generate a video topic such as" +
        extraExamples +
        ". return only the video topic in the same format as the examples and nothing else. really make sure you take the examples i gave into account before giving your response. The topic should be in the form of: context for the topic. 'which of these' ___ 'would you pick'. Do not mention the number of choices";
    return await (client
        .generateText({
            model: MODEL_NAME,
            prompt: {
                text: prompt,
            },
        })
        .then((result) => {
            return result[0].candidates[0].output
        }));
}

module.exports.newGenerateGenAIPrompts = async (vidTopic, numOfPrompts) => {
    let prevPrompts = ""
    await fs.readFile('previousPrompts.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        prevPrompts = data;
    });

    const rules = "you MUST only generate " + numOfPrompts + " pieces of text seperated by | and nothing else." +
        " There MUST be no new lines or \\n lines in the prompt" +
        " Each prompt should be unique in its own obvious way" +
        " All images should be realistic and high quality" +
        " only one image generated per prompt" +
        " avoid generating human faces" +
        " be excessively descriptive for what you want as the ai needs a lot to go off of."
    const intro = "I need you to create prompts for an ai generative ai to follow while creating its images."
    const intialPrompt = intro + "For this process, follow this topic sentence " +
        vidTopic + " AVOID generating something basic that another version of you might generate and follow these rules: " + rules +
        "I would like something unique every time so think creatively. In order to help you with this I have saved" +
        "what other versions of you have generated and I will proivde the list here: " + prevPrompts

    let generatedPrompt = ""

    await (client
        .generateText({
            model: MODEL_NAME,
            prompt: {
                text: intialPrompt,
            },
        })
        .then((result) => {
            generatedPrompt = result[0].candidates[0].output
        }));

    const rulePrompt = intro + "I was given this block of text from another ai. " +
        "I would like you to ensure it follows some rules. Ensure it doesn't break a single one of them" +
        "and if it does reformat what the ai returned to fit the rules: " + rules +
        "Here is an example of what it should look like if done properly: " +
        "| a photorealistic painting of a white kitten | a quirky anime portrait of a woman in a white dress |" +
        "and it must follow this topic " + vidTopic + ". If there are not " + numOfPrompts + " prompts generate more or delete some to fit that number of prompts"

    return await (client
        .generateText({
            model: MODEL_NAME,
            prompt: {
                text: rulePrompt,
            },
        })
        .then((result) => {
            let arrResults = result[0].candidates[0].output.split("|")
            arrResults.shift()
            for(let i of arrResults) {
                if(i !== ""){
                    fs.appendFile('previousPrompts.txt', i.trim() + '\n', (err) => {
                        if (err) {
                            console.log(err);
                        }
                    });
                }
            }
            return arrResults
        }));
}

module.exports.generateGenAIPrompts = async (vidTopic, numOfPrompts) => {
    let prevPrompts = ""
    await fs.readFile('previousPrompts.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        prevPrompts = data;
    });
    const intro = "I need you to create prompts for an ai generative ai to follow while creating its images."
    const rules = "you MUST only generate " + numOfPrompts + " pieces of text seperated by | and nothing else." +
        " There MUST NOT be new lines or any form of 'backward slash n' lines in the prompt. remove these." +
        " Each prompt should be unique in its own obvious way" +
        " All images should be realistic and high quality" +
        " only one image generated per prompt" +
        " avoid generating human faces" +
        " be excessively descriptive for what you want as the ai needs a lot to go off of."
    const prompt = intro + " There are some rules you MUST follow: " +
        rules + " For this process, follow this topic sentence to spark your inspiration: " +
        vidTopic + " AVOID generating something basic that another version of you might generate. " +
        "I would like something unique every time so think creatively. In order to help you with this I have saved" +
        "what other versions of you have generated and I will proivde the list here: " + prevPrompts
    return await (client
        .generateText({
            model: MODEL_NAME,
            prompt: {
                text: prompt,
            },
        })
        .then((result) => {
            let arrResults = result[0].candidates[0].output.split("|")
            arrResults.shift()
            for(let i of arrResults) {
                if(i !== ""){
                    fs.appendFile('previousPrompts.txt', i.trim() + '\n', (err) => {
                        if (err) {
                            console.log(err);
                        }
                    });
                }
            }
            return arrResults
        }));
}

// (async () => {
//     const GenAIPrompts = (await generateGenAIPrompts("dream homes in nature and cities and rural areas that are luxiourius/cozy"))
//     for(let i of GenAIPrompts) {
//         if(i !== ""){
//             console.log(i)
//             fs.appendFile('previousPrompts.txt', i.trim() + '\n', (err) => {
//                 if (err) {
//                     console.log(err);
//                 }
//             });
//         }
//     }
// })();