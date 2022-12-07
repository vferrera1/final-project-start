// A representation of a singular plant

import { shadeLevel } from "./shadeLevel";

type Region =
    | "North America"
    | "South America"
    | "Europe"
    | "Asia"
    | "Africa"
    | "Oceania"
    | "Global";

type Price = "$" | "$$" | "$$$";

type Misc = "Farmable" | "Tree" | "Flowers" | "Decorations" | "Cacti";

export interface Plant {
    id: number;
    species: string;
    topImage: string;
    sideImage: string;
    size: number;
    shadeConditions: shadeLevel[];
    floweringPeriod: string;
    waterReq: number;
    region: Region;
    price: Price;
    misc: Misc;
    /* COMMENTED OUT ATTRIBUTES OF PLANT: WILL ADD TO PLANT ONCE THEY BECOME MORE DEFINED
    soilRequirement: string; //Could also be called nutrient requirement
    temperatureRequirement: string;

    // Information regarding the bloom of the plant
    timeToBloom: number;

    // Current age of plant (should age be in months or years?)
    age: number;

    // Answers (yes/no) whether the plant is food for insects, birds, or other animals
    insectFood: boolean;
    birdFood: boolean;
    animalFood: boolean;
    */
}
