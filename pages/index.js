import styles from '../styles/Home.module.css'
import Link from "next/link";
import {PacmanLoader, RotateLoader} from "react-spinners";
import Prompt from "../components/Prompt";
import {useContext} from "react";
import {UserContext} from "../lib/context";
import ThemeSwitcher from "../components/ThemeSwitcher";



export default function Home() {
    const {user, username} = useContext(UserContext);

    return (
        <>
            {/*<RotateLoader color={"#000000"} loading={true} size={20}/>*/}
            {user ?
                <Prompt/>
                :
                <div>
                    Sign In!
                </div>
            }
        </>
    )
}
