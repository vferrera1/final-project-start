// A representation of a singular plant
export interface Plant {
    // The species/name of the plant (can be used as plant ID)
    species: string;
    // A URL/filepath of the top view of the plant
    topImage: string;
    // A URL/filepath of the side view of the plant
    sideImage: string;
    // The relative size of plant to the garden
    size: number;
    /* A list of requirements needed to maintain plant health
     * I am thinking about creating an array that stores Requirement objects.
     * The Requirment objects would store the type of requirement (e.g. water, light)
     *     and the value of that requirement?
     * For now, I am listing each requirement separately below
     */
    lightRequirement: string; //Enumeration (e.g.) {0-No light, 1-Little light, 2-Some light, 3-Direct light}
    waterRequirement: string;
    soilRequirement: string; //Could also be called nutrient requirement
    temperatureRequirement: string;
    // Information regarding the bloom of the plant
    timeToBloom: number;
    bloomDuration: number;
    // Current age of plant (should age be in months or years?)
    age: number;
    // Answers (yes/no) whether the plant is food for insects, birds, or other animals
    insectFood: boolean;
    birdFood: boolean;
    animalFood: boolean;
}
