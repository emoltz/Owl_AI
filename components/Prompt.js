import React, {useContext} from 'react';
import {Button, Input, Modal, Popover, Text} from "@nextui-org/react";
import {Grid, Container, Dropdown, Spacer, Textarea} from "@nextui-org/react";
import toast from "react-hot-toast";
import {UserContext} from "../lib/context";
import {doc, getFirestore, serverTimestamp, setDoc} from "firebase/firestore";


const Prompt = () => {
    const user = useContext(UserContext);
    // DROPDOWN MENU STUFF
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

    const [result, setResult] = React.useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();


        // get grade level text from selectedGradeLevel set
        const gradeLevel = selectedGradeLevelValue;
        let language = selectedLanguageValue;

        //catch if gradelevel and language are set to default values of "Select Grade Level" and "Select Language"
        // if (gradeLevel.has("Select Grade Level")) {
        //     toast.error("Please select a grade level.");
        //     return;
        // }

        const data = new FormData(event.target);

        const toastId = toast.loading("Loading...")

        const response = await fetch('/api/dream', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt: data.get('prompt'),
                gradeLevel: gradeLevel,
                language: language
            }),
        });
        toast.dismiss(toastId)
        toast.success("Success!")

        const {text} = await response.json();
        setResult(text);

    }

    async function sendToSavedText(content, gradeLevel, language = "English", title, notes) {
        const loading = toast.loading("Saving...")
        const uniqueID = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        const uid = user.uid;

        const ref = doc(getFirestore(), 'saved_text', uniqueID);
        const data = {
            archived: false,
            contents: content,
            // original_text: original_text,
            id: uniqueID,
            user_display_name: user.displayName,
            user_id: uid,
            created_date: serverTimestamp(),
            title: title,
            notes: notes,
            language: language,
            grade_level: gradeLevel
        };
        await setDoc(ref, data);
        toast.dismiss(loading);
        toast.success("Saved to Your Stuff!")

    }

    //modal for saving data
    const [isVisible, setIsVisible] = React.useState(false);
    const [inputTitleValue, setInputTitleValue] = React.useState("");
    const handler = () => setIsVisible(true);
    const closeModalHandler = () => {
        setIsVisible(false);
    }

    return (
        <>

            <Container fluid>

                <div id="result" className={"text-center"}>
                    <Spacer y={4}/>
                    <form action={""} method={"POST"} onSubmit={handleSubmit}>
                        <Textarea
                            bordered
                            htmlFor={"prompt"}
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
                            {/*<Spacer y={1}/>*/}
                            {/*<Dropdown>*/}
                            {/*    <Dropdown.Button flat> {selectedLanguageValue}</Dropdown.Button>*/}
                            {/*    <Dropdown.Menu aria-label="Language"*/}
                            {/*                   disallowEmptySelection={true}*/}
                            {/*                   selectionMode={"single"}*/}
                            {/*                   selectedKeys={selectedLanguage}*/}
                            {/*                   onSelectionChange={setSelectedLanguage}*/}
                            {/*    >*/}
                            {/*        <Dropdown.Item key={"English"}>English</Dropdown.Item>*/}
                            {/*        <Dropdown.Item key={"Spanish"}>Spanish</Dropdown.Item>*/}
                            {/*        <Dropdown.Item key={"French"}>French</Dropdown.Item>*/}
                            {/*    </Dropdown.Menu>*/}

                            {/*</Dropdown>*/}
                        </Grid.Container>


                        <Spacer y={1}/>
                        <Grid.Container justify={"center"}>
                            <Grid alignItems={"center"}>
                                <Button type={"submit"}>Generate</Button>
                            </Grid>
                        </Grid.Container>
                    </form>



                    {result &&
                        <>
                            <Spacer y={2}/>
                            <Text blockquote
                                  id="result"> {result} </Text>

                            <Grid.Container justify={"center"}>
                                <Grid alignItems={"center"}>
                                    <Button auto shadow color={"secondary"} onPress={handler}>
                                        Save to My Stuff
                                    </Button>
                                    <Modal
                                        closeButton
                                        aria-labelledby="modal-title"
                                        open={isVisible}
                                        onClose={closeModalHandler}
                                    >
                                        <Modal.Header>
                                            <Text id={"modal-title"} size={18}>
                                                Save to My Stuff
                                            </Text>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Input
                                                clearable
                                                underlined
                                                fullWidth
                                                color={"secondary"}
                                                size={"lg"}
                                                placeholder={"Enter a title for your text"}
                                                value={inputTitleValue}
                                                onChange={(event) => setInputTitleValue(event.target.value)}
                                            />
                                            <Input
                                                clearable
                                                underlined
                                                fullWidth
                                                color={"secondary"}
                                                size={"lg"}
                                                placeholder={"Enter any notes you'd like to add"}
                                            />
                                            <Button color={"secondary"} auto shadow onPress={(e) => {
                                                sendToSavedText(result, selectedGradeLevelValue, "English", inputTitleValue, "notes");
                                                //close modal
                                                closeModalHandler();
                                            }}>
                                                Save

                                            </Button>
                                        </Modal.Body>
                                    </Modal>

                                </Grid>
                            </Grid.Container>


                        </>
                    }

                </div>

            </Container>
        </>
    );
};

export default Prompt;