import { Plant } from "./plant";
import { shadeLevel } from "./shadeLevel";
import cactus from "/Users/robertperez/Code/final-project-start/src/images/Cactus.png";
import tomato from "/Users/robertperez/Code/final-project-start/src/images/TomatoPlant.png";
import redroses from "/Users/robertperez/Code/final-project-start/src/images/RedRoseBush.png";
import yellowroses from "/Users/robertperez/Code/final-project-start/src/images/YellowRoseBush.png";
import sunflower from "/Users/robertperez/Code/final-project-start/src/images/Sunflower.png";
import path from "/Users/robertperez/Code/final-project-start/src/images/Path.png";

const Cactus: Plant = {
    id: 1,
    species: "Cactus",
    topImage: cactus,
    sideImage: "",
    size: 20,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring"
};
const Tomato: Plant = {
    id: 2,
    species: "Tomato_Plant",
    topImage: tomato,
    sideImage: "",
    size: 20,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring"
};
const RedRoses: Plant = {
    id: 3,
    species: "Red_Roses",
    topImage: redroses,
    sideImage: "",
    size: 20,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring"
};
const YellowRoses: Plant = {
    id: 4,
    species: "Yellow_Roses",
    topImage: yellowroses,
    sideImage: "",
    size: 20,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring"
};
const Sunflower: Plant = {
    id: 5,
    species: "Sunflower",
    topImage: sunflower,
    sideImage: "",
    size: 20,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring"
};
const Path: Plant = {
    id: 30,
    species: "Path",
    topImage: path,
    sideImage: "",
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
