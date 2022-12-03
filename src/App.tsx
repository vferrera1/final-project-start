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
    const [gardenElements, setGardenElements] = useState<Plant[]>(PropListArr);
    // Stores the state of the garden element selected to be displayed in the description box
    const [selectedElement, setSelectedElement] = useState<Plant | undefined>(
        undefined
    );
    // I DON'T THINK I NEED THESE FUNCTIONS BELOW
    // Functions to handle the conditional rendering of the descripiton box
    //const handleShowPlantDescription = () => setShowPlantDescription(true);
    //const handleClosePlantDescription = () => setShowPlantDescription(false);
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
    }
    // Updates the garden element list to account for a removal of a plant/object.
    function removeGardenElement(id: string) {
        setGardenElements(
            gardenElements.filter(
                (element: Plant): boolean => element.id !== id
            )
        );
    }
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="App">
                <header className="App-header">Garden on the Go!</header>
                <PlantDescriber
                    selectedElement={selectedElement}
                ></PlantDescriber>
                <BorderBoxUp></BorderBoxUp>
                <div className="boxcontainer">
                    <PropList
                        gardenElements={gardenElements}
                        selectElement={selectElement}
                    ></PropList>
                    <BorderBox></BorderBox>
                    <Garden></Garden>
                    <BorderBox></BorderBox>
                </div>
                <BorderBox></BorderBox>
            </div>
        </DndProvider>
    );
}

export default App;
