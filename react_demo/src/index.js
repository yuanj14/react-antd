import React from "react";
import ReactDOM from "react-dom/client";
import APP from "./advanced/lifecycle";
import Task from "./base01/antd_demo"

const content = "<name>";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
        <Task/>
        <APP />
    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

