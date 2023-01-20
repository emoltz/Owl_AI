import React, {useContext, useEffect, useState} from 'react';
import {Container, Grid} from "@nextui-org/react";
import {collectionGroup, getDocs, getFirestore, onSnapshot, orderBy, query, where} from "firebase/firestore";
import {postToJSON} from "../lib/firebase";
import {UserContext} from "../lib/context";
import {RotateLoader} from "react-spinners";
import {MyStuffCard} from "../components/MyStuffCard";
import AuthCheck from "../components/AuthCheck";


export async function getServerSideProps(context) {
    const ref = collectionGroup(getFirestore(), 'saved_text')
    const q = query(
        ref,
        orderBy('created_date', 'desc')
    )
    const data = (await getDocs(q)).docs.map(postToJSON);
    return {
        props: {data},
    }
}


function MyStuff(props) {
    const user = useContext(UserContext);
    const [data, setData] = useState(props.data);
    const [res, setRes] = useState(null);


    useEffect(() => {
        if (user?.uid) {
            const ref = collectionGroup(getFirestore(), 'saved_text')
            const q = query(
                ref,
                where('user_id', '==', user?.uid),
                orderBy('created_date', 'desc')
            )

            return onSnapshot(q, (querySnapshot) => {
                const data = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setRes(data);
            });
        }
    }, [user])

    // const ref = collectionGroup(getFirestore(), 'saved_text')
    // const [posts, loading, error] = useCollection(
    //     query(ref)
    // )
    // if (!loading && posts) {
    //     posts.docs.map((doc) => {
    //             if (doc.data().user_id === user?.uid) {
    //                 console.log(doc.data().user_id);
    //             }
    //
    //         }
    //     )
    //     ;
    // }

    // data.map((doc) => {
    //         if (doc.user_id === user?.uid) {
    //             console.log(doc.contents, user?.uid);
    //
    //         }
    //     }
    // )

    return (
        <>
            <AuthCheck>
                <Container fluid>
                    {user ?
                        <h1>
                            Welcome, {user?.displayName}! <br/>
                        </h1>
                        :
                        <Container>
                            <RotateLoader color={"#000000"} loading={true} size={20}/>
                        </Container>
                    }

                </Container>


                <Container>
                    {data ?
                        data.map((doc) => {
                            if (doc.user_id === user?.uid) {
                                return (
                                    <div key={doc.id}>
                                        <Grid.Container gap={2} justify={"center"}>
                                            <Grid xs>
                                                    <MyStuffCard cardLevel={doc.grade_level} cardTitle={doc.title}
                                                                 cardContents={doc.contents} cardDate={(new Date(doc.created_date).toDateString())}
                                                    />
                                            </Grid>
                                        </Grid.Container>
                                    </div>

                                )
                            }

                    }) :
                    <div>
                        Loading...
                    </div>
                    }
                </Container>
            </AuthCheck>
        </>

    );
}

    export default MyStuff;