import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Plant } from "../interfaces/plant";
import Prop from "./Prop";

import "../styles/PropList.css";

const SORTINGMETHODS = [
    "Original",
    "A-Z",
    "Z-A",
    "Smallest-Largest",
    "Largest-Smallest",
    "Greatest Water Requirement",
    "Least Water Requirement"
];
const REGIONS = [
    "All",
    "North America",
    "South America",
    "Europe",
    "Asia",
    "Africa",
    "Oceania",
    "Global"
];
const PRICES = ["All", "$", "$$", "$$$"];

interface methodReference {
    name: string;
    operation: () => void;
}

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
    const [sortingMethod, setSortingMethod] = useState<string>("Original");
    const [regionFilter, setRegionFilter] = useState<string>("None");
    const [priceFilter, setPriceFilter] = useState<string>("None");

    function generateList(selectionList: Plant[]) {
        console.log(selectionList, "Generated");
        return selectionList.map((prop) => generateListElement(prop));
    }
    function generateListElement(prop: Plant): JSX.Element {
        return (
            <div key={prop.species} className="propcontainer">
                <li>{prop.species}</li>
                <Prop
                    plant={prop}
                    selectElement={selectElement}
                    sizeValue={100}
                />
            </div>
        );
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
        const newPropList = deepCloneProps(gardenElements);
        const regionarr: Plant[] = newPropList.filter(
            (q: Plant): boolean => q.region === "North America"
        );
        setPropList(regionarr);
    }
    function SA_Region() {
        const newPropList = deepCloneProps(gardenElements);
        const regionarr: Plant[] = newPropList.filter(
            (q: Plant): boolean => q.region === "South America"
        );
        setPropList(regionarr);
    }
    function EU_Region() {
        const newPropList = deepCloneProps(gardenElements);
        const regionarr: Plant[] = newPropList.filter(
            (q: Plant): boolean => q.region === "Europe"
        );
        setPropList(regionarr);
    }
    function AF_Region() {
        const newPropList = deepCloneProps(gardenElements);
        const regionarr: Plant[] = newPropList.filter(
            (q: Plant): boolean => q.region === "Africa"
        );
        setPropList(regionarr);
    }
    function ASIA_Region() {
        const newPropList = deepCloneProps(gardenElements);
        const regionarr: Plant[] = newPropList.filter(
            (q: Plant): boolean => q.region === "Asia"
        );
        setPropList(regionarr);
    }
    function AUS_Region() {
        const newPropList = deepCloneProps(gardenElements);
        const regionarr: Plant[] = newPropList.filter(
            (q: Plant): boolean => q.region === "Oceania"
        );
        setPropList(regionarr);
    }
    function ALL_Region() {
        const newPropList = deepCloneProps(gardenElements);
        const regionarr: Plant[] = newPropList.filter(
            (q: Plant): boolean => q.region === "Global"
        );
        setPropList(regionarr);
    }
    function lowPrice() {
        const newPropList = deepCloneProps(gardenElements);
        const priceArr: Plant[] = newPropList.filter(
            (q: Plant): boolean => q.price === "$"
        );
        setPropList(priceArr);
    }
    function midPrice() {
        const newPropList = deepCloneProps(gardenElements);
        const priceArr: Plant[] = newPropList.filter(
            (q: Plant): boolean => q.price === "$$"
        );
        setPropList(priceArr);
    }
    function highPrice() {
        const newPropList = deepCloneProps(gardenElements);
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
    function changeSortingMethod(event: React.ChangeEvent<HTMLSelectElement>) {
        const sortingMethods: methodReference[] = [
            { name: "Original", operation: resetlist },
            { name: "A-Z", operation: alphabeticalOrder },
            { name: "Z-A", operation: ReverseAlphabeticalOrder },
            { name: "Smallest-Largest", operation: SortbySizeSmall },
            { name: "Largest-Smallest", operation: SortbySizeBig },
            {
                name: "Greatest Water Requirement",
                operation: SortbyWaterReqBig
            },
            {
                name: "Least Water Requirement",
                operation: SortbyWaterReqSmall
            }
        ];
        const newSortingMethod = sortingMethods.find(
            (sortMethod: methodReference): boolean =>
                sortMethod.name === event.target.value
        );
        if (newSortingMethod !== undefined) {
            setSortingMethod(newSortingMethod.name);
            newSortingMethod.operation();
        }
    }
    function changeRegionFilter(event: React.ChangeEvent<HTMLSelectElement>) {
        const regionFilterers: methodReference[] = [
            { name: "All", operation: resetlist },
            { name: "North America", operation: NA_Region },
            { name: "South America", operation: SA_Region },
            { name: "Europe", operation: EU_Region },
            { name: "Africa", operation: AF_Region },
            { name: "Asia", operation: ASIA_Region },
            { name: "Oceania", operation: AUS_Region },
            { name: "Global", operation: ALL_Region }
        ];
        const newRegionFilter = regionFilterers.find(
            (regionFilterer: methodReference): boolean =>
                regionFilterer.name === event.target.value
        );
        if (newRegionFilter !== undefined) {
            setRegionFilter(newRegionFilter.name);
            setSortingMethod("Original");
            setPriceFilter("None");
            newRegionFilter.operation();
        }
    }
    function changePriceFilter(event: React.ChangeEvent<HTMLSelectElement>) {
        const priceFilterers: methodReference[] = [
            { name: "All", operation: resetlist },
            { name: "$", operation: lowPrice },
            { name: "$$", operation: midPrice },
            { name: "$$$", operation: highPrice }
        ];
        const newPriceFilter = priceFilterers.find(
            (priceFilterer: methodReference): boolean =>
                priceFilterer.name === event.target.value
        );
        if (newPriceFilter !== undefined) {
            setPriceFilter(newPriceFilter.name);
            setSortingMethod("Original");
            setRegionFilter("None");
            resetlist();
            newPriceFilter.operation();
        }
    }
    function createOption(userOption: string): JSX.Element {
        return (
            <option key={userOption} value={userOption}>
                {userOption}
            </option>
        );
    }
    return (
        <div>
            {totals()}
            <Button onClick={() => resetlist()}>Reset List</Button>
            <strong>Prop List</strong>
            <ul className="scroll-bar">{generateList(propList)}</ul>
            {/* Sort By */}
            <Form.Group controlId="formSortSelectionList">
                <Form.Label>Sort By:</Form.Label>
                <Form.Select
                    value={sortingMethod}
                    onChange={changeSortingMethod}
                >
                    {SORTINGMETHODS.map((sortMethod: string) =>
                        createOption(sortMethod)
                    )}
                </Form.Select>
            </Form.Group>
            {/* Filter By Region */}
            <Form.Group controlId="formFilterbyRegion">
                <Form.Label>Filter By Region:</Form.Label>
                <Form.Select value={regionFilter} onChange={changeRegionFilter}>
                    {REGIONS.map((region: string) => createOption(region))}
                </Form.Select>
            </Form.Group>
            {/* Filter By Price */}
            <Form.Group controlId="formFilterbyPrice">
                <Form.Label>Filter By Price:</Form.Label>
                <Form.Select value={priceFilter} onChange={changePriceFilter}>
                    {PRICES.map((price: string) => createOption(price))}
                </Form.Select>
            </Form.Group>
        </div>
    );
}

export default PropList;
