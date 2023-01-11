import React, {useContext, useEffect, useState} from 'react';
import {Button, Container} from "@nextui-org/react";
import {
    query,
    collectionGroup,
    doc,
    setDoc,
    getDocs,
    collection,
    addDoc,
    getFirestore,
    where
} from "firebase/firestore";
import {firestore, auth, getCurrentUser, postToJSON} from "../lib/firebase";
import {UserContext} from "../lib/context";
import {useAuthState} from "react-firebase-hooks/auth";
import {PacmanLoader, RotateLoader} from "react-spinners";

export async function getServerSideProps(context) {
    const ref = collectionGroup(getFirestore(), 'saved_text')
    const q = query(
        ref,
        // where('user_id', '==', "OTArZphQoKUcN6pHIpSXfB2QUI12")
    )

    const res = (await getDocs(q)).docs.map(postToJSON);
    const user = await auth.currentUser;

    return {
        props: {
            res,
            user
        },
    }
}

function MyStuff(props) {
    const {user} = useContext(UserContext);
    // const {userEmail, userDisplayName, userID} = getCurrentUser();
    const [res, setRes] = useState(props.res);
    console.log(props)

    return (
        <>
            <Container>
                {user ?
                    <h1>
                        Welcome, {user.displayName}! <br/>
                    </h1>
                    :
                    <Container>
                        <RotateLoader color={"#000000"} loading={true} size={20}/>
                    </Container>
                }
            </Container>
            <Container>
                <h3>Data goes here:</h3>
                {res.map((item) => {
                    return (

                        <div key={item.id}><h3>Contents:</h3> {item.contents}
                        <br/>
                            <h3>Original Text:</h3> {item.original_text}
                        </div>
                    )

                })}
            </Container>

        </>

    );
}

export default MyStuff;