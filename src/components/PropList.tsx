/* eslint-disable no-extra-parens */
import React from "react";
import { Button } from "react-bootstrap";
import { Plant } from "../interfaces/plant";
import Prop from "./Prop";

import "../styles/PropList.css";

function PropList({
    gardenElements,
    selectElement,
    rearrangeGardenElements
}: {
    gardenElements: Plant[];
    selectElement: (id: string) => void;
    rearrangeGardenElements: (sortedGardenElements: Plant[]) => void;
}) {
    function generateList(selectionList: Plant[]) {
        console.log(selectionList, "Generated");
        // eslint-disable-next-line no-extra-parens
        return selectionList.map((prop) => (
            <div key={prop.species} className="propcontainer">
                <li>{prop.species}</li>
                <Prop plant={prop} selectElement={selectElement} />
            </div>
        ));
    }
    function deepCloneProps(gardenProps: Plant[]): Plant[] {
        return gardenProps.map(
            (prop: Plant): Plant => ({
                ...prop,
                shadeConditions: [...prop.shadeConditions]
            })
        );
    }
    function alphabeticalOrder() {
        //Might need to do a deep copy of the propList
        const newPropList = deepCloneProps(gardenElements);
        rearrangeGardenElements(
            newPropList.sort((a: Plant, b: Plant) =>
                a.species < b.species ? -1 : 1
            )
        );
        console.log(newPropList, "Test Alpha");
    }
    function ReversealphabeticalOrder() {
        const newPropList = deepCloneProps(gardenElements);
        rearrangeGardenElements(
            newPropList.sort((a: Plant, b: Plant) =>
                a.species > b.species ? -1 : 1
            )
        );
        console.log(newPropList, "Test Alpha");
    }

    return (
        <div>
            <strong>Prop List</strong>
            <ul className="scroll-bar">{generateList(gardenElements)}</ul>
            <Button onClick={() => alphabeticalOrder()}>
                Alphabetical Order
            </Button>
            <Button onClick={() => ReversealphabeticalOrder()}>
                Reverse Alphabetical Order
            </Button>
        </div>
    );
}

export default PropList;
