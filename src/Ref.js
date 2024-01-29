import { useRef } from "react"

const Ref = () => {
    const ref = useRef(0);
    const handleClick = () => {
        ref.current = ref.current + 1
    }
  return (
    <button onClick={handleClick}>click</button>
  )
}

export default Ref