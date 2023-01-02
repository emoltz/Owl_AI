import { useState } from 'react'
import {Button, Card, Container, Spacer} from "@nextui-org/react";

export default function About() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Container>

            <Spacer y={2}/>
            <Card isHoverable css={{mw:"400px", padding:"30px"}}>
                Made with Next.js. All source code on <a href="https://github.com/emoltz/Owl_AI"> GitHub</a>
            </Card>
        </Container>
    </div>
  )
}
