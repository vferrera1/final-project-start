import React from "react";
import "./styles/globals.css";
//import { Garden } from "./interfaces/garden";
import { PlantView } from "./components/PlantView";
import Garden from "./components/Garden";
import PropList from "./components/PropList";
import { BorderBox } from "./components/BorderBox";
import { PropListArr } from "./interfaces/PropList";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">Garden on the Go!</header>
            <div className="borderbox">
                <BorderBox></BorderBox>
            </div>
            <div className="boxcontainer">
                <PropList></PropList>
                <div className="borderbox">
                    <BorderBox></BorderBox>
                </div>
                <Garden></Garden>
                <div className="borderbox">
                    <BorderBox></BorderBox>
                </div>
            </div>
            <div className="borderbox">
                <BorderBox></BorderBox>
            </div>
        </div>
    );
}

export default App;
