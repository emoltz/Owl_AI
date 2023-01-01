import React from 'react';
import {Card, Spacer, Text, Grid, Col, Row, Button, Container} from "@nextui-org/react";
import Link from "next/link";

const Card2 = () => (
    <>
        <Card isHoverable isPressable>
            <Card.Header>Welcome to Owl.ai!</Card.Header>
            <Card.Body> Welcome to our website! We understand that reading can be a challenge for some students, which
                is why we have developed a tool to help.

                Our website takes reading text and uses machine learning to scaffold it to different reading levels.
                This means that you can input a piece of text and select the desired reading level, and our tool will
                adjust the text to match that level.

                This is especially useful for students who may be struggling with reading comprehension or for educators
                looking to differentiate instruction for their students.

                Try it out for yourself and see how our tool can help improve reading skills and confidence.</Card.Body>
        </Card>
    </>


);


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