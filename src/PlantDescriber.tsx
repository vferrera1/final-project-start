import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Plant } from "./interfaces/plant";
import { shadeLevel } from "./interfaces/shadeLevel";
import { PlantEditor } from "./PlantEditor";

export function PlantDescriber({ plant }: { plant: Plant }): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    return (
        <div>
            {/* eslint-disable-next-line no-extra-parens */}
            {!editMode && (
                <div className="Plant-describer">
                    <h6>{plant.species}</h6>
                    <p className="Plant-attribute">
                        <b>Size</b>: {plant.size} ft
                    </p>
                    <p className="Plant-attribute">
                        <b>Shade Conditions</b>:{" "}
                        {plant.shadeConditions.map(
                            (shade: shadeLevel): string =>
                                `${shade.toString()},`
                        )}
                    </p>
                    <p className="Plant-attribute">
                        <b>Flowering Period</b>: {plant.floweringPeriod}
                    </p>
                    <Button onClick={() => setEditMode(!editMode)}>
                        Edit Plant
                    </Button>
                </div>
            )}
            {/* eslint-disable-next-line no-extra-parens */}
            {editMode && (
                <PlantEditor
                    plant={plant}
                    setEditMode={setEditMode}
                ></PlantEditor>
            )}
        </div>
    );
}
