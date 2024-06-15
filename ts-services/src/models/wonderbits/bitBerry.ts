/**
 * Represents the user's xBitBerry data.
 * 
 * xBitBerry is the main in-game currency for Wonderbits used to purchase items, resources, and more.
 */
export interface XBitBerryData {
    /** the user's current xBitBerries left */
    currentXBitBerries: number;
    /** the total amount of xBitBerries the user has spent */
    totalXBitBerriesSpent: number;
    /** 
     * the weekly amount of xBitBerries the user has spent.
     * 
     * resets every sunday 23:59 UTC.
     */
    weeklyXBitBerriesSpent: number;
    /** the extended xBitBerry data (shows the different sources the user has obtained the xBitBerries from) */
    extendedXBitBerryData: ExtendedXBitBerryData[];
}

/**
 * Represents the extended xCookies data.
 */
export interface ExtendedXBitBerryData {
    /** the number of xBitBerries obtained from this source */
    xBitBerries: number;
    /** the source of the xBitBerries */
    source: XBitBerrySource;
}

/**
 * A list of the sources of obtaining xBitBerries.
 */
export enum XBitBerrySource {
    BITBERRY_DEPOSIT = 'BitBerry Deposit',
    RESOURCE_SELLING = 'Resource Selling',
    DAILY_LOGIN_REWARDS = 'Daily Login Rewards',
    REFERRAL_REWARDS = 'Referral Rewards',
    BEGINNER_REWARDS = 'Beginner Rewards',
    CHEST_REWARDS = 'Chest Rewards',
    COLLAB_REWARDS = 'Collab Rewards',
    LEVELLING_UP = 'Levelling Up',
    QUEST_REWARDS = 'Quest Rewards',
    ISLAND_CLAIMING = 'Island Claiming',
    KOS_BENEFITS = 'KOS Benefits',
    TUTORIAL_REWARDS = 'Tutorial Rewards',
    DISCORD_ENGAGEMENT = 'Discord Engagement',
}