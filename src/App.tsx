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
            <PlantView plant={PropListArr[0]}></PlantView>
            <Garden></Garden>
            <PropList></PropList>
            <BorderBox></BorderBox>
            <BorderBox></BorderBox>
            <BorderBox></BorderBox>
            <BorderBox></BorderBox>
        </div>
    );
}

export default App;
