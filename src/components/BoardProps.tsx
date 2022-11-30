/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../DnD-demo/constants";
import { Plant } from "../interfaces/plant";
import Prop from "./Prop";
export const Boardarr: Plant[] = [];
function BoardProps() {
    // const [{ isOver }, drop] = useDrop(() => ({
    //     accept: { Prop },
    //     drop: (ref) => addImageToBoard(item.id),
    //     collect: (monitor) => ({
    //         isOver: !!monitor.isOver()
    //     })
    // }));

    const addImageToBoard = (id: any) => {
        const propList = Boardarr.filter((picture) => id === picture.id);
        Boardarr.push(propList[0]);
    };
    return <div>BoardProps</div>;
}

export default BoardProps;
