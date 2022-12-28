import {auth} from '../lib/firebase';
import {UserContext} from "../lib/context";
import {Button} from "@nextui-org/react";
import {useContext} from "react";
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";

export default function Enter(props) {
    const {user, username} = useContext(UserContext);

    return (
        <main>
            {
                user ?
                    <div>

                        <h1>Logged In</h1> <SignOutButton/>
                    </div>
                    :
                    <div>
                        <h1>Not User</h1> <SignInButton/>
                    </div>

            }
        </main>


    )
}


function SignInButton() {
    const signInWithGoogle = async () => {
        const googleProvider = new GoogleAuthProvider();
        await signInWithPopup(auth, googleProvider);
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