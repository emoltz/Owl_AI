import {auth, googleAuthProvider} from '../lib/firebase';
import {Button} from "@nextui-org/react";
import {useContext} from "react";
import {UserContext} from "../lib/context";

export default function Enter(props) {
    const {user, username} = useContext(UserContext);

    return (
        <main>
            {user ?
                !username ? <UsernameForm/> : <SignOutButton/>
                :
                <SignInButton/>
            }
        </main>


    )
}


function SignInButton() {
    const signInWithGoogle = async () => {
        await auth.signInWithPopup(googleAuthProvider);
    };

    return (
        <Button size="xl" color="secondary" className={"btn-google"} onClick={signInWithGoogle}>
            <img src={'/google.png'} alt={"Sign in with Google"}/> Sign in with Google
        </Button>
    );
}

function SignOutButton() {
    return <Button color={"secondary"} onClick={() => auth.signOut()}>Sign Out</Button>;

}

function UsernameForm() {
    return null;
}