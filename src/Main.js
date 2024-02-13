const Main = ({children , heading}) => {
    console.log("🚀 ~ Main ~ children:", children)
    const a = 10
    
    return (
        <div>
            <h2>{heading}</h2>
            <b>{children ? children : <p>dummy text</p>}</b>
            <h3>{(a > 11) ? "Login" : "Logout"}</h3>
        </div>
    )
}
export default Main