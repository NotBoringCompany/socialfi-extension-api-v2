/**
 * Represents a food instance in Wonderbits.
 */
export interface Food {
    /** the type of food */
    type: FoodType;
    /** the amount of food */
    amount: number;
}

/**
 * Represents the type of food.
 */
export enum FoodType {
    CANDY = 'Candy',
    CHOCOLATE = 'Chocolate',
    JUICE = 'Juice',
    BURGER = 'Burger',
}