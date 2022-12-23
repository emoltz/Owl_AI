import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import {PacmanLoader, RotateLoader} from "react-spinners";
import {Button} from "@nextui-org/react";
import toast from "react-hot-toast";

export default function Home() {
    return (
        <>
            <h1>Home!</h1>
            {/*<RotateLoader color={"#000000"} loading={true} size={20}/>*/}
            <Button shadow color={"secondary"} onClick={() => toast.success("Success!")}>Success</Button>
        </>
    )
}
