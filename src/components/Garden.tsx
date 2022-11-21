import React, { createRef, useEffect, useRef } from "react";

function Garden() {
    const containerRef = useRef<HTMLDivElement>(null);
    const boxRef = createRef<HTMLDivElement>();
    const Refarr: React.RefObject<HTMLDivElement>[] = [];
    const coords = useRef<{
        startX: number;
        startY: number;
        lastX: number;
        lastY: number;
    }>({
        startX: 0,
        startY: 0,
        lastX: 0,
        lastY: 0
    });
    const CoordsArr: any = [];

    const addRef = () => {
        const newRef = boxRef;
        CoordsArr.push({ ...coords.current });
        Refarr.push(newRef);
        console.log(CoordsArr, "CoordsArr");
        console.log(Refarr, "RefArr");
        console.log(newRef, "newRef");
        console.log(boxRef, "boxRef");
        return <div ref={newRef} className="box"></div>;
    };

    const isClicked = useRef<boolean>(false);

    useEffect(() => {
        if (!boxRef.current || !containerRef.current) return;

        const box = boxRef.current;
        const container = containerRef.current;

        const onMouseDown = (e: MouseEvent) => {
            isClicked.current = true;
            coords.current.startX = e.clientX;
            coords.current.startY = e.clientY;
        };

        const onMouseUp = (e: MouseEvent) => {
            isClicked.current = false;
            coords.current.lastX = box.offsetLeft;
            coords.current.lastY = box.offsetTop;
        };

        const onMouseMove = (e: MouseEvent) => {
            if (!isClicked.current) return;

            const nextX =
                e.clientX - coords.current.startX + coords.current.lastX;
            const nextY =
                e.clientY - coords.current.startY + coords.current.lastY;

            box.style.top = `${nextY}px`;
            box.style.left = `${nextX}px`;
        };

        box.addEventListener("mousedown", onMouseDown);
        box.addEventListener("mouseup", onMouseUp);
        container.addEventListener("mousemove", onMouseMove);
        container.addEventListener("mouseleave", onMouseUp);

        const cleanup = () => {
            box.removeEventListener("mousedown", onMouseDown);
            box.removeEventListener("mouseup", onMouseUp);
            container.removeEventListener("mousemove", onMouseMove);
            container.removeEventListener("mouseleave", onMouseUp);
        };

        return cleanup;
    }, [coords]);
    return (
        <main>
            <div ref={containerRef} className="container">
                <div onClick={addRef} ref={boxRef} className="box"></div>
            </div>
        </main>
    );
}

export default Garden;
