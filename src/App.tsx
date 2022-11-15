import React, { useEffect, useRef } from "react";
import "./App.css";
//import { Garden } from "./interfaces/garden";
import { Plant } from "./interfaces/plant";
import { PlantView } from "./PlantView";
import { shadeLevel } from "./interfaces/shadeLevel";
import Serviceberry from "./images/Amelanchier_x_grandifolia_Autumn_Brilliance_1.jpg";

function App(): JSX.Element {
    /* So, in Quizzer, there is an initial list of quizzes given by "sample",
     * which imports a list of quizzes from a file called "quizzes.json" in a special "data" directory.
     */
    const firstPlant: Plant = {
        species: "Autumn Brilliance Serviceberry",
        topImage: Serviceberry,
        sideImage: "",
        // Current size listed below is given in feet (at full size)
        size: 20, // Some number / garden.size
        shadeConditions: [
            shadeLevel.None,
            shadeLevel.Light,
            shadeLevel.Partial
        ],
        floweringPeriod: "Mid-Spring"
    };

    /*
    const firstGarden: Garden = {
        sizeX: 100,
        sizeY: 200
    };
    */
    //Lines 30-32 are states related to the plant (and plant description)
    //const [plants, setPlants] = useState<Plant[]>([firstPlant]);

    // Lines 35-95 is the DnD (Drag and Drop) implementation for our application
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
        // I deleted "e: MouseEvent" in the next function definition because we do not reference "e".
        const onMouseUp = () => {
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
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <PlantView plant={firstPlant}></PlantView>
        </div>
    );
}

export default App;
