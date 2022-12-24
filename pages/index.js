import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import {PacmanLoader, RotateLoader} from "react-spinners";
import {Button} from "@nextui-org/react";
import toast from "react-hot-toast";
import Prompt from "../components/Prompt";
import MyNavBar from "../components/MyNavBar";
import {OwlLogo} from "../components/OwlLogo";


export default function Home() {
    return (
        <>
            {/*<RotateLoader color={"#000000"} loading={true} size={20}/>*/}
            <Prompt/>



        </>
    )
}
