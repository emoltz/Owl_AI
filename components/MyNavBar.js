import React from "react";
import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";
import {OwlLogo} from "./OwlLogo";

// Top navbar
export default function MyNavBar() {
    const user = null;
    const username = null;

    const [variant, setVariant] = React.useState("floating");
    return (
        <>
            <Navbar isBordered variant={variant}>
                <Navbar.Brand>
                    <OwlLogo/>
                    <Text b color={"inherit"} hideIn={"xs"} as={Link} href={"/"}>
                        Owl.ai
                    </Text>
                </Navbar.Brand>

                <Navbar.Content hideIn={"xs"}>

                </Navbar.Content>

                <Navbar.Content hideIn={""}>
                    <Navbar.Link href={"/"}>About</Navbar.Link>
                    <Navbar.Link href={"/"}>My Stuff</Navbar.Link>
                    <Navbar.Item>
                        <Button auto flat as={Link} href={"#"}>
                            Login or Signup
                        </Button>
                    </Navbar.Item>

                </Navbar.Content>


            </Navbar>

        </>
    )
}