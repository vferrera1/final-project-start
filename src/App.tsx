// Importing React elements
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { DndProvider, DropTargetMonitor, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
// Importing Styles
import "./styles/App.css";
import "./styles/globals.css";
// Importing Components
import Garden from "./components/Garden";
import PropList from "./components/PropList";
import { BorderBoxUp } from "./components/BorderBoxUp";
import { PlantDescriber } from "./components/PlantDescriber";
// Importing interfaces and constants
import { Plant } from "./interfaces/plant";
import { PropListArr } from "./interfaces/PropList";
import { ItemTypes } from "./interfaces/constants";
import Trashcan from "./images/TrashCan.png";
import { BorderBoxDown } from "./components/BorderBoxDown";
import { BorderBoxLeft } from "./components/BorderBoxLeft";
import { BorderBoxRight } from "./components/BorderBoxRight";

function App(): JSX.Element {
    function deepCloneBoardProps(gardenProps: Plant[]): Plant[] {
        return gardenProps.map(
            (prop: Plant): Plant => ({
                ...prop,
                shadeConditions: [...prop.shadeConditions]
            })
        );
    }

    // Stores the universal state of the list of garden elements (plants, objects)
    // that is shared with the selection list (upon updating) and is referenced in the description box & plant editor.
    // DOES NOT LISTEN TO CHANGES MADE IN "propList"
    const [gardenElements, setGardenElements] = useState<Plant[]>(
        deepCloneBoardProps(PropListArr)
    );

    // Stores the list of garden elements (plants, objects) that will be displayed in the selection area.
    // WILL LISTEN TO CHANGES MADE IN "gardenElements" (SEE "editGardenElements")
    const [propList, setPropList] = useState<Plant[]>(
        deepCloneBoardProps(PropListArr)
    );

    // Stores the state of the garden element selected to be displayed in the description box
    const [selectedElement, setSelectedElement] = useState<Plant | undefined>(
        undefined
    );

    const [gardenSize, setGardenSize] = useState<number>(70);
    function updateGardenSize(event: React.ChangeEvent<HTMLInputElement>) {
        setGardenSize(event.target.valueAsNumber);
    }
    const [boardprops, SetBoardProps] = useState<Plant[]>([]);

    function selectElement(id: number) {
        setSelectedElement(
            gardenElements.find((element: Plant): boolean => element.id === id)
        );
    }
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
        SetBoardProps(
            boardprops.map(
                (boardProp: Plant): Plant =>
                    boardProp.species === newElement.species
                        ? newElement
                        : boardProp
            )
        );
    }
    function removeGardenElement(removedElement: Plant) {
        setGardenElements(
            gardenElements.filter(
                (element: Plant): boolean => element.id !== removedElement.id
            )
        );
        setPropList(
            propList.filter(
                (element: Plant): boolean => element.id !== removedElement.id
            )
        );
        SetBoardProps(
            boardprops.filter(
                (boardProp: Plant): boolean =>
                    boardProp.species !== removedElement.species
            )
        );
        setSelectedElement(undefined);
    }

    interface ITEM {
        type: string;
        id: string;
        data: Plant;
        name: string;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.PROP,
        drop: (item: ITEM) => SetBoardProps(addToBoardList(item.data)),
        collect: (monitor: DropTargetMonitor) => ({
            isOver: !!monitor.isOver()
        })
    });

    function addToBoardList(newPlant: Plant) {
        const oldPropList = deepCloneBoardProps(boardprops);
        const newPropList = [
            ...oldPropList,
            {
                ...newPlant,
                id: Math.floor(Math.random() * 100),
                shadeCondtions: newPlant.shadeConditions
            }
        ];
        return newPropList;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [{ isOver2 }, drop2] = useDrop({
        accept: ItemTypes.Board,

        drop: (item: ITEM) => SetBoardProps(removeFromBoardList(item.data)),
        collect: (monitor: DropTargetMonitor) => ({
            isOver2: !!monitor.isOver()
        })
    });

    function removeFromBoardList(plant: Plant): Plant[] {
        const newPropList = deepCloneBoardProps(boardprops);
        let i = 0;
        newPropList.map((q: Plant) => {
            if (q.id === plant.id) {
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
                            value={gardenSize}
                            onChange={updateGardenSize}
                        />
                    </Form.Group>
                </div>
                <div ref={drop2}>
                    <img src={Trashcan} />
                </div>
                <BorderBoxUp></BorderBoxUp>
                <div /* ref={drop} */ className="boxcontainer">
                    <div className="proplistcontainer">
                        <PropList
                            gardenElements={gardenElements}
                            propList={propList}
                            setPropList={setPropList}
                            selectElement={selectElement}
                            boardprops={boardprops}
                        ></PropList>
                    </div>
                    <BorderBoxLeft></BorderBoxLeft>
                    <Garden
                        boardprops={boardprops}
                        drop={drop}
                        scaleValue={gardenSize}
                        selectElement={selectElement}
                    ></Garden>
                    <BorderBoxRight></BorderBoxRight>
                </div>
                <BorderBoxDown></BorderBoxDown>
            </div>
        </DndProvider>
    );
}

export default App;
