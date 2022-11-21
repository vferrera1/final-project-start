import React from "react";

function PropList() {
    const myArray = ["Plant1", "Plant2", "Plant3", "Plant4", "Plant5"];

    return (
        <ul>
            {myArray.map((o) => (
                <li key={o}>{o}</li>
            ))}
        </ul>
    );
}

export default PropList;
