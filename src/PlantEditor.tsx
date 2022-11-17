import React from "react";
import { Button } from "react-bootstrap";
import { Plant } from "./interfaces/plant";
//import { shadeLevel } from "./interfaces/shadeLevel";

export function PlantEditor({
    plant,
    setEditMode
}: {
    plant: Plant;
    setEditMode: (newEditMode: boolean) => void;
}): JSX.Element {
    /* What do you have to update, and how do you plan on doing so?
     *     Species: Create a textbox where user can edit plant name
     *     Images?: CREATE LATER
     *     Size:
     *         Create a numerical textbox where user can edit plant size.
     *         Specify the units to properly convert plant size
     *     shadeConditions:
     *         Create a multi-checkbox list to specify which shade environments the plant can live in
     *     floweringPeriod: Create a textbox where user can edit floweringPeriod.
     */
    /* Create local state variables that will update the plant if the editted info is saved:
    const [species, setSpecies] = useState<string>(plant.species);
    const [size, setSize] = useState<number>(plant.size);
    const [shadeConditions, setShadeConditions] = useState<shadeLevel[]>(plant.shadeConditions);
    const [floweringPeriod, setFloweringPeriod] = useState<string>(plant.floweringPeriod);
    */
    return (
        <div>
            <h6>Plant Editor</h6>
            <Button onClick={() => setEditMode(false)}>Exit</Button>
            <p>Here, you will edit {plant.species}</p>
        </div>
    );
}
