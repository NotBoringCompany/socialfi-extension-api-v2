/**
 * Represents a resource instance in Wonderbits.
 */
export interface Resource {
    /** the type of resource */
    type: ResourceType;
    /** 
     * the amount of resource 
     * 
     * used in instances that require amount, such as for rewards or in the inventory.
     */
    amount: number;
    /** the resource line */
    line?: ResourceLine;
    /** the rarity of the resource */
    rarity?: ResourceRarity;
    /** 
     * the origin of this resource. 
     * 
     * mostly used when claiming resources to check whether the origin is a bonus resource or rather gathered normally. 
     */
    origin?: ResourceOrigin;
    /** the weight of 1 of this resource (singular weight) */
    weight?: number;
}

/**
 * Lists all possible origins of a resource.
 */
export enum ResourceOrigin {
    NORMAL = 'Normal',
    BONUS = 'Bonus',
}

/**
 * Represents the resource's line.
 */
export enum ResourceLine {
    BARREN = 'Barren',
    ORE = 'Ore',
    FRUIT = 'Fruit',
    LIQUID = 'Liquid',
}

/** 
 * Represents the resource's rarity 
 */
export enum ResourceRarity {
    COMMON = 'Common',
    UNCOMMON = 'Uncommon',
    RARE = 'Rare',
    EPIC = 'Epic',
    LEGENDARY = 'Legendary',
}

/** Numeric representation of `ResourceRarity` */
export const ResourceRarityNumeric: { [key in ResourceRarity]: number } = {
    [ResourceRarity.COMMON]: 0,
    [ResourceRarity.UNCOMMON]: 1,
    [ResourceRarity.RARE]: 2,
    [ResourceRarity.EPIC]: 3,
    [ResourceRarity.LEGENDARY]: 4,
}

/**
 * Lists all barren resources from common-legendary.
 */
export enum BarrenResource {
    SEAWEED = 'Seaweed',
}

/**
 * Lists all ore resources from common-legendary.
 */
export enum OreResource {
    STONE = 'Stone',
    COPPER = 'Copper',
    IRON = 'Iron',
    SILVER = 'Silver',
    GOLD = 'Gold',
}

/**
 * Lists all fruit resources from common-legendary.
 */
export enum FruitResource {
    BLUEBERRY = 'Blueberry',
    APPLE = 'Apple',
    STAR_FRUIT = 'Star Fruit',
    MELON = 'Melon',
    DRAGON_FRUIT = 'Dragon Fruit',
}

/**
 * Lists all liquid resources from common-legendary.
 */
export enum LiquidResource {
    WATER = 'Water',
    MAPLE_SYRUP = 'Maple Syrup',
    HONEY = 'Honey',
    MOONLIGHT_DEW = 'Moonlight Dew',
    PHOENIX_TEAR = 'Phoenix Tear',
}

/** 
 * Represents a resource type based on all possible resources.
 */
export type ResourceType = BarrenResource | OreResource | FruitResource | LiquidResource;

/**
 * Lists all possible resources.
 */
export const CombinedResources = {
    ...BarrenResource,
    ...OreResource,
    ...FruitResource,
    ...LiquidResource,
}

