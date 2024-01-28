import Button from "./Button";

export default function Header({ heading, text }){
    return (
        <>
        <h1>AOA - React Class</h1>
        <h1>{heading}</h1>
        <p>{text}</p>

        </>
    )
}
