import React, { useState } from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../DnD-demo/constants";
import { Plant } from "../interfaces/plant";
import { PlantDescriber } from "./PlantDescriber";

function Prop({ plant }: { plant: Plant }): JSX.Element {
    const makeid = (length: number) => {
        let result = "";
        const characters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
            );
        }
        return result;
    };
    const [{ isDragging }, drag] = useDrag({
        item: {
            type: ItemTypes.PROP,
            id: makeid(10),
            data: plant,
            name: plant.species
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    });
    const [descriptionVisible, setDescriptionVisible] =
        useState<boolean>(false);
    function displayPlantDescription(): JSX.Element {
        return <PlantDescriber plant={plant}></PlantDescriber>;
    }
    return (
        <div>
            <img
                id={plant.id.toString()}
                ref={drag}
                src={plant.sideImage}
                alt={plant.species}
                style={{ border: isDragging ? "5px solid pink" : "0px" }}
                onClick={() => setDescriptionVisible(!descriptionVisible)}
            />
            {descriptionVisible && displayPlantDescription()}
        </div>
    );
}

export default Prop;
