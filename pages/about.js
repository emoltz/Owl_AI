import { useState } from 'react'
import {Button} from "@nextui-org/react";

export default function About() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>You clicked {count} times</p>
      <Button onClick={() => setCount(count + 1)}>Click me</Button>
    </div>
  )
}
