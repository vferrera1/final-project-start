import React, { useState } from "react";
("./styles/globals.css");
import { Plant } from "../interfaces/plant";
import { PlantDescriber } from "./PlantDescriber";

export function PlantView({ plant }: { plant: Plant }): JSX.Element {
    const [descriptionVisible, setDescriptionVisible] =
        useState<boolean>(false);
    return (
        <div className="Plant">
            <img
                src={plant.topImage}
                alt={plant.species}
                width={`${plant.size * 10}`}
                height={`${plant.size * 10}`}
                onClick={() => setDescriptionVisible(!descriptionVisible)}
            />
            {/* eslint-disable-next-line no-extra-parens */}
            {descriptionVisible && (
                <PlantDescriber plant={plant}></PlantDescriber>
            )}
        </div>
    );
}
/* Shows an image of a plant (which has a specific set of characteristics), which can be tied to the following events:
 *    The image of the plant can be dragged
 *    Clicking on the image pulls up a description box of the plant.
 *       The description box can be editted via an "Edit button"
 */
