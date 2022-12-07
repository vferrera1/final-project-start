// A representation of a singular plant

import { shadeLevel } from "./shadeLevel";

export type Region =
    | "North America"
    | "South America"
    | "Europe"
    | "Asia"
    | "Africa"
    | "Oceania"
    | "Global";

export type Price = "$" | "$$" | "$$$";

export interface Plant {
    // A unique plant ID (number)
    id: string;
    // The species/name of the plant
    species: string;
    // A URL/filepath of the top view of the plant
    topImage: string;
    // A URL/filepath of the side view of the plant
    sideImage: string;
    // The relative size of plant to the garden
    size: number;
    // The amount of shade plant should receive on average
    shadeConditions: shadeLevel[];
    floweringPeriod: string;
    waterReq: number;
    region: Region;
    price: Price;
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
