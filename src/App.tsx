/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
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
import { Form } from "react-bootstrap";

function App(): JSX.Element {
    const [size, setSize] = useState<number>(800);
    function updateSize(event: React.ChangeEvent<HTMLInputElement>) {
        setSize(event.target.valueAsNumber);
    }
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="App">
                <header className="App-header">Garden on the Go!</header>
                <div>
                    <Form.Group controlId="formGardenSize">
                        <Form.Label>Size of Garden:</Form.Label>
                        <Form.Control
                            type="number"
                            value={size}
                            onChange={updateSize}
                        />
                    </Form.Group>
                </div>
                <BorderBoxUp></BorderBoxUp>
                <div className="boxcontainer">
                    <PropList></PropList>
                    <BorderBox></BorderBox>
                    <Garden scaleValue={size} />
                    <BorderBox></BorderBox>
                </div>
                <BorderBox></BorderBox>
            </div>
        </DndProvider>
    );
}

export default App;
