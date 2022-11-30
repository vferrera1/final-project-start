/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Plant } from "../interfaces/plant";
import { defaultProps, PropListArr } from "../interfaces/PropList";
import Prop from "./Prop";

import "../styles/PropList.css";

function PropList() {
    const [proplist, setProplist] = useState<Plant[]>(PropListArr);

    function generateList(prop: Plant[]) {
        console.log(prop, "Generated");
        // eslint-disable-next-line no-extra-parens
        return prop.map((prop) => (
            <div key={prop.species} className="propcontainer">
                <li>{prop.species}</li>
                <Prop plant={prop} />
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
    function resetlist() {
        let newPropList = deepCloneProps(proplist);
        newPropList = defaultProps;
        setProplist(newPropList);
    }
    function alphabeticalOrder() {
        //Might need to do a deep copy of the propList
        const newPropList = deepCloneProps(proplist);
        setProplist(
            newPropList.sort((a: Plant, b: Plant) =>
                a.species < b.species ? -1 : 1
            )
        );
    }
    function ReversealphabeticalOrder() {
        const newPropList = deepCloneProps(proplist);
        setProplist(
            newPropList.sort((a: Plant, b: Plant) =>
                a.species > b.species ? -1 : 1
            )
        );
    }
    function SortbySizeSmall() {
        const newPropList = deepCloneProps(proplist);
        setProplist(newPropList.sort((a: Plant, b: Plant) => a.size - b.size));
    }
    function SortbySizeBig() {
        const newPropList = deepCloneProps(proplist);
        setProplist(newPropList.sort((a: Plant, b: Plant) => b.size - a.size));
    }
    function SortbyWaterReqSmall() {
        const newPropList = deepCloneProps(proplist);
        setProplist(
            newPropList.sort((a: Plant, b: Plant) => a.waterReq - b.waterReq)
        );
    }
    function SortbyWaterReqBig() {
        const newPropList = deepCloneProps(proplist);
        setProplist(
            newPropList.sort((a: Plant, b: Plant) => b.waterReq - a.waterReq)
        );
    }

    return (
        <div>
            <Button onClick={() => resetlist()}>Reset List</Button>
            <strong>Prop List</strong>
            <ul className="scroll-bar">{generateList(proplist)}</ul>
            <div>
                <Button onClick={() => alphabeticalOrder()}>Alpha</Button>
                <Button onClick={() => ReversealphabeticalOrder()}>
                    Reverse Alpha
                </Button>
            </div>
            <div>
                <Button onClick={() => SortbyWaterReqBig()}>Most Water</Button>
                <Button onClick={() => SortbyWaterReqSmall()}>
                    Least Water
                </Button>
            </div>
            <div>
                <Button onClick={() => SortbySizeBig()}>Biggest Size</Button>
                <Button onClick={() => SortbySizeSmall()}>Smallest Size</Button>
            </div>
        </div>
    );
}

export default PropList;
