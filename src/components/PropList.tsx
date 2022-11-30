/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Plant } from "../interfaces/plant";
import { PropListArr } from "../interfaces/PropList";
import Prop from "./Prop";

function PropList() {
    const [proplist, setProplist] = useState<Plant[]>(PropListArr);

    function generateList(prop: Plant[]) {
        console.log(prop, "Generated");
        return prop.map((prop) => (
            <div key={prop.species} className="propcontainer">
                <li>{prop.species}</li>
                <Prop plant={prop} />
            </div>
        ));
    }
    function alphabeticalOrder() {
        setProplist(
            proplist.sort((a: Plant, b: Plant) =>
                a.species < b.species ? -1 : 1
            )
        );
        console.log(proplist, "Test Alpha");
        generateList(proplist);
        return proplist;
    }
    function ReversealphabeticalOrder() {
        setProplist(
            proplist.sort((a: Plant, b: Plant) =>
                a.species > b.species ? -1 : 1
            )
        );
        console.log(proplist, "Test Alpha");
        generateList(proplist);
        return proplist;
    }

    return (
        <div>
            <strong>Prop List</strong>
            <ul className="scroll-bar">{generateList(proplist)}</ul>
            <Button onClick={() => setProplist(alphabeticalOrder())}>
                Alphabetical Order
            </Button>
            <Button onClick={() => setProplist(ReversealphabeticalOrder())}>
                Reverse Alphabetical Order
            </Button>
        </div>
    );
}

export default PropList;
