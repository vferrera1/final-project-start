import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { Plant } from "../interfaces/plant";
// If we add more interfaces inside plant, we might need to make extra components
import { shadeLevel } from "../interfaces/shadeLevel";

export function PlantEditor({
    plant,
    changeEditMode,
    editElement,
    removeElement
}: {
    plant: Plant;
    changeEditMode: () => void;
    editElement: (id: string, newElement: Plant) => void;
    removeElement: (id: string) => void;
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
    // Create local state variables that will update the plant if the editted info is saved:
    const [species, setSpecies] = useState<string>(plant.species);
    const [size, setSize] = useState<string>(plant.size.toString());
    const [shadeConditions, setShadeConditions] = useState<shadeLevel[]>(
        plant.shadeConditions
    );
    const [floweringPeriod, setFloweringPeriod] = useState<string>(
        plant.floweringPeriod
    );
    // --------------------------------------------------------------------------------------------
    function updateShadeRequirements(
        event: React.ChangeEvent<HTMLInputElement>
    ) {
        const shadeValue = event.target.value;
        const shadeValues = shadeConditions.map(
            (shadeCondition: shadeLevel): string => shadeCondition.toString()
        );
        // Check if the shade value is already checked
        if (shadeValues.includes(shadeValue)) {
            // Remove the given value
            setShadeConditions(
                shadeConditions.filter(
                    (shade: shadeLevel): boolean =>
                        shade.toString() !== shadeValue
                )
            );
        } else {
            const shadeLevels = [
                shadeLevel.None,
                shadeLevel.Light,
                shadeLevel.Partial,
                shadeLevel.Full,
                shadeLevel.Dense
            ];
            const newShadeLevel = shadeLevels.find(
                (shade: shadeLevel): boolean => shade.toString() === shadeValue
            );
            newShadeLevel === undefined
                ? setShadeConditions([...shadeConditions])
                : setShadeConditions([...shadeConditions, newShadeLevel]);
        }
    }
    function saveChanges() {
        editElement(plant.id, {
            ...plant,
            species: species,
            size: parseInt(size) || 0,
            shadeConditions: shadeConditions,
            floweringPeriod: floweringPeriod
        });
        changeEditMode();
    }
    /* Later, I want to add a function that prevents the user from accidentally deleting a plant,
     * but at the moment, I'm not sure how to implement it.
    function deletePlant(plantID: string): JSX.Element {
        return (
            <div>
                <span style={{ color: "red" }}>
                    Are you sure you want to delete {plant.id} from your garden?
                    This action cannot be undone!
                </span>
                <Button onClick={() => removeElement(plantID)} variant="danger">
                    DELETE
                </Button>
            </div>
        );
    }
    */
    return (
        <div>
            <h6>Plant Editor</h6>
            <p>Here, you will edit {plant.species}</p>
            <Container>
                <Row>
                    <Col>
                        {/* Species */}
                        <Form.Group controlId="formPlantSpecies" as={Row}>
                            <Form.Label>Species:</Form.Label>
                            <Col>
                                <Form.Control
                                    value={species}
                                    onChange={(
                                        event: React.ChangeEvent<HTMLInputElement>
                                    ) => setSpecies(event.target.value)}
                                />
                            </Col>
                        </Form.Group>
                        {/* Size */}
                        <Form.Group controlId="formPlantSize" as={Row}>
                            <Form.Label>Size:</Form.Label>
                            <Col>
                                <Form.Control
                                    type="number"
                                    value={size}
                                    onChange={(
                                        event: React.ChangeEvent<HTMLInputElement>
                                    ) => setSize(event.target.value)}
                                ></Form.Control>
                            </Col>
                        </Form.Group>
                        {/* shadeConditions */}
                        <Row id="acceptedShadeLevels">
                            <div>Shade Levels:</div>
                            <Col>
                                <Form.Check
                                    type="checkbox"
                                    id="shade-check-none"
                                    label="NONE"
                                    name="shadeConditions"
                                    value={shadeLevel.None}
                                    checked={shadeConditions.includes(
                                        shadeLevel.None
                                    )}
                                    onChange={updateShadeRequirements}
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="shade-check-light"
                                    label="LIGHT"
                                    name="shadeConditions"
                                    value={shadeLevel.Light}
                                    checked={shadeConditions.includes(
                                        shadeLevel.Light
                                    )}
                                    onChange={updateShadeRequirements}
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="shade-check-partial"
                                    label="PARTIAL"
                                    name="shadeConditions"
                                    value={shadeLevel.Partial}
                                    checked={shadeConditions.includes(
                                        shadeLevel.Partial
                                    )}
                                    onChange={updateShadeRequirements}
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="shade-check-full"
                                    label="FULL"
                                    name="shadeConditions"
                                    value={shadeLevel.Full}
                                    checked={shadeConditions.includes(
                                        shadeLevel.Full
                                    )}
                                    onChange={updateShadeRequirements}
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="shade-check-dense"
                                    label="DENSE"
                                    name="shadeConditions"
                                    value={shadeLevel.Dense}
                                    checked={shadeConditions.includes(
                                        shadeLevel.Dense
                                    )}
                                    onChange={updateShadeRequirements}
                                />
                            </Col>
                        </Row>
                        {/* Flowering Period */}
                        <Form.Group controlId="formFloweringPeriod" as={Row}>
                            <Form.Label>Flowering Period:</Form.Label>
                            <Col>
                                <Form.Control
                                    value={floweringPeriod}
                                    onChange={(
                                        event: React.ChangeEvent<HTMLInputElement>
                                    ) => setFloweringPeriod(event.target.value)}
                                ></Form.Control>
                            </Col>
                        </Form.Group>
                        {/* Buttons */}
                        <Button onClick={saveChanges}>Save</Button>
                        <Button
                            onClick={() => changeEditMode()}
                            variant="warning"
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={() => removeElement(plant.id)}
                            variant="danger"
                        >
                            Delete Plant
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
