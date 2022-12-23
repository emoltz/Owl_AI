import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import {PacmanLoader, RotateLoader} from "react-spinners";
import {Button} from "@nextui-org/react";
import toast from "react-hot-toast";

export default function Home() {
    return (
        <>
            <h1>Home!</h1>
            <Button onClick={() => toast.success("Success!")}>Success</Button>
        </>
    )
}
