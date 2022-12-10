/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../DnD-demo/constants";
import { Plant } from "../interfaces/plant";

function PropsInBoard({
    plant,
    scaleValue
}: {
    plant: Plant;
    scaleValue: number;
}): JSX.Element {
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
            type: ItemTypes.PROPINGARDEN,
            id: makeid(10),
            data: plant,
            name: plant.species
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    });

    return (
        <div>
            <img
                id={plant.id.toString()}
                ref={drag}
                src={plant.sideImage}
                alt={plant.species}
                style={{
                    border: isDragging ? "5px solid pink" : "0px",
                    width: `${(plant.size / scaleValue) * 800}px`,
                    height: `${(plant.size / scaleValue) * 800}px`
                }}
                onClick={() => console.log(plant.id)}
            />
        </div>
    );
}

export default PropsInBoard;
