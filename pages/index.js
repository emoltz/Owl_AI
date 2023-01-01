import styles from '../styles/Home.module.css'
import Link from "next/link";
import {PacmanLoader, RotateLoader} from "react-spinners";
import Prompt from "../components/Prompt";
import ThemeSwitcher from "../components/ThemeSwitcher";



export default function Home() {
    return (
        <>
            {/*<RotateLoader color={"#000000"} loading={true} size={20}/>*/}
            <Prompt/>
            <ThemeSwitcher/>
        </>
    )
}
