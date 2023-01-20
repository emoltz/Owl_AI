import {Card, Grid, Text} from "@nextui-org/react";
import React from "react";

export function MyStuffCard({id, cardTitle, cardContents, cardLevel, cardDate, pressAction}) {
    return (

                <Card onPress={pressAction} isPressable isHoverable css={{mw: "100%"}}>
                    <Card.Header>
                        <Text>
                            <Text b>
                                {cardTitle}
                            </Text>
                            <br/>
                            {cardLevel}
                            <br/>
                            <Text i>
                                {cardDate}
                            </Text>
                        </Text>

                    </Card.Header>
                    <Card.Divider/>
                    <Card.Body css={{py: "$10"}}>
                        <Text>
                            {cardContents}
                        </Text>
                    </Card.Body>
                    <Card.Divider/>
                </Card>

    )
}