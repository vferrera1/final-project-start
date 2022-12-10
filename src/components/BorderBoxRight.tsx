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
                width: "50px",
                height: "750px",
                backgroundColor: COLORS[borderIndex],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function BorderBoxRight(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <div className="borderboxleft">
            <div
                onClick={() => setColorIndex((1 + colorIndex) % COLORS.length)}
            >
                <BorderPreview
                    setBorderIndex={setColorIndex}
                    borderIndex={colorIndex}
                ></BorderPreview>
            </div>
            <div className="orienttextverticalright">
                <div>
                    <h3>Border Box</h3>
                    <span>The current border is: {BORDERS[colorIndex]}</span>
                </div>
            </div>
        </div>
    );
}
