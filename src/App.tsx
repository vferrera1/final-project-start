import React from "react";
import "./styles/globals.css";
//import { Garden } from "./interfaces/garden";
//import { PlantView } from "./components/PlantView";
import Garden from "./components/Garden";
import PropList from "./components/PropList";
import { BorderBox } from "./components/BorderBox";
import { BorderBoxUp } from "./components/BorderBoxUp";
//import { PropListArr } from "./interfaces/PropList";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App(): JSX.Element {
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="App">
                <header className="App-header">Garden on the Go!</header>
                <BorderBoxUp></BorderBoxUp>
                <div className="boxcontainer">
                    <PropList></PropList>
                    <BorderBox></BorderBox>
                    <Garden></Garden>
                    <BorderBox></BorderBox>
                </div>
                <BorderBox></BorderBox>
            </div>
        </DndProvider>
    );
}

export default App;
