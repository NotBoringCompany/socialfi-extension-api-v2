import { XBitBerryData } from './bitBerry';
import { Item } from './item';
import { Resource } from './resource';

/**
 * Represents a user's inventory in Wonderbits.
 */
export interface Inventory {
    /** the weight of the inventory (currently only impacted by resources) */
    weight: number;
    /** the maximum inventory weight the user can have */
    maxWeight: number;
    /** the user's xBitBerry data 
     * 
     * (i.e. the current xCookies owned, the total xCookies earned from different sources, etc.) 
     */
    xBitBerryData: XBitBerryData;
    /** a list of resources owned */
    resources: Resource[];
    /** a list of items owned (includes food, bit orbs, terra caps, etc.) */
    items: Item[];
    /** the owned raft ID */
    raftId: number;
    /** a list of owned island IDs */
    islandIds: number[];
    /** a list of owned bit IDs */
    bitIds: number[];    
}