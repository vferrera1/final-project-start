import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import "./App.css";

//import { Garden } from "./interfaces/garden";
//import { Plant } from "./interfaces/plant";

function App(): JSX.Element {
    /*const firstPlant: Plant = {
        species: "tomato",
        topImage: "",
        sideImage: "",
        size: 0, // Some number / garden.size
        lightRequirement: "", // Look up tomato light requirement
        waterRequirement: "", // Look up tomato water requirement
        soilRequirement: "", // Look up tomato soil requirement
        temperatureRequirement: "", // Look up tomato temperature requirement
        timeToBloom: 0, // Look up tomato time to bloom
        bloomDuration: 0, // Look up tomato bloom duration
        age: 2,
        insectFood: true, //Verify that insects like this plant
        birdFood: false,
        animalFood: false // Verify that animals don't like this plant
        <div className="App">
            <Container>
                <div
                    style={{
                        border: "5px solid purple",
                        height: "{px",
                        width: firstGarden.sizeX + "px"
                    }}
                ></div>
            </Container>
        </div>
    };*/
    // This is the State (Model)
    const [size, setSize] = useState<string>("100");

    // This is the Control
    function updateSize(event: React.ChangeEvent<HTMLInputElement>) {
        setSize(event.target.value);
    }

    // This is the View
    return (
        <div>
            <Form.Group controlId="formGardenSize">
                <Form.Label>Size of Garden:</Form.Label>
                <Form.Control
                    type="number"
                    value={size}
                    onChange={updateSize}
                />
            </Form.Group>
            <div
                style={{
                    border: "5px solid purple",
                    height: `${size}px`,
                    width: `${size}px`
                }}
            ></div>
        </div>
    );
}

export default App;
