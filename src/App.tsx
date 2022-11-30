/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import "./styles/globals.css";
//import { Garden } from "./interfaces/garden";
import { PlantView } from "./components/PlantView";
import Garden from "./components/Garden";
import PropList from "./components/PropList";
import { BorderBox } from "./components/BorderBox";
import { PropListArr } from "./interfaces/PropList";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App(): JSX.Element {
    return (
        <DndProvider backend={HTML5Backend}>
            <PlantView plant={PropListArr[0]} />
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
        </DndProvider>
    );
}

export default App;
