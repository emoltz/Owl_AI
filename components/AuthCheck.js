import Link from 'next/link';
import {useContext} from "react";
import {UserContext} from "../lib/context";
import {Button, Container, Grid, Spacer} from "@nextui-org/react";

// Component's children only shown to logged-in users
export default function AuthCheck(props) {
    const user = useContext(UserContext);

    return user ? props.children : props.fallback ||
        <Grid.Container justify={"center"}>
            <Spacer y={3}/>
            <Grid alignItems={"center"} justify={"center"} xs={12} md={6}>
                <Link href="/enter">
                    <Button flat color={"warning"}>
                        You must be signed in to access this page
                    </Button>
                </Link>
            </Grid>
        </Grid.Container>


}


