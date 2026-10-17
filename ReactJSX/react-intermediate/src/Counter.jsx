import { useState } from "react"
export default function Counter() {
    const [count, setCount] = useState(0); //intialization stage not re-render
    console.log('Component rendered ' + count + ' times !');
    function increaseCount() {
        setCount((currCount) => {
            return currCount + 1;
        })
        setCount((currCount) => {
            return currCount + 1;
        })
        console.log(count);
    }
    return (
        <>
            <p>{count}</p>
            <button onClick={increaseCount}>count me !</button>
        </>
    )
}