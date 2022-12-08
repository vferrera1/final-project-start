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
import Prop from "./Prop";

class Garden extends React.Component<{
    selectElement: (id: string) => void;
    boardprops: Plant[];
    scaleValue: number;
    drop: any;
}> {
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
        const { scaleValue } = this.props;
        const { selectElement } = this.props;

        return (
            <div>
                <div ref={this.props.drop} className="container">
                    {this.props.boardprops.map((prop) => {
                        return (
                            <Draggable bounds="parent" {...dragHandlers}>
                                <div className="box">
                                    <Prop
                                        plant={prop}
                                        sizeValue={scaleValue}
                                        selectElement={selectElement}
                                    />
                                </div>
                            </Draggable>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Garden;
