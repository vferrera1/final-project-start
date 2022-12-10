import React from "react";
import { Plant } from "../interfaces/plant";

function PropsInBoard({
    plant,
    scaleValue
}: {
    plant: Plant;
    scaleValue: number;
}): JSX.Element {
    return (
        <div>
            <img
                id={plant.id.toString()}
                src={plant.sideImage}
                alt={plant.species}
                style={{
                    width: `${(plant.size / scaleValue) * 800}px`,
                    height: `${(plant.size / scaleValue) * 800}px`
                }}
            />
        </div>
    );
}

export default PropsInBoard;
