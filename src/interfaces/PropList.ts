import { Plant } from "./plant";
import { shadeLevel } from "./shadeLevel";
import cactusTD from "../images/CactusTopDown.png";
import cactusSV from "../images/CactusSide.png";
import tomatoSV from "../images/TomatoPlantSide.png";
import redrosesSV from "../images/RedRoseBushSide.png";
import yellowrosesSV from "../images/YellowRoseBushSide.png";
import sunflowerSV from "../images/SunflowerSide.png";
import pathTD from "../images/Path.png";
import lilacSV from "../images/LilacSV.png";
import lilacTD from "../images/LilacTV.png";
import chrisSV from "../images/ChrisSV.png";
import chrisTD from "../images/ChrisTD.png";
import SBSV from "../images/SBSV.png";
import SBTD from "../images/SBTD.png";
import BushTD from "../images/BushTD.png";
import BushSV from "../images/BushSV.png";
import RedMapleTD from "../images/RedMapleTD.png";
import RedMapleSV from "../images/RedMapleSV.png";
import LemonSV from "../images/LemonSV.png";
import LemonTD from "../images/LemonTD.png";
import BambooTD from "../images/BambooTD.png";
import BambooSV from "../images/BambooSV.png";
import CabbageTD from "../images/CabbageTD.png";
import CabbageSV from "../images/CabbageSV.png";
import CornTD from "../images/CornTD.png";
import CornSV from "../images/CornSV.png";
import PotatoTD from "../images/PotatoTD.png";
import PotatoSV from "../images/PotatoSV.png";
import SuccTD from "../images/SuccTD.png";
import SuccSV from "../images/SuccSV.png";
import AloeTD from "../images/SuccRTD.png";
import AloeSV from "../images/SuccRSV.png";

const Cactus: Plant = {
    id: "1",
    species: "Cactus",
    topImage: cactusTD,
    sideImage: cactusSV,
    size: 20,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring"
};
const Tomato: Plant = {
    id: "2",
    species: "Tomato Plant",
    topImage: "",
    sideImage: tomatoSV,
    size: 20,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring"
};
const RedRoses: Plant = {
    id: "3",
    species: "Red Roses",
    topImage: "",
    sideImage: redrosesSV,
    size: 20,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring"
};
const YellowRoses: Plant = {
    id: "4",
    species: "Yellow Roses",
    topImage: "",
    sideImage: yellowrosesSV,
    size: 20,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring"
};
const Sunflower: Plant = {
    id: "5",
    species: "Sunflower",
    topImage: "",
    sideImage: sunflowerSV,
    size: 20,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring"
};
const Lilac: Plant = {
    id: "6",
    species: "Lilac",
    topImage: lilacTD,
    sideImage: lilacSV,
    size: 20,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring"
};
const Chrysanthemum: Plant = {
    id: "7",
    species: "Chrysanthemum",
    topImage: chrisTD,
    sideImage: chrisSV,
    size: 20,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring"
};
const SiberianBugloss: Plant = {
    id: "8",
    species: "Siberian Bugloss",
    topImage: SBTD,
    sideImage: SBSV,
    size: 20,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring"
};
const Bamboo: Plant = {
    id: "9",
    species: "Bamboo",
    topImage: BambooTD,
    sideImage: BambooSV,
    size: 20,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring"
};
const Cabbage: Plant = {
    id: "10",
    species: "Cabbage",
    topImage: CabbageTD,
    sideImage: CabbageSV,
    size: 20,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring"
};
const Corn: Plant = {
    id: "11",
    species: "Corn",
    topImage: CornTD,
    sideImage: CornSV,
    size: 20,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring"
};
const Potato: Plant = {
    id: "12",
    species: "Potato Plant",
    topImage: PotatoTD,
    sideImage: PotatoSV,
    size: 20,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring"
};
const Aloe: Plant = {
    id: "13",
    species: "Aloe",
    topImage: SuccTD,
    sideImage: SuccSV,
    size: 20,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring"
};
const Succulent: Plant = {
    id: "14",
    species: "Succulent",
    topImage: AloeTD,
    sideImage: AloeSV,
    size: 20,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring"
};
const LemonTree: Plant = {
    id: "27",
    species: "Lemon Tree",
    topImage: LemonTD,
    sideImage: LemonSV,
    size: 20,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring"
};
const RedMapleTree: Plant = {
    id: "28",
    species: "Red Maple",
    topImage: RedMapleTD,
    sideImage: RedMapleSV,
    size: 20,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring"
};
const Bush: Plant = {
    id: "29",
    species: "Bush",
    topImage: BushTD,
    sideImage: BushSV,
    size: 20,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring"
};
const Path: Plant = {
    id: "30",
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
    Lilac,
    Chrysanthemum,
    SiberianBugloss,
    Bamboo,
    Cabbage,
    Corn,
    Potato,
    Aloe,
    Succulent,
    LemonTree,
    RedMapleTree,
    Bush,
    Path
];
