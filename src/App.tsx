import React from "react";
import "./App.css";
//import { Garden } from "./interfaces/garden";
import { Plant } from "./interfaces/plant";
import { PlantView } from "./PlantView";
import { shadeLevel } from "./interfaces/shadeLevel";
import Serviceberry from "./images/Amelanchier_x_grandifolia_Autumn_Brilliance_1.jpg";
import Garden from "./components/Garden";
import PropList from "./components/PropList";

function App(): JSX.Element {
    /* So, in Quizzer, there is an initial list of quizzes given by "sample",
     * which imports a list of quizzes from a file called "quizzes.json" in a special "data" directory.
     */
    const firstPlant: Plant = {
        id: 1,
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
            <Garden></Garden>
            <PropList></PropList>
        </div>
    );
}

export default App;
