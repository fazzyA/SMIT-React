import { useEffect, useState } from "react"

const Main = () => {
    const [num, setNum] = useState(30)
    const [str, setStr] = useState("")
    useEffect(() =>{
        console.log("I am in useeffect")
        
    }, [str])
    // [] tells only when component is mounted or render first time
    const handleClick = (e) => {
        setStr(e.target.value)
    }
    return (
        <div>
        <h2>{num}</h2>
        <h1>{str}</h1>
        {/* <input type="text" onChange={(e) => setStr(e.target.value)} /> */}
        <input type="text" onChange={(e) => handleClick(e)} />
        </div>
    )
}
export default Main