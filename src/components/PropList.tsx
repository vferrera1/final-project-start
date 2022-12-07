/* eslint-disable no-extra-parens */
import React from "react";
import { Button } from "react-bootstrap";
import { Plant } from "../interfaces/plant";
//import { defaultProps, PropListArr } from "../interfaces/PropList";
import Prop from "./Prop";

import "../styles/PropList.css";

function PropList({
    gardenElements,
    propList,
    setPropList,
    selectElement
}: {
    gardenElements: Plant[];
    propList: Plant[];
    setPropList: (newPropList: Plant[]) => void;
    selectElement: (id: string) => void;
}) {
    function generateList(selectionList: Plant[]) {
        console.log(selectionList, "Generated");
        // eslint-disable-next-line no-extra-parens
        return selectionList.map((prop) => (
            <div key={prop.species} className="propcontainer">
                <li>{prop.species}</li>
                <Prop plant={prop} selectElement={selectElement} />
            </div>
        ));
    }
    function deepCloneProps(gardenProps: Plant[]): Plant[] {
        return gardenProps.map(
            (prop: Plant): Plant => ({
                ...prop,
                shadeConditions: [...prop.shadeConditions]
            })
        );
    }
    function resetlist() {
        const newPropList = deepCloneProps(gardenElements);
        setPropList(newPropList);
    }
    function alphabeticalOrder() {
        //Might need to do a deep copy of the propList
        const newPropList = deepCloneProps(propList);
        setPropList(
            newPropList.sort((a: Plant, b: Plant) =>
                a.species < b.species ? -1 : 1
            )
        );
    }
    function ReverseAlphabeticalOrder() {
        const newPropList = deepCloneProps(propList);
        setPropList(
            newPropList.sort((a: Plant, b: Plant) =>
                a.species > b.species ? -1 : 1
            )
        );
    }
    function SortbySizeSmall() {
        const newPropList = deepCloneProps(propList);
        setPropList(newPropList.sort((a: Plant, b: Plant) => a.size - b.size));
    }
    function SortbySizeBig() {
        const newPropList = deepCloneProps(propList);
        setPropList(newPropList.sort((a: Plant, b: Plant) => b.size - a.size));
    }
    function SortbyWaterReqSmall() {
        const newPropList = deepCloneProps(propList);
        setPropList(
            newPropList.sort((a: Plant, b: Plant) => a.waterReq - b.waterReq)
        );
    }
    function SortbyWaterReqBig() {
        const newPropList = deepCloneProps(propList);
        setPropList(
            newPropList.sort((a: Plant, b: Plant) => b.waterReq - a.waterReq)
        );
    }

    function NA_Region() {
        const newPropList = deepCloneProps(propList);
        const regionarr: Plant[] = newPropList.filter(
            (q: Plant): boolean => q.region === "North America"
        );
        setPropList(regionarr);
    }
    function SA_Region() {
        const newPropList = deepCloneProps(propList);
        const regionarr: Plant[] = newPropList.filter(
            (q: Plant): boolean => q.region === "South America"
        );
        setPropList(regionarr);
    }
    function EU_Region() {
        const newPropList = deepCloneProps(propList);
        const regionarr: Plant[] = newPropList.filter(
            (q: Plant): boolean => q.region === "Europe"
        );
        setPropList(regionarr);
    }
    function AF_Region() {
        const newPropList = deepCloneProps(propList);
        const regionarr: Plant[] = newPropList.filter(
            (q: Plant): boolean => q.region === "Africa"
        );
        setPropList(regionarr);
    }
    function ASIA_Region() {
        const newPropList = deepCloneProps(propList);
        const regionarr: Plant[] = newPropList.filter(
            (q: Plant): boolean => q.region === "Asia"
        );
        setPropList(regionarr);
    }
    function AUS_Region() {
        const newPropList = deepCloneProps(propList);
        const regionarr: Plant[] = newPropList.filter(
            (q: Plant): boolean => q.region === "Oceania"
        );
        setPropList(regionarr);
    }
    function ALL_Region() {
        const newPropList = deepCloneProps(propList);
        const regionarr: Plant[] = newPropList.filter(
            (q: Plant): boolean => q.region === "Global"
        );
        setPropList(regionarr);
    }
    function lowPrice() {
        const newPropList = deepCloneProps(propList);
        const priceArr: Plant[] = newPropList.filter(
            (q: Plant): boolean => q.price === "$"
        );
        setPropList(priceArr);
    }
    function midPrice() {
        const newPropList = deepCloneProps(propList);
        const priceArr: Plant[] = newPropList.filter(
            (q: Plant): boolean => q.price === "$$"
        );
        setPropList(priceArr);
    }
    function highPrice() {
        const newPropList = deepCloneProps(propList);
        const priceArr: Plant[] = newPropList.filter(
            (q: Plant): boolean => q.price === "$$$"
        );
        setPropList(priceArr);
    }
    function totals() {
        const newPropList = deepCloneProps(propList);
        const NAarr: Plant[] = newPropList.filter(
            (q: Plant): boolean => q.region === "North America"
        );
        const SAarr: Plant[] = newPropList.filter(
            (q: Plant): boolean => q.region === "South America"
        );
        const AFarr: Plant[] = newPropList.filter(
            (q: Plant): boolean => q.region === "Africa"
        );
        const EUarr: Plant[] = newPropList.filter(
            (q: Plant): boolean => q.region === "Europe"
        );
        const AUSarr: Plant[] = newPropList.filter(
            (q: Plant): boolean => q.region === "Oceania"
        );
        const ASIAarr: Plant[] = newPropList.filter(
            (q: Plant): boolean => q.region === "Asia"
        );
        const lowarr: Plant[] = newPropList.filter(
            (q: Plant): boolean => q.price === "$"
        );
        const medarr: Plant[] = newPropList.filter(
            (q: Plant): boolean => q.price === "$$"
        );
        const higharr: Plant[] = newPropList.filter(
            (q: Plant): boolean => q.price === "$$$"
        );

        return (
            <div>
                <h6>The number of North American Plants {NAarr.length}</h6>
                <h6>The number of South American Plants {SAarr.length}</h6>
                <h6>The number of Asian Plants {ASIAarr.length}</h6>
                <h6>The number of African Plants {AFarr.length}</h6>
                <h6>The number of Oceania Plants {AUSarr.length}</h6>
                <h6>The number of European Plants {EUarr.length}</h6>
                <h6>The number of $ Plants {lowarr.length}</h6>
                <h6>The number of $$ Plants {medarr.length}</h6>
                <h6>The number of $$$ Plants {higharr.length}</h6>
            </div>
        );
    }

    return (
        <div>
            {totals()}
            <Button onClick={() => resetlist()}>Reset List</Button>
            <strong>Prop List</strong>
            <ul className="scroll-bar">{generateList(propList)}</ul>
            {/* There should be a better way to implement this...maybe use a drop-down? */}
            {/* Sort By */}
            <Button onClick={() => alphabeticalOrder()}>
                Alphabetical Order
            </Button>
            <Button onClick={() => ReverseAlphabeticalOrder()}>
                Reverse Alphabetical Order
            </Button>
            <Button onClick={() => SortbySizeSmall()}>
                Smallest to Largest
            </Button>
            <Button onClick={() => SortbySizeBig()}>Largest to Smallest</Button>
            <Button onClick={() => SortbyWaterReqSmall()}>
                Lowest Water Requirement
            </Button>
            <Button onClick={() => SortbyWaterReqBig()}>
                Highest Water Requirement
            </Button>
            {/* Filter By */}
            <Button onClick={() => NA_Region()}>North America</Button>
            <Button onClick={() => SA_Region()}>South America</Button>
            <Button onClick={() => EU_Region()}>Europe</Button>
            <Button onClick={() => AF_Region()}>Africa</Button>
            <Button onClick={() => ASIA_Region()}>Asia</Button>
            <Button onClick={() => AUS_Region()}>Oceania</Button>
            <Button onClick={() => ALL_Region()}>World</Button>
            <Button onClick={() => lowPrice()}>Low Price</Button>
            <Button onClick={() => midPrice()}>Medium Price</Button>
            <Button onClick={() => highPrice()}>High Price</Button>
        </div>
    );
}

export default PropList;
