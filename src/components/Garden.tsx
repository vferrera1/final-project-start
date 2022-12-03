/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-direct-mutation-state */
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Container, Form } from "react-bootstrap";
import Draggable from "react-draggable";
import { Plant } from "../interfaces/plant";
import { PropListArr } from "../interfaces/PropList";
import { Boardarr } from "./BoardProps";
import PropInGarden from "./PropInGarden";

class Garden extends React.Component {
    boardstate = { boardprops: PropListArr };

    state = {
        activeDrags: 0,
        deltaPosition: {
            x: 0,
            y: 0
        },
        controlledPosition: {
            x: -400,
            y: 200
        }
    };

    gardenSize = {
        size: "800"
    };

    handleDrag = (e: any, ui: any) => {
        const { x, y } = this.state.deltaPosition;
        this.setState({
            deltaPosition: {
                x: x + ui.deltaX,
                y: y + ui.deltaY
            }
        });
    };

    onStart = () => {
        this.setState({ activeDrags: ++this.state.activeDrags });
    };

    onStop = () => {
        this.setState({ activeDrags: --this.state.activeDrags });
    };

    // For controlled component
    adjustXPos = (e: {
        preventDefault: () => void;
        stopPropagation: () => void;
    }) => {
        e.preventDefault();
        e.stopPropagation();
        const { x, y } = this.state.controlledPosition;
        this.setState({ controlledPosition: { x: x - 10, y } });
    };

    adjustYPos = (e: {
        preventDefault: () => void;
        stopPropagation: () => void;
    }) => {
        e.preventDefault();
        e.stopPropagation();
        const { controlledPosition } = this.state;
        const { x, y } = controlledPosition;
        this.setState({ controlledPosition: { x, y: y - 10 } });
    };

    onControlledDrag = (e: any, position: { x: any; y: any }) => {
        const { x, y } = position;
        this.setState({ controlledPosition: { x, y } });
    };

    onControlledDragStop = (e: any, position: { x: any; y: any }) => {
        this.onControlledDrag(e, position);
        this.onStop();
    };

    render() {
        const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
        const { deltaPosition, controlledPosition } = this.state;
        //const [gardenSize, setGardenSize] = useState<string>("800");
        //const getProptoGardenPercentage = (prop: Plant): number => (prop.size / parseInt(gardenSize)) * 100;
        return (
            <div>
                <div className="container">
                    {this.boardstate.boardprops.map((prop) => {
                        return (
                            <Draggable bounds="parent" {...dragHandlers}>
                                <div className="box">
                                    <PropInGarden plant={prop} />
                                </div>
                            </Draggable>
                        );
                    })}
                </div>
                {/*
                <Form.Group controlId="formGardenSize">
                    <Form.Label>Size of Garden:</Form.Label>
                    <Form.Control
                        type="number"
                        value={this.gardenSize.size}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            this.setGardenSize(e.target.value)
                        }
                    />
                </Form.Group>
                    */}
            </div>
        );
    }
}

export default Garden;
