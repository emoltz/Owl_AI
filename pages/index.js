import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import {PacmanLoader, RotateLoader} from "react-spinners";
import {Button} from "@nextui-org/react";
import toast from "react-hot-toast";


export default function Home() {
    const handleClick = async () => {
        const response = await fetch('/api/dream', {
            method: 'POST',
            body: JSON.stringify({
                prompt: "Write a short story"
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        console.log(data)

    }


    return (
        <>
            <h1>Home!</h1>
            {/*<RotateLoader color={"#000000"} loading={true} size={20}/>*/}
            <Button shadow color={"secondary"} onClick={() => toast.success("Success!")}>Success</Button>
            <Button shadow onPress={handleClick}>Click me</Button>

        </>
    )
}
