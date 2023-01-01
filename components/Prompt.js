import React from 'react';
import {Button, Input, Text} from "@nextui-org/react";
import {Grid, Container, Dropdown, Spacer, Textarea} from "@nextui-org/react";
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

    const [selectedGradeLevel, setSelectedGradeLevel] = React.useState(new Set(["Select Grade Level"]));
    const selectedGradeLevelValue = React.useMemo(
        () => Array.from(selectedGradeLevel).join(", ").replaceAll("_", " ")
        , [selectedGradeLevel]
    );

    const [selectedLanguage, setSelectedLanguage] = React.useState(new Set(["Select Language"]));
    const selectedLanguageValue = React.useMemo(
        () => Array.from(selectedLanguage).join(", ").replaceAll("_", " ")
        , [selectedLanguage]
    );

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


                            <Dropdown>
                                <Dropdown.Button flat> {selectedGradeLevelValue}</Dropdown.Button>
                                <Dropdown.Menu aria-label="Reading Level"
                                               disallowEmptySelection={true}
                                               selectionMode={"single"}
                                               selectedKeys={selectedGradeLevel}
                                               onSelectionChange={setSelectedGradeLevel}
                                >
                                    <Dropdown.Item key={"1st Grade"}>1st Grade</Dropdown.Item>
                                    <Dropdown.Item key={"2nd Grade"}>2nd Grade</Dropdown.Item>
                                    <Dropdown.Item key={"3rd Grade"}>3rd Grade</Dropdown.Item>
                                    <Dropdown.Item key={"4th Grade"}>4th Grade</Dropdown.Item>
                                    <Dropdown.Item key={"5th Grade"}>5th Grade</Dropdown.Item>
                                    <Dropdown.Item key={"6th Grade"}>6th Grade</Dropdown.Item>
                                    <Dropdown.Item key={"7th Grade"}>7th Grade</Dropdown.Item>
                                    <Dropdown.Item key={"8th Grade"}>8th Grade</Dropdown.Item>
                                    <Dropdown.Item key={"9th Grade"}>9th Grade</Dropdown.Item>
                                    <Dropdown.Item key={"10th Grade"}>10th Grade</Dropdown.Item>
                                    <Dropdown.Item key={"11th Grade"}>11th Grade</Dropdown.Item>
                                    <Dropdown.Item key={"12th Grade"}>12th Grade</Dropdown.Item>
                                    <Dropdown.Item key={"College"}>College</Dropdown.Item>
                                </Dropdown.Menu>

                            </Dropdown>
                            <Spacer y={1}/>
                            <Dropdown>
                                <Dropdown.Button flat> {selectedLanguageValue}</Dropdown.Button>
                                <Dropdown.Menu aria-label="Language"
                                               disallowEmptySelection={true}
                                               selectionMode={"single"}
                                               selectedKeys={selectedLanguage}
                                               onSelectionChange={setSelectedLanguage}
                                >
                                    <Dropdown.Item key={"English"}>English</Dropdown.Item>
                                    <Dropdown.Item key={"Spanish"}>Spanish</Dropdown.Item>
                                    <Dropdown.Item key={"French"}>French</Dropdown.Item>
                                </Dropdown.Menu>

                            </Dropdown>
                        </Grid.Container>


                        <Spacer y={1}/>
                        <Grid.Container justify={"center"}>
                            <Grid alignItems={"center"}>
                                <Button type={"submit"}>Generate</Button>
                            </Grid>
                        </Grid.Container>


                        {/*RESULTS:*/}
                        {result &&
                            <>
                                <Spacer y={2}/>
                                <Text blockquote
                                      id="result"> {result} </Text>
                            </>

                        }
                    </form>
                </div>

            </Container>


        </>
    );
};

export default Prompt;