// A representation of a singular plant

/* Describes the amount of shade (i.e. amount of sun) required for plant care. 
 * Values range from None (no shade/full sun) to Dense (Dense shade).
 * For more information on the categories, see the following site:
 * https://www.johnson.k-state.edu/lawn-garden/agent-articles/miscellaneous/defining-sun-requirements-for-plants.html
 */
enum shadeRequirement {
    None = 0,
    Light,
    Partial,
    Full,
    Dense
}
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
    shadeConditions: shadeRequirement[];
    /* COMMENTED OUT ATTRIBUTES OF PLANT: WILL ADD TO PLANT ONCE THEY BECOME MORE DEFINED
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
    */
}
