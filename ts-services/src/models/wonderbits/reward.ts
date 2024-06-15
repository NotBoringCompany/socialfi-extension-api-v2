import { BitOrbType } from './bitOrb';
import { TerraCapsulatorType } from './terraCapsulator';

/**
 * Represents the user's reward data for Wonderbits.
 */
export interface UserRewardData {
    /** the user's beginner reward data */
    beginnerRewardData: BeginnerRewardData;
    /** the user's daily login reward data */
    dailyLoginRewardData: DailyLoginRewardData;
}

/**
 * Represents the user's beginner reward data for Wonderbits.
 * 
 * this is a 7-day reward system when the user signs up for the first time.
 */
export interface BeginnerRewardData {
    /** the last claimed timestamp of the beginner reward */
    lastClaimedTimestamp: number;
    /** 
     * checks if the beginner reward is claimable.
     * 
     * this is true by default and will be set to false if the user has claimed the reward for the day.
     * 
     * the scheduler will reset this to true every day at 00:00 UTC.
     */
    isClaimable: boolean;
    /**
     * the days the user has claimed the beginner rewards.
     * 
     * if a user misses a day (i.e. not claiming the beginner rewards between 00:00 - 23:59 of that day, the day will be added to `daysMissed`).
     */
    daysClaimed: number[];
    /**
     * the days the user has missed claiming the beginner rewards.
     */
    daysMissed: number[];
}

/**
 * Represents the user's daily login reward data for Wonderbits.
 * 
 * Doesn't require storing rewards earned here, as the rewards are fixed and can be calculated based on the consecutive days (for now).
 */
export interface DailyLoginRewardData {
    /** the last claimed timestamp of the daily login reward */
    lastClaimedTimestamp: number;
    /** 
     * checks if the daily login reward is claimable.
     * 
     * this is true by default and will be set to false if the user has claimed the reward for the day.
     * 
     * the scheduler will reset this to true every day at 00:00 UTC.
     */
    isDailyClaimable: boolean;
    /** the amount of consecutive days the user claimed the rewards */
    consecutiveDaysClaimed: number;
}

/**
 * Represents a universal basic reward data instance.
 */
export interface RewardData {
    /** the reward type */
    type: RewardType;
    /** the reward amount */
    amount: number;
}

/**
 * Lists all universal reward types.
 */
export enum RewardType {
    X_BITBERRIES = 'xBitBerries',
    POINTS = 'Points',
    BIT_ORB_I = BitOrbType.BIT_ORB_I,
    TERRA_CAPSULATOR_I = TerraCapsulatorType.TERRA_CAPSULATOR_I
}