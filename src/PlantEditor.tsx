import React from "react";
import { Button } from "react-bootstrap";
import { Plant } from "./interfaces/plant";

export function PlantEditor({
    plant,
    setEditMode
}: {
    plant: Plant;
    setEditMode: (newEditMode: boolean) => void;
}): JSX.Element {
    return (
        <div>
            <h6>Plant Editor</h6>
            <Button onClick={() => setEditMode(false)}>Exit</Button>
        </div>
    );
}
