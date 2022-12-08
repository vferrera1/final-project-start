/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../DnD-demo/constants";
import { Plant } from "../interfaces/plant";
import { PlantDescriber } from "./PlantDescriber";

function Prop({
    plant,
    selectElement,
    scaleValue
}: {
    plant: Plant;
    selectElement: (id: number) => void;
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
                onClick={() => {
                    selectElement(plant.id);
                }}
            />
        </div>
    );
}

export default Prop;
