import React, {useContext, useEffect, useState} from 'react';
import {Button, Container} from "@nextui-org/react";
import {query, collectionGroup, doc, setDoc, getDocs, collection, addDoc, getFirestore} from "firebase/firestore";
import {firestore, auth, getCurrentUser} from "../lib/firebase";
import {UserContext} from "../lib/context";
import {useAuthState} from "react-firebase-hooks/auth";

export async function getServerSideProps(context) {
    const ref = collectionGroup(getFirestore(), 'posts')
    const q = query(
        ref,
    )
    const res = (await getDocs(q)).docs.map((doc) => doc.data());




    return {
        props: {
            res,
        },
    }
}

function MyStuff(props) {
    const {user, username} = useContext(UserContext);
    const {userEmail, userDisplayName, userID} = getCurrentUser();
    const [res, setRes] = useState(props.res);

    return (
        <>
            <Container>
                <h1>Hello, {userDisplayName}</h1>
            </Container>
            <Container>
                <h3>Data goes here:</h3>
                {res.map((item) => {
                    return <div key={item.id}>Post slug: {item.slug}</div>
                })}
            </Container>

            <Container>
                <h3>
                    User info
                </h3>


            </Container>

        </>

    );
}

export default MyStuff;