import * as dotenv from 'dotenv';

dotenv.config();


import {Configuration, OpenAIApi} from "openai";

const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPENAI,
});

const openai = new OpenAIApi(configuration);


export default async function handler(req, res){
    let prompt = req.body.prompt;

    const gradeLevel = req.body.gradeLevel;
    const language = req.body.language;
    prompt += "Rewrite this in " + gradeLevel + " and translate it to " + language + ":\n";

    const aiResponse = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 700,
        temperature: 0,
    });
    const text = aiResponse.data.choices[0].text;
    console.log(text);
    res.send({text});
}



//
// // eslint-disable-next-line import/no-anonymous-default-export
// export default async function handler (req, res) {
//     const prompt = req.body.prompt;
//     const aiResponse = await openai.createCompletion({
//         model: "text-davinci-003",
//         prompt: prompt,
//         max_tokens: 200,
//         temperature: 0,
//     });
//
//     const text = aiResponse.data.choices[0].text;
//     res.status(201).json(text)
// }