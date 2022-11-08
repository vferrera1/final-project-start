import React, { useEffect, useRef } from "react";
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
    };

    const firstGarden: Garden = {
        sizeX: 100,
        sizeY: 200
    };
    */
    const boxRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!boxRef.current || !containerRef.current) return;

        const box = boxRef.current;
        const container = containerRef.current;
        box.addEventListener("mousedown", () => {
            console.log("clicked");
        });
    }, []);

    return (
        <main>
            <div ref={containerRef} className="container">
                <div ref={boxRef} className="box"></div>
            </div>
        </main>
    );
}

export default App;
