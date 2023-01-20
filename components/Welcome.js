import React from 'react';
import {Card, Spacer, Text, Grid, Col, Row, Button, Container} from "@nextui-org/react";
import Link from "next/link";

const Card2 = () => (
        <>
            <Card isHoverable isPressable>
                <Card.Header >
                    <Text css={{fontWeight: "bold"}}>Welcome to Owl.ai, an auto-differentiation tool for educators.</Text>

                </Card.Header>
                <Card.Body>

                    Owl.ai takes reading text and uses machine learning to scaffold it to different reading levels.
                    This means that you can input a piece of text and select the desired reading level, and our tool will
                    adjust the text to match that level.

                    This is especially useful for students who may be struggling with reading comprehension or for educators
                    looking to differentiate instruction for their students.
                </Card.Body>
                <Card.Footer >
                    To get started, signup or login above.
                </Card.Footer>
            </Card>
        </>


    )
;


function Welcome({}) {
    return (
        <>
            <Container fluid justify={"center"}>
                <Grid.Container gap={2} justify="center">
                    <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Card2/>
                    </Grid>
                </Grid.Container>


            </Container>

        </>

    );
}

export default Welcome;