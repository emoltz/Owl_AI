import {auth} from '../lib/firebase';
import {UserContext} from "../lib/context";
import {Button} from "@nextui-org/react";
import {useContext} from "react";
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import GoogleButton from "react-google-button";
import {Grid, Card} from "@nextui-org/react";

export default function Enter(props) {
    const {user, username} = useContext(UserContext);

    return (
        <>
            <Grid.Container gap={2} justify={"center"}>
                <Grid xs={4} alignItems={"center"}>

                    {
                        user ?
                            // logged in?
                            <div>
                                <h1 className={"text-center"}>Sign Out</h1>
                                <SignOutButton/>
                            </div>
                            :
                            <div>
                                <h2 className={"text-center"}>Sign In</h2>
                                <SignInButton/>
                            </div>
                    }

                </Grid>


            </Grid.Container>

        </>
    )
}


function SignInButton() {

    return (
        <GoogleButton
            onClick={async () => {
                const googleProvider = new GoogleAuthProvider();
                await signInWithPopup(auth, googleProvider);
            }
            }/>
    );
}

function SignOutButton() {
    return <Button color={"secondary"} onClick={() => auth.signOut()}>Sign Out</Button>;
}

function UsernameForm() {
    return null;
}