/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../DnD-demo/constants";
import { Plant } from "../interfaces/plant";

function Prop({ plant }: { plant: Plant }): JSX.Element {
    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes.PROP, id: plant.id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    });
    return (
        <img
            id={plant.id.toString()}
            ref={drag}
            src={plant.sideImage}
            style={{ border: isDragging ? "5px solid pink" : "0px" }}
        />
    );
}

export default Prop;
