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
    const containerRef = useRef<HTMLDivElement>(null);
    const PropRef = useRef<HTMLDivElement>(null);

    const isClicked = useRef<boolean>(false);

    const coords = useRef<{
        startX: number;
        startY: number;
        lastX: number;
        lastY: number;
    }>({
        startX: 0,
        startY: 0,
        lastX: 0,
        lastY: 0
    });

    useEffect(() => {
        if (!PropRef.current || !containerRef.current) return;

        const prop = PropRef.current;
        const container = containerRef.current;

        const onMouseDown = (e: MouseEvent) => {
            isClicked.current = true;
            coords.current.startX = e.clientX;
            coords.current.startY = e.clientY;
        };

        const onMouseUp = (e: MouseEvent) => {
            isClicked.current = false;
            coords.current.lastX = prop.offsetLeft;
            coords.current.lastY = prop.offsetTop;
        };

        const onMouseMove = (e: MouseEvent) => {
            if (!isClicked.current) return;

            const nextX =
                e.clientX - coords.current.startX + coords.current.lastX;
            const nextY =
                e.clientY - coords.current.startY + coords.current.lastY;

            prop.style.top = `${nextY}px`;
            prop.style.left = `${nextX}px`;
        };

        prop.addEventListener("mousedown", onMouseDown);
        prop.addEventListener("mouseup", onMouseUp);
        container.addEventListener("mousemove", onMouseMove);
        container.addEventListener("mouseleave", onMouseUp);

        const cleanup = () => {
            prop.removeEventListener("mousedown", onMouseDown);
            prop.removeEventListener("mouseup", onMouseUp);
            container.removeEventListener("mousemove", onMouseMove);
            container.removeEventListener("mouseleave", onMouseUp);
        };

        return cleanup;
    }, []);

    return (
        <main>
            <div ref={containerRef} className="container">
                <div ref={PropRef} className="box"></div>
            </div>
        </main>
    );
}

export default App;
