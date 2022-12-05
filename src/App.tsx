import React, { useState } from "react";
import "./styles/App.css";
import "./styles/globals.css";
//import { Garden } from "./interfaces/garden";
//import { PlantView } from "./components/PlantView";
import Garden from "./components/Garden";
import PropList from "./components/PropList";
import { BorderBox } from "./components/BorderBox";
import { BorderBoxUp } from "./components/BorderBoxUp";
import { PlantDescriber } from "./components/PlantDescriber";
import { PropListArr } from "./interfaces/PropList";
import { Plant } from "./interfaces/plant";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App(): JSX.Element {
    /* Storing the state of the list of garden elements up in App.
     * Used to update the rendered garden list in the selection area
     * and to update which element is being displayed in the description box.
     */
    // Stores the state of the list of garden elements (plants, objects)
    // that is passed down into the selection list (and the garden?)
    const GARDENELEMENTS = PropListArr.map(
        (element: Plant): Plant => ({
            ...element,
            shadeConditions: [...element.shadeConditions]
        })
    );
    const [gardenElements, setGardenElements] =
        useState<Plant[]>(GARDENELEMENTS);
    // Stores the state of the garden element selected to be displayed in the description box
    const [selectedElement, setSelectedElement] = useState<Plant | undefined>(
        undefined
    );

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
        setSelectedElement(undefined);
    }
    function rearrangeGardenElements(sortedGardenElements: Plant[]) {
        setGardenElements(sortedGardenElements);
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
                <BorderBoxUp></BorderBoxUp>
                <div className="boxcontainer">
                    <PropList
                        gardenElements={gardenElements}
                        selectElement={selectElement}
                        rearrangeGardenElements={rearrangeGardenElements}
                    ></PropList>
                    <BorderBox></BorderBox>
                    <Garden selectElement={selectElement}></Garden>
                    <BorderBox></BorderBox>
                </div>
                <BorderBox></BorderBox>
            </div>
        </DndProvider>
    );
}

export default App;
