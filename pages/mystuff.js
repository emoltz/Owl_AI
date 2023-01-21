import React, {useContext, useEffect, useState} from 'react';
import {useModal, Container, Grid, Modal, Button, Text, Input, Row, Divider} from "@nextui-org/react";
import {collectionGroup, getDocs, getFirestore, onSnapshot, orderBy, query, where, deleteDoc} from "firebase/firestore";
import {postToJSON, deleteDocFromFirebase} from "../lib/firebase";
import {UserContext} from "../lib/context";
import {PacmanLoader, RotateLoader} from "react-spinners";
import {MyStuffCard} from "../components/MyStuffCard";
import AuthCheck from "../components/AuthCheck";


export async function getServerSideProps(context) {
    const ref = collectionGroup(getFirestore(), 'saved_text')
    const q = query(ref, orderBy('created_date', 'desc'))
    const data = (await getDocs(q)).docs.map(postToJSON);
    return {
        props: {data},
    }
}


function MyStuff(props) {
    const user = useContext(UserContext);
    const [data, setData] = useState(props.data);
    const [res, setRes] = useState(null);

    //MODAL STUFF
    const [cardID, setCardID] = useState(null);
    const {setVisible, bindings} = useModal();
    const handler = (id) => {
        setCardID(id);
        setVisible(true);
        console.log(cardID);
    }

    // EDITING NOTES


    useEffect(() => {
        if (user?.uid) {
            const ref = collectionGroup(getFirestore(), 'saved_text')
            const q = query(ref, where('user_id', '==', user?.uid), orderBy('created_date', 'desc'))

            return onSnapshot(q, (querySnapshot) => {
                const data = querySnapshot.docs.map((doc) => ({
                    id: doc.id, ...doc.data()
                }));
                setRes(data);
            });
        }
    }, [user])

    return (<>
            <AuthCheck>
                <Container fluid>
                    {user ? <h1>
                        Welcome, {user?.displayName}! <br/>
                    </h1> : <Container>
                        <RotateLoader color={"#000000"} loading={true} size={20}/>
                    </Container>}

                </Container>


                <Container>
                    <Grid.Container gap={2} justify={"center"}>
                        {res ? res.map((doc) => {
                            if (doc.user_id === user?.uid) {
                                return (
                                        <Grid xs={4} key={doc.id}>
                                            <MyStuffCard
                                                id={doc.id}
                                                pressAction={() => handler(doc.id)}
                                                cardLevel={doc.grade_level}
                                                cardTitle={doc.title}
                                                cardContents={doc.contents}
                                                // cardDate={(new Date(doc.created_date).toLocaleDateString())}
                                                // TODO figure out the date issue here
                                            />
                                        </Grid>


                                )
                            }

                        }) : <PacmanLoader/>

                        }
                    </Grid.Container>
                </Container>

                {/*    MODAL*/}

                {data.map((doc) => {

                    if (doc.id === cardID) {
                        return (<div key={doc.id}>
                            <Modal
                                scroll={true}
                                width={"600px"}
                                blur
                                closeButton
                                aria-label="Modal"
                                // open={modalVisible}
                                // onClose={closeHandler}
                                {...bindings}
                            >
                                <Modal.Header id={"modal-title"} size={18}>
                                    <Text i>Created on {(new Date(doc.created_date).toLocaleDateString())}</Text>
                                </Modal.Header>
                                <Text h3>{doc.title}</Text>
                                <Text i>{doc.grade_level} Reading Level</Text>
                                <Modal.Body>
                                    <Text id={"modal-description"}>
                                        {doc.contents}
                                    </Text>
                                    <Divider/>
                                    <Text style={{
                                        background: "#f5f5f5", padding: "10px",
                                    }}>{doc.notes}</Text>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button
                                        onPress={() => {
                                            deleteDocFromFirebase("saved_text", doc.id).then(r => {
                                                console.log(r);
                                            });
                                            setVisible(false);


                                        }}
                                        flat color={"error"}>

                                        Delete
                                    </Button>
                                    <Button onPress={() => {
                                        console.log("Edit button pressed")
                                    }}>
                                        Edit
                                    </Button>
                                </Modal.Footer>

                            </Modal>
                        </div>)
                    }
                })}


            </AuthCheck>
        </>

    );
}

export default MyStuff;