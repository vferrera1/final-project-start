/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import "./styles/globals.css";
import Garden from "./components/Garden";
import PropList from "./components/PropList";
import { BorderBox } from "./components/BorderBox";
import { BorderBoxUp } from "./components/BorderBoxUp";
import { DndProvider, DropTargetMonitor, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Plant } from "./interfaces/plant";
import { ItemTypes } from "./DnD-demo/constants";
import Trashcan from "./images/TrashCan.png";
function App(): JSX.Element {
    const [boardprops, SetBoardProps] = useState<Plant[]>([]);

    interface ITEM {
        type: string;
        id: string;
        data: Plant;
        name: string;
    }
    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.PROP,
        drop: (item: ITEM) => SetBoardProps(addToBoardList(item.data)),
        collect: (monitor: DropTargetMonitor) => ({
            isOver: !!monitor.isOver()
        })
    });

    function deepCloneBoardProps(gardenProps: Plant[]): Plant[] {
        return gardenProps.map(
            (prop: Plant): Plant => ({
                ...prop
            })
        );
    }

    function addToBoardList(plant: Plant) {
        const newPropList = deepCloneBoardProps(boardprops);
        plant.id = Math.floor(Math.random() * 1000);
        newPropList.push(plant);
        return newPropList;
    }

    const [{ isOver2 }, drop2] = useDrop({
        accept: ItemTypes.PROP,
        drop: (item: ITEM) => SetBoardProps(removeFromBoardList(item.data)),
        collect: (monitor: DropTargetMonitor) => ({
            isOver2: !!monitor.isOver()
        })
    });

    function removeFromBoardList(plant: Plant): Plant[] {
        const newPropList = deepCloneBoardProps(boardprops);
        let i = 0;
        newPropList.map((q: Plant) => {
            if (q.id == plant.id) {
                newPropList.splice(i, 1);
                return newPropList;
            } else {
                i++;
            }
        });
        return newPropList;
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="App">
                <header className="App-header">Garden on the Go!</header>
                <BorderBoxUp></BorderBoxUp>
                <div className="boxcontainer">
                    <PropList boardprops={boardprops}></PropList>
                    <BorderBox></BorderBox>
                    <Garden boardprops={boardprops} drop={drop}></Garden>
                    <BorderBox></BorderBox>
                </div>
                <BorderBox></BorderBox>
                <div ref={drop2}>
                    <img src={Trashcan} />
                </div>
            </div>
        </DndProvider>
    );
}

export default App;
