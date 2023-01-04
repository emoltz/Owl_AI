import React, {useState} from 'react';
import {Button, Container} from "@nextui-org/react";


function MyStuff({}) {
    const [count, setCount] = useState(3);

    return (
        <>
            <Container fluid>

                the count is {count} <br/>
                <Button onPress={() => setCount(count + 1)}>increment</Button>


            </Container>

        </>

    );
}

export default MyStuff;