/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Plant } from "../interfaces/plant";
import { defaultProps, PropListArr } from "../interfaces/PropList";
import Prop from "./Prop";

import "../styles/PropList.css";

function PropList() {
    const [proplist, setProplist] = useState<Plant[]>(PropListArr);

    function generateList(prop: Plant[]) {
        console.log(prop, "Generated");
        // eslint-disable-next-line no-extra-parens
        return prop.map((prop) => (
            <div key={prop.species} className="propcontainer">
                <li>{prop.species}</li>
                <Prop plant={prop} />
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
        let newPropList = deepCloneProps(proplist);
        newPropList = defaultProps;
        setProplist(newPropList);
    }
    function alphabeticalOrder() {
        //Might need to do a deep copy of the propList
        const newPropList = deepCloneProps(proplist);
        setProplist(
            newPropList.sort((a: Plant, b: Plant) =>
                a.species < b.species ? -1 : 1
            )
        );
    }
    function ReversealphabeticalOrder() {
        const newPropList = deepCloneProps(proplist);
        setProplist(
            newPropList.sort((a: Plant, b: Plant) =>
                a.species > b.species ? -1 : 1
            )
        );
    }
    function SortbySizeSmall() {
        const newPropList = deepCloneProps(proplist);
        setProplist(newPropList.sort((a: Plant, b: Plant) => a.size - b.size));
    }
    function SortbySizeBig() {
        const newPropList = deepCloneProps(proplist);
        setProplist(newPropList.sort((a: Plant, b: Plant) => b.size - a.size));
    }
    function SortbyWaterReqSmall() {
        const newPropList = deepCloneProps(proplist);
        setProplist(
            newPropList.sort((a: Plant, b: Plant) => a.waterReq - b.waterReq)
        );
    }
    function SortbyWaterReqBig() {
        const newPropList = deepCloneProps(proplist);
        setProplist(
            newPropList.sort((a: Plant, b: Plant) => b.waterReq - a.waterReq)
        );
    }

    function NA_Region() {
        const newPropList = deepCloneProps(proplist);
        const regionarr: Plant[] = [];
        newPropList.map((q: Plant) => {
            if (q.region == "North America") {
                regionarr.push(q);
            }
        });
        setProplist(regionarr);
    }
    function SA_Region() {
        const newPropList = deepCloneProps(proplist);
        const regionarr: Plant[] = [];
        newPropList.map((q: Plant) => {
            if (q.region == "South America") {
                regionarr.push(q);
            }
        });
        setProplist(regionarr);
    }
    function EU_Region() {
        const newPropList = deepCloneProps(proplist);
        const regionarr: Plant[] = [];
        newPropList.map((q: Plant) => {
            if (q.region == "Europe") {
                regionarr.push(q);
            }
        });
        setProplist(regionarr);
    }
    function AF_Region() {
        const newPropList = deepCloneProps(proplist);
        const regionarr: Plant[] = [];
        newPropList.map((q: Plant) => {
            if (q.region == "Africa") {
                regionarr.push(q);
            }
        });
        setProplist(regionarr);
    }
    function ASIA_Region() {
        const newPropList = deepCloneProps(proplist);
        const regionarr: Plant[] = [];
        newPropList.map((q: Plant) => {
            if (q.region == "Asia") {
                regionarr.push(q);
            }
        });
        setProplist(regionarr);
    }
    function AUS_Region() {
        const newPropList = deepCloneProps(proplist);
        const regionarr: Plant[] = [];
        newPropList.map((q: Plant) => {
            if (q.region == "Oceania") {
                regionarr.push(q);
            }
        });
        setProplist(regionarr);
    }
    function ALL_Region() {
        const newPropList = deepCloneProps(proplist);
        const regionarr: Plant[] = [];
        newPropList.map((q: Plant) => {
            if (q.region == "Global") {
                regionarr.push(q);
            }
        });
        setProplist(regionarr);
    }
    function lowprice_filter() {
        const newPropList = deepCloneProps(proplist);
        const regionarr: Plant[] = [];
        newPropList.map((q: Plant) => {
            if (q.price == "$") {
                regionarr.push(q);
            }
        });
        setProplist(regionarr);
    }
    function medprice_filter() {
        const newPropList = deepCloneProps(proplist);
        const regionarr: Plant[] = [];
        newPropList.map((q: Plant) => {
            if (q.price == "$$") {
                regionarr.push(q);
            }
        });
        setProplist(regionarr);
    }
    function highprice_filter() {
        const newPropList = deepCloneProps(proplist);
        const regionarr: Plant[] = [];
        newPropList.map((q: Plant) => {
            if (q.price == "$$$") {
                regionarr.push(q);
            }
        });
        setProplist(regionarr);
    }
    function totals() {
        const newPropList = deepCloneProps(proplist);
        const NAarr: Plant[] = [];
        const SAarr: Plant[] = [];
        const AFarr: Plant[] = [];
        const EUarr: Plant[] = [];
        const AUSarr: Plant[] = [];
        const ASIAarr: Plant[] = [];
        const lowarr: Plant[] = [];
        const medarr: Plant[] = [];
        const higharr: Plant[] = [];

        newPropList.map((q: Plant) => {
            if (q.region == "Europe") {
                EUarr.push(q);
            }
        });
        newPropList.map((q: Plant) => {
            if (q.region == "North America") {
                NAarr.push(q);
            }
        });
        newPropList.map((q: Plant) => {
            if (q.region == "South America") {
                SAarr.push(q);
            }
        });
        newPropList.map((q: Plant) => {
            if (q.region == "Africa") {
                AFarr.push(q);
            }
        });
        newPropList.map((q: Plant) => {
            if (q.region == "Oceania") {
                AUSarr.push(q);
            }
        });
        newPropList.map((q: Plant) => {
            if (q.region == "Asia") {
                ASIAarr.push(q);
            }
        });
        newPropList.map((q: Plant) => {
            if (q.price == "$") {
                lowarr.push(q);
            }
        });
        newPropList.map((q: Plant) => {
            if (q.price == "$$") {
                medarr.push(q);
            }
        });
        newPropList.map((q: Plant) => {
            if (q.price == "$$$") {
                higharr.push(q);
            }
        });
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
            <ul className="scroll-bar">{generateList(proplist)}</ul>
            Sort
            <ul className="scroll-bar2">
                <Button onClick={() => alphabeticalOrder()}>Alpha</Button>
                <Button onClick={() => ReversealphabeticalOrder()}>
                    Reverse Alpha
                </Button>
                <Button onClick={() => SortbyWaterReqBig()}>Most Water</Button>
                <Button onClick={() => SortbyWaterReqSmall()}>
                    Least Water
                </Button>
                <Button onClick={() => SortbySizeBig()}>Biggest Size</Button>
                <Button onClick={() => SortbySizeSmall()}>Smallest Size</Button>
            </ul>
            Filter
            <div>
                <div>
                    <Button onClick={() => lowprice_filter()}>$</Button>
                    <Button onClick={() => medprice_filter()}>$$</Button>
                </div>
                <div>
                    <Button onClick={() => highprice_filter()}>$$$</Button>
                </div>
                <div>
                    <Button onClick={() => NA_Region()}>North American</Button>
                    <Button onClick={() => SA_Region()}>South American</Button>
                </div>
                <div>
                    <Button onClick={() => EU_Region()}>European</Button>
                    <Button onClick={() => AF_Region()}>African</Button>
                </div>
                <div>
                    <Button onClick={() => ASIA_Region()}>Asian</Button>
                    <Button onClick={() => AUS_Region()}>Oceania</Button>
                </div>
                <div>
                    <Button onClick={() => ALL_Region()}>Global</Button>
                    <Button onClick={() => resetlist()}>Reset List</Button>
                </div>
                Sorting works on Filtered List.{" "}
                <div>Always Remember to Reset the Filter!</div>
            </div>
        </div>
    );
}

export default PropList;
