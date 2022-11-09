import React, { useState } from "react";
import "./App.css";
//import { Garden } from "./interfaces/garden";
import { Plant } from "./interfaces/plant";
import { shadeLevel } from "./interfaces/shadeLevel";
import Serviceberry from "./images/Amelanchier_x_grandifolia_Autumn_Brilliance_1.jpg";

function App(): JSX.Element {
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
    //const [plants, setPlants] = useState<Plant[]>([firstPlant]);
    const [descriptionVisible, setDescriptionVisible] =
        useState<boolean>(false);

    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <img
                src={firstPlant.topImage}
                alt={firstPlant.species}
                width={`${firstPlant.size * 10}`}
                height={`${firstPlant.size * 10}`}
                onMouseOver={() => setDescriptionVisible(!descriptionVisible)}
                onMouseOut={() => setDescriptionVisible(!descriptionVisible)}
            />
            {/* eslint-disable-next-line no-extra-parens*/}
            {descriptionVisible && (
                <div className="Plant-describer">
                    <h6>Plant Name: {firstPlant.species}</h6>
                    <ul>
                        <li>Size: {firstPlant.size} ft</li>
                        <li>
                            Shade Conditions:
                            {firstPlant.shadeConditions.map(
                                (shade: shadeLevel): string =>
                                    `${shade.toString()},`
                            )}
                        </li>
                        <li>Flowering Period: {firstPlant.floweringPeriod}</li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default App;
