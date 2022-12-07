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
    id: 1,
    species: "Cactus",
    topImage: cactusTD,
    sideImage: cactusSV,
    size: 8,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring",
    waterReq: 12,
    region: "Global",
    price: "$$",
    misc: "Cacti"
};
const Tomato: Plant = {
    id: 2,
    species: "Tomato Plant",
    topImage: "",
    sideImage: tomatoSV,
    size: 5,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring",
    waterReq: 64,
    region: "South America",
    price: "$$",
    misc: "Farmable"
};
const RedRoses: Plant = {
    id: 3,
    species: "Red Roses",
    topImage: "",
    sideImage: redrosesSV,
    size: 12,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring",
    waterReq: 54,
    region: "Europe",
    price: "$$$",
    misc: "Flowers"
};
const YellowRoses: Plant = {
    id: 4,
    species: "Yellow Roses",
    topImage: "",
    sideImage: yellowrosesSV,
    size: 12,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring",
    waterReq: 49,
    region: "Europe",
    price: "$$$",
    misc: "Flowers"
};
const Sunflower: Plant = {
    id: 5,
    species: "Sunflower",
    topImage: "",
    sideImage: sunflowerSV,
    size: 11,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring",
    waterReq: 43,
    region: "North America",
    price: "$$$",
    misc: "Flowers"
};
const Lilac: Plant = {
    id: 6,
    species: "Lilac",
    topImage: lilacTD,
    sideImage: lilacSV,
    size: 9,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring",
    waterReq: 39,
    region: "Europe",
    price: "$$",
    misc: "Flowers"
};
const Chrysanthemum: Plant = {
    id: 7,
    species: "Chrysanthemum",
    topImage: chrisTD,
    sideImage: chrisSV,
    size: 7,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring",
    waterReq: 22,
    region: "Asia",
    price: "$$$",
    misc: "Flowers"
};
const SiberianBugloss: Plant = {
    id: 8,
    species: "Siberian Bugloss",
    topImage: SBTD,
    sideImage: SBSV,
    size: 8,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring",
    waterReq: 34,
    region: "Asia",
    price: "$$",
    misc: "Flowers"
};
const Bamboo: Plant = {
    id: 9,
    species: "Bamboo",
    topImage: BambooTD,
    sideImage: BambooSV,
    size: 7,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring",
    waterReq: 27,
    region: "Asia",
    price: "$$",
    misc: "Decorations"
};
const Cabbage: Plant = {
    id: 10,
    species: "Cabbage",
    topImage: CabbageTD,
    sideImage: CabbageSV,
    size: 4,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring",
    waterReq: 74,
    region: "Europe",
    price: "$",
    misc: "Farmable"
};
const Corn: Plant = {
    id: 11,
    species: "Corn",
    topImage: CornTD,
    sideImage: CornSV,
    size: 8,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring",
    waterReq: 84,
    region: "South America",
    price: "$",
    misc: "Farmable"
};
const Potato: Plant = {
    id: 12,
    species: "Potato Plant",
    topImage: PotatoTD,
    sideImage: PotatoSV,
    size: 4,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring",
    waterReq: 54,
    region: "North America",
    price: "$",
    misc: "Farmable"
};
const Aloe: Plant = {
    id: 13,
    species: "Aloe",
    topImage: SuccTD,
    sideImage: SuccSV,
    size: 5,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring",
    waterReq: 19,
    region: "Oceania",
    price: "$",
    misc: "Cacti"
};
const Succulent: Plant = {
    id: 14,
    species: "Succulent",
    topImage: AloeTD,
    sideImage: AloeSV,
    size: 4,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring",
    waterReq: 4,
    region: "Global",
    price: "$",
    misc: "Cacti"
};
const LemonTree: Plant = {
    id: 27,
    species: "Lemon Tree",
    topImage: LemonTD,
    sideImage: LemonSV,
    size: 14,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring",
    waterReq: 62,
    region: "Asia",
    price: "$$$",
    misc: "Tree"
};
const RedMapleTree: Plant = {
    id: 28,
    species: "Red Maple",
    topImage: RedMapleTD,
    sideImage: RedMapleSV,
    size: 20,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring",
    waterReq: 10,
    region: "North America",
    price: "$$$",
    misc: "Tree"
};
const Bush: Plant = {
    id: 29,
    species: "Bush",
    topImage: BushTD,
    sideImage: BushSV,
    size: 8,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring",
    waterReq: 15,
    region: "Global",
    price: "$$",
    misc: "Decorations"
};
const Path: Plant = {
    id: 30,
    species: "Path",
    topImage: pathTD,
    sideImage: pathTD,
    size: 10,
    shadeConditions: [shadeLevel.None, shadeLevel.Light, shadeLevel.Partial],
    floweringPeriod: "Mid-Spring",
    waterReq: 0,
    region: "Global",
    price: "$$",
    misc: "Decorations"
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

export const defaultProps = [
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
