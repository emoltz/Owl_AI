import React, {useContext} from "react";
import {Navbar, Button, Link, Text} from "@nextui-org/react";
import {OwlLogo} from "./OwlLogo";
import {UserContext} from "../lib/context";
import ThemeSwitcher from "./ThemeSwitcher";


// TODO there is an issue here in the console that needs addressing
// Top navbar
export default function MyNavBar() {
    const {user, username} = useContext(UserContext);
    const [variant, setVariant] = React.useState("floating");

    // const user = true;
    // const username = true;

    return (
        <>
            <Navbar isBordered variant={variant}>
                <Navbar.Brand>
                    <OwlLogo/>
                    <Text b color={"inherit"} hideIn={"xs"} as={Link} href={"/"}>
                        Owl.ai
                    </Text>
                </Navbar.Brand>

                {/*SIGNED IN*/}
                {user && (
                    <>
                        <Navbar.Content hideIn={"smMax"}>
                            <ThemeSwitcher/>
                            <Navbar.Link href={"/about"}>About</Navbar.Link>
                            {/*<Navbar.Link href={"/"}>My Stuff</Navbar.Link>*/}
                            <Navbar.Item>
                                <Button auto flat as={Link} href={"/enter"}>
                                    My Profile
                                </Button>
                            </Navbar.Item>
                        </Navbar.Content>

                    </>

                )}


                {/*NOT SIGNED IN*/}

                {!user && (
                    <>
                        <Navbar.Content hideIn={""}>
                            <Navbar.Item>
                                <Button auto flat as={Link} href={"/enter"}>
                                    Login / Sign Up
                                </Button>
                            </Navbar.Item>

                        </Navbar.Content>
                    </>
                )}

            </Navbar>

        </>
    )
}