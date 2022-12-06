/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import "./styles/globals.css";
//import { Garden } from "./interfaces/garden";
//import { PlantView } from "./components/PlantView";
import Garden from "./components/Garden";
import PropList from "./components/PropList";
import { BorderBox } from "./components/BorderBox";
import { BorderBoxUp } from "./components/BorderBoxUp";
//import { PropListArr } from "./interfaces/PropList";
import {
    DndProvider /* , DropTargetMonitor, useDrop */,
    DropTargetMonitor,
    useDrop
} from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
/* import { Plant } from "./interfaces/plant"; */
import { PropListArr } from "./interfaces/PropList";
import { Plant } from "./interfaces/plant";
import { ItemTypes } from "./DnD-demo/constants";
/* import { ItemTypes } from "./DnD-demo/constants"; */
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
        newPropList.push(plant);
        return newPropList;
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="App">
                <header className="App-header">Garden on the Go!</header>
                <BorderBoxUp></BorderBoxUp>
                <div className="boxcontainer">
                    <PropList></PropList>
                    <BorderBox></BorderBox>
                    <Garden boardprops={boardprops} drop={drop}></Garden>
                    <BorderBox></BorderBox>
                </div>
                <BorderBox></BorderBox>
            </div>
        </DndProvider>
    );
}

export default App;
