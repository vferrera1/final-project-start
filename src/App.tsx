// Importing React elements
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { DndProvider /*, DropTargetMonitor, useDrop */ } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
// Importing Styles
import "./styles/App.css";
import "./styles/globals.css";
// Importing Components
import Garden from "./components/Garden";
import PropList from "./components/PropList";
import { BorderBox } from "./components/BorderBox";
import { BorderBoxUp } from "./components/BorderBoxUp";
import { PlantDescriber } from "./components/PlantDescriber";
//import { PlantView } from "./components/PlantView";
// Importing interfaces and constants
import { Plant } from "./interfaces/plant";
import { PropListArr } from "./interfaces/PropList";
//import { Garden } from "./interfaces/garden";
// import { ItemTypes } from "./DnD-demo/constants";

function App(): JSX.Element {
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

    /* Storing the state of the list of garden elements up in App.
     * Used to update the rendered garden list in the selection area
     * and to update which element is being displayed in the description box.
     */
    /* const [boardprops, SetBoardProps] = useState<Plant[]>([]);
    // Garden will reference Drop
    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.PROP,
        drop: (item: { type: string; id: string; data: Plant; name: string }) =>
            SetBoardProps(addToBoardList(item.data)),
        collect: (monitor: DropTargetMonitor) => ({
            isOver: !!monitor.isOver()
        })
    });
    */

    /* Functions to support updating the description box and the universal list of garden elements,
     * whose information is passed down into the plant selection list.
     */
    // Goes through the list of garden elements to find the plant/object to be displayed in the description box
    function selectElement(id: string) {
        setSelectedElement(
            gardenElements.find((element: Plant): boolean => element.id === id)
        );
    }
    // Updates the garden element list to account for a change in a plant/object's attributes
    function editGardenElement(id: string, newElement: Plant) {
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
    function removeGardenElement(id: string) {
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
    // Functions to support updating the garden
    /*
    function deepCloneBoardProps(gardenProps: Plant[]): Plant[] {
        return gardenProps.map(
            (prop: Plant): Plant => ({
                ...prop,
                shadeConditions: [...prop.shadeConditions]
            })
        );
    }
    */

    /*
    function addToBoardList(plant: Plant) {
        const newPropList = deepCloneBoardProps(boardprops);
        newPropList.push(plant);
        return newPropList;
    }
    */

    const [gardenSize, setGardenSize] = useState<number>(800);
    function updateGardenSize(event: React.ChangeEvent<HTMLInputElement>) {
        setGardenSize(event.target.valueAsNumber);
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
                <BorderBoxUp></BorderBoxUp>
                <div /* ref={drop} */ className="boxcontainer">
                    <PropList
                        gardenElements={gardenElements}
                        propList={propList}
                        setPropList={setPropList}
                        selectElement={selectElement}
                    ></PropList>
                    <BorderBox></BorderBox>
                    <Garden
                        selectElement={selectElement}
                        boardprops={PropListArr}
                        drop={null /* drop */}
                        scaleValue={gardenSize}
                    />
                    <BorderBox></BorderBox>
                </div>
                <BorderBox></BorderBox>
            </div>
        </DndProvider>
    );
}

export default App;
