import React from "react";
import ReactDOM  from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyButton from "./components/MyButton";
import Main from "./Main";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        {/* <App /> */}
        <Main heading={`Heading`}>I am a child text</Main>
        <h1>I am  a headingh1</h1>
    </React.StrictMode>
);