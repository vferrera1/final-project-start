import React from "react";
import "./App.css";
import { Garden } from "./interfaces/garden";
import { Plant } from "./interfaces/plant";

function App(): JSX.Element {
    const firstPlant: Plant = {
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
    };

    const firstGarden: Garden = {
        sizeX: 100,
        sizeY: 200
    };
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>Hello, world!</p>
        </div>
    );
}

export default App;
