import { useState } from "react"

export default function counter (){
    const [count, setCount] = useState(29);
    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount)
    }
    const handleReduce = () => {
        const reduceCount = count - 1;
        setCount(reduceCount)
    }
    return (
        <div>
            <h3 style={{border: '2px solid tomato'}}>counter: {count} </h3>
            <button onClick={handleAdd}>add</button>
            <button onClick={handleReduce}>reduce</button>
        </div>
    )
}