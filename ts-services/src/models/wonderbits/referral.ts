import { RewardData } from './reward';

/**
 * Represents the user's referral data for Wonderbits.
 */
export interface ReferralData {
    /** the user's personal referral code */
    referralCode: string;
    /** the data of the users who got referred by this user (i.e. the users who use this user's referral code to sign up) */
    referredUsersData: ReferredUserData[];
    /** the claimable referral rewards based on referred users */
    claimableReferralRewards: RewardData[];
}

/**
 * Represents a user who was referred by another user.
 */
export interface ReferredUserData {
    /** the referred user's database id */
    userId: string;
    /** the referred user's username */
    username: string;
    /** when the user was referred */
    referredTimestamp: number;
    /** 
     * if the user has reached the minimum level 
     * 
     * this is a requirement to receive referral rewards from this user
     */
    minLevelReached: boolean;
}