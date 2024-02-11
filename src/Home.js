import { useState } from "react"
import "./App.css"
function Home(){
    const [lightTheme, setLightTheme] = useState(true)
    const [login, setLogin] = useState(true)
    const handleClick = () => {
        setLightTheme(!lightTheme)
    }
    return (
        <div className={lightTheme ? "light" : "dark"}>
            {/* <img src={} /> */}
          <div>Home {lightTheme ? "light": "dark"}</div>
          <label className="switch">
          <input onClick={handleClick} type="checkbox" />
          <span className="slider round"></span>
          </label>
          {lightTheme && (
            <>
          <h1>Only on light theme</h1>
          <h1>Only on light theme2222</h1>
          </>
          )
        }
        </div>
    )
}
export default Home
