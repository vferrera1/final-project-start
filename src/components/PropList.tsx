import React, { useState } from "react";
import { Button } from "react-bootstrap";

function PropList() {
    const [prop, setProp] = useState<string[]>([
        "Catus",
        "Tomato Plant",
        "Rose Bush",
        "Sunflower",
        "Path Corner"
    ]);

    function generateList(prop: string[]) {
        console.log(prop, "Generated");
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
        <div className="scroll-bar">
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
