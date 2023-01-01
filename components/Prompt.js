import React from 'react';
import {Button, Input} from "@nextui-org/react";
import {Grid, Container, Card, Spacer, Textarea} from "@nextui-org/react";
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
        <>
            <Container fluid>

                <div id="result" className={"text-center"}>
                    <Spacer y={4}/>
                    {/*<h1>Owl.ai </h1>*/}
                    <form action={""} method={"POST"} onSubmit={handleSubmit}>
                        <Textarea
                            bordered
                            type={"text"} name={"prompt"} id={"prompt"}
                            labelPlaceholder={"Enter the text you'd like to scaffold here."}
                            aria-label={"Enter the text you'd like to scaffold here."}
                            minRows={2}
                            maxRows={100}
                            fullWidth={true}

                        />
                        <Spacer y={1}/>
                        <Grid.Container justify={"center"}>
                            <Grid alignItems={"center"}>
                                <Button type={"submit"}>Generate</Button>
                            </Grid>
                        </Grid.Container>

                        {result && <div id="result"> {result} </div>}
                    </form>
                </div>

            </Container>


        </>
    );
};

export default Prompt;