import { BitOrbType } from './bitOrb';
import { BoosterItem } from './booster';
import { FoodType } from './food';
import { TerraCapsulatorType } from './terraCapsulator';

/**
 * Represents an item instance in Wonderbits.
 */
export interface Item {
    /** the type of item */
    type: ItemType;
    /** the amount of item (used only for methods that require amount, such as for rewards or in the inventory) */
    amount?: number;
    /** the amount of this item consumed by the user (used only for methods that require amount, such as for rewards or in the inventory) */
    totalAmountConsumed?: number;
    /** 
     * the amount of this item consumed by the user in a week (used only for methods that require amount, such as for rewards or in the inventory) 
     * 
     * gets reset by a scheduler weekly at 23:59 UTC sunday.
     */
    weeklyAmountConsumed?: number;
}

/**
 * Represents the type of item, which are generic assets usable in Wonderbits.
 */
export type ItemType = BoosterItem | FoodType | BitOrbType | TerraCapsulatorType;