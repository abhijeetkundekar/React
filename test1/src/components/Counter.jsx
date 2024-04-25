import React, { useState } from 'react'

export default function Counter() {
    let [count, setCount] = useState(0);

    const incrementCounter=()=>{
        console.log("increment counter")
        setCount(count+1)
    }
    const decrementCounter=()=>{
        console.log("decrement counter")
        setCount(count-1)
    }
    console.log("I ran ")
  return (
    <>
        <button onClick={incrementCounter}>+</button>
            <p>{count}</p>
        <button onClick={decrementCounter}>-</button>
    </>
  )
}
