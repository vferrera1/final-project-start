import React from "react";

function PropList() {
    const myArray = [
        "Plant1",
        "Orange Tree",
        "Plant2",
        "Orange Tree2",
        "Orange Tree3"
    ];

    return (
        <ul>
            {myArray.map((o) => (
                <li key={o}>{o}</li>
            ))}
        </ul>
    );
}

export default PropList;
