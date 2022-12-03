/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../DnD-demo/constants";
import { Plant } from "../interfaces/plant";

function PropInGarden({ plant }: { plant: Plant }): JSX.Element {
    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes.PROP, id: plant },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    });
    /*const [descriptionVisible, setDescriptionVisible] =
        useState<boolean>(false);
    
    function displayPlantDescription(): JSX.Element {
        return <PlantDescriber plant={plant}></PlantDescriber>;
    }
    */
    return (
        <div>
            <img
                id={plant.id.toString()}
                ref={drag}
                src={plant.sideImage}
                alt={plant.species}
                style={{ border: isDragging ? "5px solid pink" : "0px" }}
            />
        </div>
    );
}

export default PropInGarden;
