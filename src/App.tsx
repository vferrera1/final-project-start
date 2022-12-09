/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { DndProvider, DropTargetMonitor, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
// Importing Styles
import "./styles/App.css";
import "./styles/globals.css";
//import { Garden } from "./interfaces/garden";
//import { PlantView } from "./components/PlantView";
// Importing Components
import Garden from "./components/Garden";
import PropList from "./components/PropList";
import { BorderBox } from "./components/BorderBox";
import { BorderBoxUp } from "./components/BorderBoxUp";
import { PlantDescriber } from "./components/PlantDescriber";
// Importing interfaces and constants
import { Plant } from "./interfaces/plant";
import { PropListArr } from "./interfaces/PropList";
import { ItemTypes } from "./DnD-demo/constants";
// import { ItemTypes } from "./DnD-demo/constants";
import Trashcan from "./images/TrashCan.png";
import { Form } from "react-bootstrap";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function App(): JSX.Element {
    const [size, setSize] = useState<number>(800);
    function updateSize(event: React.ChangeEvent<HTMLInputElement>) {
        setSize(event.target.valueAsNumber);
    }
    const GARDENELEMENTS = PropListArr.map(
        (element: Plant): Plant => ({
            ...element,
            shadeConditions: [...element.shadeConditions]
        })
    );

    // Stores the universal state of the list of garden elements (plants, objects)
    // that is shared with the selection list (upon updating) and is referenced in the description box & plant editor.
    // DOES NOT LISTEN TO CHANGES MADE IN "propList"
    const [gardenElements, setGardenElements] =
        useState<Plant[]>(GARDENELEMENTS);

    // Stores the list of garden elements (plants, objects) that will be displayed in the selection area.
    // WILL LISTEN TO CHANGES MADE IN "gardenElements" (SEE "editGardenElements")
    const [propList, setPropList] = useState<Plant[]>(PropListArr);

    // Stores the state of the garden element selected to be displayed in the description box
    const [selectedElement, setSelectedElement] = useState<Plant | undefined>(
        undefined
    );

    function selectElement(id: number) {
        setSelectedElement(
            gardenElements.find((element: Plant): boolean => element.id === id)
        );
    }
    // Updates the garden element list to account for a change in a plant/object's attributes
    function editGardenElement(id: number, newElement: Plant) {
        setGardenElements(
            gardenElements.map(
                (element: Plant): Plant =>
                    element.id === id ? newElement : element
            )
        );
        setPropList(
            propList.map(
                (element: Plant): Plant =>
                    element.id === id ? newElement : element
            )
        );
        // I don't know how to get the description box to directly update after an edit.
        // This is to get the description box to close so that upon reopening, it's updated.
        setSelectedElement(
            gardenElements.find((element: Plant): boolean => element.id === id)
        );
    }
    // Updates the garden element list to account for a removal of a plant/object.
    function removeGardenElement(id: number) {
        setGardenElements(
            gardenElements.filter(
                (element: Plant): boolean => element.id !== id
            )
        );
        setPropList(
            propList.filter((element: Plant): boolean => element.id !== id)
        );
        setSelectedElement(undefined);
    }
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
                <PlantDescriber
                    gardenElements={gardenElements}
                    selectedElement={selectedElement}
                    editElement={editGardenElement}
                    removeElement={removeGardenElement}
                ></PlantDescriber>
                <div>
                    <Form.Group controlId="formGardenSize">
                        <Form.Label>Size of Garden:</Form.Label>
                        <Form.Control
                            type="number"
                            value={size}
                            onChange={updateSize}
                        />
                    </Form.Group>
                </div>
                <BorderBoxUp></BorderBoxUp>
                <div /* ref={drop} */ className="boxcontainer">
                    <PropList
                        gardenElements={gardenElements}
                        propList={propList}
                        setPropList={setPropList}
                        selectElement={selectElement}
                        boardprops={boardprops}
                    ></PropList>
                    <BorderBox></BorderBox>
                    <TransformWrapper
                        initialScale={1}
                        initialPositionX={100}
                        initialPositionY={200}
                        wheel={{ touchPadDisabled: true }}
                        panning={{ activationKeys: ["Shift"] }}
                    >
                        <TransformComponent>
                            <Garden
                                selectElement={selectElement}
                                boardprops={boardprops}
                                drop={drop}
                                scaleValue={size}
                            ></Garden>
                        </TransformComponent>
                    </TransformWrapper>
                    <BorderBox></BorderBox>
                </div>
                <BorderBox></BorderBox>
            </div>
            <div ref={drop2}>
                <img src={Trashcan} />
            </div>
        </DndProvider>
    );
}

export default App;
