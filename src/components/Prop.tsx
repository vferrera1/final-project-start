/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../DnD-demo/constants";
import { Plant } from "../interfaces/plant";
import { PlantDescriber } from "./PlantDescriber";
//function Prop({ plant }: { plant: Plant }): JSX.Element
function Prop({
    plant,
    sizeValue
}: {
    plant: Plant;
    sizeValue: number;
}): JSX.Element {
    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes.PROP, id: plant },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    });
    const [descriptionVisible, setDescriptionVisible] =
        useState<boolean>(false);
    function displayPlantDescription(): JSX.Element {
        return <PlantDescriber plant={plant}></PlantDescriber>;
    }
    console.log(sizeValue);
    return (
        <div>
            <img
                id={plant.id.toString()}
                ref={drag}
                src={plant.sideImage}
                alt={plant.species}
                style={{
                    border: isDragging ? "5px solid pink" : "0px",
                    width: `${(plant.size / sizeValue) * 800}px`,
                    height: `${(plant.size / sizeValue) * 800}px`
                }}
                onClick={() => setDescriptionVisible(!descriptionVisible)}
                width={(plant.size / sizeValue) * 800}
                height={(plant.size / sizeValue) * 800}
            />
            {descriptionVisible && displayPlantDescription()}
        </div>
    );
}

export default Prop;
