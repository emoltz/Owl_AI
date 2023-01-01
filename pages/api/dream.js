import * as dotenv from 'dotenv';

dotenv.config();


import {Configuration, OpenAIApi} from "openai";

const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPENAI,
});

const openai = new OpenAIApi(configuration);


export default async function handler(req, res){
    const prompt = req.body.prompt;
    const aiResponse = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 300,
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