/* eslint-disable react/prop-types */
/* eslint-disable react/no-direct-mutation-state */
import React from "react";
import ReactDOM from "react-dom";
import Draggable from "react-draggable";
import cactusTD from "./images/CactusTopDown.png";

class Garden extends React.Component {
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
        return (
            <div className="container">
                <Draggable bounds="parent" {...dragHandlers}>
                    <div className="box">
                        I can only be moved within my offsetParent.
                        <br />
                        <br />
                        Both parent padding and child margin work properly.
                    </div>
                </Draggable>
                <Draggable bounds="parent" {...dragHandlers}>
                    <div className="box">
                        <img src="../images/CactusTopDown.png"></img>
                    </div>
                </Draggable>
            </div>
        );
    }
}

export default Garden;
