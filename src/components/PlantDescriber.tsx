import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Plant } from "../interfaces/plant";
import { shadeLevel } from "../interfaces/shadeLevel";
import { PlantEditor } from "./PlantEditor";

export function PlantDescriber({
    gardenElements,
    selectedElement,
    editElement,
    removeElement
}: {
    gardenElements: Plant[];
    selectedElement: Plant | undefined;
    editElement: (id: number, newElement: Plant) => void;
    removeElement: (plant: Plant) => void;
}): JSX.Element {
    function changeEditMode() {
        setEditMode(!editMode);
    }
    // If a garden element (plant/object) is not selected for the description box,
    // Return a default message
    if (selectedElement === undefined) {
        return (
            <div className="Plant-describer">
                <h6>Please select a garden element.</h6>
            </div>
        );
    }
    const plant = gardenElements.find(
        (gardenElement: Plant): boolean =>
            gardenElement.id === selectedElement.id
    );
    if (plant === undefined) {
        return (
            <div className="Plant-describer">
                <h6>Please select a garden element.</h6>
            </div>
        );
    }
    // If a garden element is selected, the application can be in two states:

    const [editMode, setEditMode] = useState<boolean>(false);

    // Either we are in edit mode, where a modal is brought up for plant editing
    // Or we are not in edit mode, where the description box will display the plant's attributes
    if (editMode) {
        return (
            <PlantEditor
                plant={plant}
                changeEditMode={changeEditMode}
                editElement={editElement}
                removeElement={removeElement}
            ></PlantEditor>
        );
    } else {
        return (
            <div className="Plant-describer">
                <h6>
                    {plant.nickname} ({plant.species})
                </h6>
                <img
                    id={plant.id.toString()}
                    src={plant.sideImage}
                    alt={plant.species}
                ></img>
                <p className="Plant-attribute">
                    <b>Size</b>: {plant.size} ft
                </p>
                <p className="Plant-attribute">
                    <b>Water Required</b>: {plant.waterReq}
                </p>
                <p className="Plant-attribute">
                    <b>Shade Conditions</b>:{" "}
                    {plant.shadeConditions.map(
                        (shade: shadeLevel): string => `${shade.toString()},`
                    )}
                </p>
                <p className="Plant-attribute">
                    <b>Flowering Period</b>: {plant.floweringPeriod}
                </p>
                <p className="Plant-attribute">
                    <b>Region</b>: {plant.region}
                </p>
                <p className="Plant-attribute">
                    <b>Price</b>: {plant.price}
                </p>
                <p className="Plant-attribute">
                    <b>Category</b>: {plant.category}
                </p>
                <Button onClick={() => setEditMode(!editMode)}>
                    Edit Plant
                </Button>
            </div>
        );
    }
}
