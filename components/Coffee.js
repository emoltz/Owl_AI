import React from 'react';
import {Button, Image, Link, Text} from '@nextui-org/react';


function Coffee() {
    return (
        <Link href={"https://www.buymeacoffee.com/esmoltz"}>

            <Button flat rounded bordered color={"warning"}>
            <Image css={{
                height: "20px", width: "20px", marginBottom: "1px",
            }}
                   src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a coffee"/>
            <Text>Buy me a coffee</Text>
        </Button>

        </Link>
    );


}

export default Coffee;