import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["green", "blue", "gray"];
const DEFAULT_COLOR_INDEX = 0;

interface ChangeBorderBox {
    setBorderIndex: (newBorderIndex: number) => void;
    borderIndex: number;
}

function ChangeBorder({
    setBorderIndex,
    borderIndex
}: ChangeBorderBox): JSX.Element {
    return (
        <Button
            onClick={() => setBorderIndex((1 + borderIndex) % COLORS.length)}
        >
            Next Color
        </Button>
    );
}

function BorderPreview({
    setBorderIndex,
    borderIndex
}: ChangeBorderBox): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[borderIndex],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function BorderBox(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <div>
            <h3>Border Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeBorder
                    setBorderIndex={setColorIndex}
                    borderIndex={colorIndex}
                ></ChangeBorder>
                <BorderPreview
                    setBorderIndex={setColorIndex}
                    borderIndex={colorIndex}
                ></BorderPreview>
            </div>
        </div>
    );
}
