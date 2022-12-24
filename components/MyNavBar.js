import React from "react";
import {Navbar, Button, Link, Text, Card, Radio} from "@nextui-org/react";
import {OwlLogo} from "./OwlLogo";

// Top navbar
export default function MyNavBar() {
    const user = null;
    const username = null;

    // const user = true;
    // const username = true;

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

                {/*SIGNED IN*/}
                {username && (
                <>
                    <Navbar.Content hideIn={""}>
                        <Navbar.Link href={"/"}>About</Navbar.Link>
                        <Navbar.Link href={"/"}>My Stuff</Navbar.Link>
                        <Navbar.Item>
                            <Button auto flat as={Link} href={"#"}>
                                My Profile
                            </Button>
                        </Navbar.Item>

                    </Navbar.Content>
                </>

                )}

                {/*    END SIGNED IN*/}

                {!username && (
                    <>
                    <Navbar.Content hideIn={""}>
                        <Navbar.Item>
                            <Button auto flat as={Link} href={"#"}>
                                Login / Sign Up
                            </Button>
                        </Navbar.Item>

                    </Navbar.Content>
                    </>
                )}

                {/*NOT SIGNED IN*/}


                {/*    END NOT SIGNED IN*/}


            </Navbar>

        </>
    )
}