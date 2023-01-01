import React from 'react';
import {Card, Spacer, Text, Grid, Col, Row, Button, Container} from "@nextui-org/react";
import Link from "next/link";

const Card5 = () => (
    <>
        <Card isHoverable isPressable css={{w: "80%", h: "400px"}}>
            <Card.Header css={{position: "absolute", zIndex: 1, top: 5}}>
                <Col>
                    <Text size={12} weight="bold" transform="uppercase" color="">
                        Use AI to scaffold your text
                    </Text>
                    <Text h3 color="white">
                        Your checklist for better sleep
                    </Text>
                </Col>
            </Card.Header>
            <Card.Body css={{p: 0}}>
                <Card.Image
                    src="/owl2.jpg"
                    objectFit="cover"
                    width="100%"
                    height="100%"
                    alt="Relaxing app background"
                />
            </Card.Body>
            <Card.Footer
                isBlurred
                css={{
                    position: "absolute",
                    bgBlur: "#0f111466",
                    borderTop: "$borderWeights$light solid $gray800",
                    bottom: 0,
                    zIndex: 1,
                }}
            >
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <Text color="#d1d1d1" size={12}>
                                    Breathing App
                                </Text>
                                <Text color="#d1d1d1" size={12}>
                                    Get a good night's sleep.
                                </Text>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row justify="flex-end">

                        </Row>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>

    </>


)

const Card2 = () => (
    <>
        <Card isHoverable isPressable>
            <Card.Header>Welcome to Owl.ai!</Card.Header>
            <Card.Body> Welcome to our website! We understand that reading can be a challenge for some students, which is why we have developed a tool to help.

Our website takes reading text and uses machine learning to scaffold it to different reading levels. This means that you can input a piece of text and select the desired reading level, and our tool will adjust the text to match that level.

This is especially useful for students who may be struggling with reading comprehension or for educators looking to differentiate instruction for their students.

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
                        {/*<Card5/>*/}
                        <Card2/>
                    </Grid>
                </Grid.Container>


            </Container>

        </>

    );
}

export default Welcome;