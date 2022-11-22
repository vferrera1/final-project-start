import { Plant } from "./plant";
import { shadeLevel } from "./shadeLevel";
import cactusTD from "../images/CactusTopDown.png";
import cactusSV from "../images/CactusSide.png";
import tomatoSV from "../images/TomatoPlantSide.png";
import redrosesSV from "../images/RedRoseBushSide.png";
import yellowrosesSV from "../images/YellowRoseBushSide.png";
import sunflowerSV from "../images/SunflowerSide.png";
import pathTD from "../images/Path.png";

const Cactus: Plant = {
    id: 1,
    species: "Cactus",
    topImage: cactusTD,
    sideImage: cactusSV,
    size: 20,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring"
};
const Tomato: Plant = {
    id: 2,
    species: "Tomato Plant",
    topImage: "",
    sideImage: tomatoSV,
    size: 20,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring"
};
const RedRoses: Plant = {
    id: 3,
    species: "Red Roses",
    topImage: "",
    sideImage: redrosesSV,
    size: 20,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring"
};
const YellowRoses: Plant = {
    id: 4,
    species: "Yellow Roses",
    topImage: "",
    sideImage: yellowrosesSV,
    size: 20,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring"
};
const Sunflower: Plant = {
    id: 5,
    species: "Sunflower",
    topImage: "",
    sideImage: sunflowerSV,
    size: 20,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring"
};
const Path: Plant = {
    id: 30,
    species: "Path",
    topImage: pathTD,
    sideImage: pathTD,
    size: 20,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring"
};
export const PropListArr = [
    Cactus,
    Tomato,
    RedRoses,
    YellowRoses,
    Sunflower,
    Path
];
