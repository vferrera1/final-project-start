import React, { useState } from "react";

export const COLORS = ["green", "blue", "brown"];
export const BORDERS = ["Lawn", "Water", "Wood"];
const DEFAULT_COLOR_INDEX = 0;

interface ChangeBorderBox {
    setBorderIndex: (newBorderIndex: number) => void;
    borderIndex: number;
}

function BorderPreview({ borderIndex }: ChangeBorderBox): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "750px",
                height: "50px",
                backgroundColor: COLORS[borderIndex],
                display: "inline-block",
                verticalAlign: "bottom"
            }}
        ></div>
    );
}

export function BorderBoxDown(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <div className="borderboxdown">
            <div
                onClick={() => setColorIndex((1 + colorIndex) % COLORS.length)}
            >
                <BorderPreview
                    setBorderIndex={setColorIndex}
                    borderIndex={colorIndex}
                ></BorderPreview>
            </div>
            <span>The current border is: {BORDERS[colorIndex]}</span>
            <h3>Border Box</h3>
        </div>
    );
}
