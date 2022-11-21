import React, { useState } from "react";
import { Button } from "react-bootstrap";

function PropList() {
    const [prop, setProp] = useState<string[]>([
        "BPlant1",
        "APlant2",
        "ZPlant3",
        "CPlant4",
        "TPlant5"
    ]);

    function generateList(prop: string[]) {
        return prop.map((prop) => <li key={prop}>{prop}</li>);
    }
    function alphabeticalOrder() {
        setProp(prop.sort((a: string, b: string) => (a < b ? -1 : 1)));
        console.log(prop, "Test Alpha");
        generateList(prop);
        return prop;
    }
    function ReversealphabeticalOrder() {
        setProp(prop.sort((a: string, b: string) => (a > b ? -1 : 1)));
        console.log(prop, "Test Rev Alpha");
        return prop;
    }

    return (
        <div>
            <strong>Prop List</strong>
            <ul>{generateList(prop)}</ul>
            <Button onClick={() => setProp(alphabeticalOrder())}>
                Alphabetical Order
            </Button>
            <Button onClick={() => setProp(ReversealphabeticalOrder())}>
                Reverse Alphabetical Order
            </Button>
        </div>
    );
}

export default PropList;
