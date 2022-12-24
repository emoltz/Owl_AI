import {auth, googleAuthProvider} from '../lib/firebase';
import {Button} from "@nextui-org/react";

export default function Enter(props) {
    const user = null;
    const username = null;

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
    return <button onClick={() => auth.signOut()}>Sign Out</button>;

}

function UsernameForm() {
    return null;
}