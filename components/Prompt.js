import React from 'react';
import {Button} from "@nextui-org/react";
import toast from "react-hot-toast";


const Prompt = () => {

    const [result, setResult] = React.useState(null);
    // extract data
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.target);

        const toastId = toast.loading("Loading...")

        const response = await fetch('/api/dream', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt: data.get('prompt')
            }),
        });
        toast.success("Success!")


        const {text} = await response.json();
        setResult(text);

        toast.dismiss(toastId)

    }


    return (
        <div>
            <h1>Prompt </h1>
            <div id="result">
                <form action={""} method={"POST"} onSubmit={handleSubmit}>
                    <label htmlFor={"prompt"}>Prompt:</label>
                    <input type={"text"} name={"prompt"} id={"prompt"}/>
                    <Button type={"submit"}>Generate</Button>
                    {result && <div id="result"> {result} </div>}
                </form>
            </div>

        </div>
    );
};

export default Prompt;