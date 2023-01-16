import React, {useContext, useEffect, useState} from 'react';
import {Container} from "@nextui-org/react";
import {collectionGroup, getDocs, getFirestore, onSnapshot, orderBy, query, where} from "firebase/firestore";
import {getCurrentUser, postToJSON} from "../lib/firebase";
import {UserContext} from "../lib/context";
import {RotateLoader} from "react-spinners";
import {MyStuffCard} from "../components/MyStuffCard";

export async function getServerSideProps(context) {
    const ref = collectionGroup(getFirestore(), 'saved_text')
    const q = query(
        ref,
        where('user_id', '==', "OTArZphQoKUcN6pHIpSXfB2QUI12"), //TODO make sure this is for the specific user
        // TODO https://colinhacks.com/essays/nextjs-firebase-authentication
        orderBy('created_date', 'desc')
    )

    const res = (await getDocs(q)).docs.map(postToJSON);

    return {
        props: {
            res
        },
    }
}

function MyStuff(props) {
    const {user} = useContext(UserContext);
    const [data, setData] = useState(null);
    let testData = null;
    const {userEmail, userDisplayName, userID} = getCurrentUser();
    // const [res, setRes] = useState(props.res);
    const [res, setRes] = useState(null);

    //get users stuff from firebase firestore
    useEffect(() => {
        const ref = collectionGroup(getFirestore(), 'saved_text')
        const q = query(
            ref,
            where('user_id', '==', userID),
            orderBy('created_date', 'desc')
        )

        return onSnapshot(q, (querySnapshot) => {
            const data = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            setRes(data);
        });
    })

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
                {res ?

                    res.map((item) => {
                        return (
                            <div key={item.id}>
                                <MyStuffCard cardLevel={item.grade_level} cardTitle={item.title}
                                             cardContents={item.contents}
                                    // cardDate={item.created_date}
                                />
                            </div>
                        )

                    })
                    :
                    <Container fluid>

                        <RotateLoader color={"#000000"} loading={true} size={20}/>
                    </Container>

                }


            </Container>


            {/*{data.map((item) => {*/}
            {/*    return (*/}
            {/*        <div key={item.id}>*/}
            {/*            <MyStuffCard cardLevel={item.grade_level} cardTitle={item.title}*/}
            {/*                         cardContents={item.contents}*/}
            {/*                // cardDate={item.created_date}*/}
            {/*            />*/}
            {/*        </div>*/}
            {/*    )*/}

            {/*}, [])}*/}

        </>

    );
}

export default MyStuff;

