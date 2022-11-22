import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Plant } from "../interfaces/plant";
import { PropListArr } from "../interfaces/PropList";

function PropList() {
    const [proplist, setProplist] = useState<Plant[]>(PropListArr);

    function generateList(prop: Plant[]) {
        console.log(prop, "Generated");
        return prop.map((prop) => (
            <li key={prop.species}>
                {prop.species}
                <img src={prop.species} />
            </li>
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
        <div className="scroll-bar">
            <strong>Prop List</strong>
            <ul>{generateList(proplist)}</ul>
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
