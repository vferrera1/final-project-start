/* eslint-disable react/jsx-key */
import React from "react";
import { ConnectDropTarget } from "react-dnd";
import Draggable, { DraggableData } from "react-draggable";
import { Plant } from "../interfaces/plant";
import Prop from "./Prop";
class Garden extends React.Component<{
    boardprops: Plant[];
    drop: ConnectDropTarget;
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

    handleDrag = (e: EventListener, ui: DraggableData) => {
        const { x, y } = this.state.deltaPosition;
        this.setState({
            deltaPosition: {
                x: x + ui.deltaX,
                y: y + ui.deltaY
            }
        });
    };

    onStart = () => {
        const state2 = this.state;
        this.setState({ activeDrags: ++state2.activeDrags });
    };

    onStop = () => {
        const state2 = this.state;
        this.setState({ activeDrags: --state2.activeDrags });
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

    onControlledDrag = (e: EventListener, position: { x: any; y: any }) => {
        const { x, y } = position;
        this.setState({ controlledPosition: { x, y } });
    };

    onControlledDragStop = (
        e: EventListener,
        position: { x: number; y: number }
    ) => {
        this.onControlledDrag(e, position);
        this.onStop();
    };

    render() {
        const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
        //const { deltaPosition, controlledPosition } = this.state;

        return (
            <div ref={this.props.drop} className="container">
                {this.props.boardprops.map((prop) => {
                    return (
                        <Draggable bounds="parent" {...dragHandlers}>
                            <div className="box">
                                <Prop plant={prop} />
                            </div>
                        </Draggable>
                    );
                })}
            </div>
        );
    }
}

export default Garden;
