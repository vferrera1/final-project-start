import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//import Board from "./Board";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

/*
observe((picPosition: [number, number]) => {
    ReactDOM.render(
        <React.StrictMode>
            <div
                style={{
                    width: "300px",
                    height: "500px",
                    border: "1px solid gray"
                }}
            >
                <Board picPosition={picPosition} />
            </div>
        </React.StrictMode>,
        document.getElementById("root")
    );
});
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
