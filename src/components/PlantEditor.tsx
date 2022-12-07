import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { Plant, Region, Price } from "../interfaces/plant";
// If we add more interfaces inside plant, we might need to make extra components
import { shadeLevel } from "../interfaces/shadeLevel";

const REGIONS: Region[] = [
    "North America",
    "South America",
    "Europe",
    "Asia",
    "Africa",
    "Oceania",
    "Global"
];
const PRICES: Price[] = ["$", "$$", "$$$"];

export function PlantEditor({
    plant,
    changeEditMode,
    editElement,
    removeElement
}: {
    plant: Plant;
    changeEditMode: () => void;
    editElement: (id: number, newElement: Plant) => void;
    removeElement: (id: number) => void;
}): JSX.Element {
    // Create local state variables that will update the plant if the editted info is saved:
    const [species, setSpecies] = useState<string>(plant.species);
    const [size, setSize] = useState<string>(plant.size.toString());
    const [shadeConditions, setShadeConditions] = useState<shadeLevel[]>(
        plant.shadeConditions
    );
    const [floweringPeriod, setFloweringPeriod] = useState<string>(
        plant.floweringPeriod
    );
    const [waterReq, setWaterReq] = useState<string>(plant.waterReq.toString());
    const [region, setRegion] = useState<Region>(plant.region);
    const [price, setPrice] = useState<Price>(plant.price);
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
    function createRegionOption(location: Region): JSX.Element {
        return (
            <option key={location} value={location}>
                {location}
            </option>
        );
    }
    function createPriceOption(cost: Price): JSX.Element {
        return (
            <option key={cost} value={cost}>
                {cost}
            </option>
        );
    }
    function changeRegion(event: React.ChangeEvent<HTMLSelectElement>) {
        const newRegion = REGIONS.find(
            (region: Region): boolean =>
                region.toString() === event.target.value
        );
        newRegion === undefined ? setRegion(region) : setRegion(newRegion);
    }
    function changePrice(event: React.ChangeEvent<HTMLSelectElement>) {
        const newPrice = PRICES.find(
            (price: Price): boolean => price.toString() === event.target.value
        );
        newPrice === undefined ? setPrice(price) : setPrice(newPrice);
    }
    function saveChanges() {
        editElement(plant.id, {
            ...plant,
            species: species,
            size: parseInt(size) || 0,
            shadeConditions: shadeConditions,
            floweringPeriod: floweringPeriod,
            waterReq: parseInt(waterReq) || 0,
            region: region,
            price: price
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
                        {/* Water Requirement */}
                        <Form.Group controlId="formPlantSize" as={Row}>
                            <Form.Label>Water Requirement (unit?):</Form.Label>
                            <Col>
                                <Form.Control
                                    type="number"
                                    value={waterReq}
                                    onChange={(
                                        event: React.ChangeEvent<HTMLInputElement>
                                    ) => setWaterReq(event.target.value)}
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
                        {/* Region */}
                        {/* Make a dropdown/select menu to have the user choose a region */}
                        <Form.Group controlId="formRegion" as={Row}>
                            <Form.Label>Region:</Form.Label>
                            <Col>
                                <Form.Select
                                    value={region}
                                    onChange={changeRegion}
                                >
                                    {REGIONS.map((region: Region) =>
                                        createRegionOption(region)
                                    )}
                                </Form.Select>
                            </Col>
                        </Form.Group>
                        {/* Price */}
                        <Form.Group controlId="formPrice" as={Row}>
                            <Form.Label>Price:</Form.Label>
                            <Col>
                                <Form.Select
                                    value={price}
                                    onChange={changePrice}
                                >
                                    {PRICES.map((price: Price) =>
                                        createPriceOption(price)
                                    )}
                                </Form.Select>
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
