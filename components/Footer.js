import React from "react";
import {useContext} from "react";
import {Card, Grid, Spacer, Text} from "@nextui-org/react";
import Link from "next/link";


export default function Footer() {


    return (
        <footer>
            <Spacer y={5}/>
            <Grid.Container justify={"center"}>
                <Card isHoverable variant={"bordered"} css={{w: "75%"}}>
                    <Card.Body>
                        <Grid>
                            <Grid.Container justify={"center"}>
                                <Grid>
                                    <div style={{
                                        textAlign: "center"
                                    }}>
                                        <Text
                                            i
                                            css={{
                                                textAlign: "center",
                                                color: "gray",
                                            }}
                                        >

                                            {(new Date()).getFullYear()} © Owl.ai


                                        </Text>
                                        <Text
                                            css={
                                                {
                                                    textAlign: "center",
                                                }
                                            }
                                        >
                                            <Link href={"https://github.com/emoltz/Owl_AI"}>
                                                Open Source on Github
                                            </Link>
                                        </Text>
                                    </div>
                                </Grid>
                            </Grid.Container>
                        </Grid>

                    </Card.Body>

                </Card>
            </Grid.Container>
        </footer>
    )
}