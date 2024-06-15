import { Inventory } from './inventory';
import { InviteCodeData } from './invite';
import { UserPOIData } from './poi';
import { ReferralData } from './referral';
import { BeginnerRewardData, DailyLoginRewardData, UserRewardData } from './reward';
import { UserSquadData } from './squad';
import { UserTutorialData } from './tutorial';

/**
 * Represents the in-game data for Wonderbits for the user.
 */
export interface WonderbitsData {
    /** the user's inventory for Wonderbits */
    inventory: Inventory;
    /** the user's level */
    level: number;
    /** the user's tutorial-related data */
    tutorialData: UserTutorialData;
    /** the user's reward data */
    rewardData: UserRewardData;
    /** the user's squad data */
    squadData: UserSquadData;
    /** the user's POI-related data */
    poiData: UserPOIData;
    /** 
     * the invite code used for the user to play the game 
     * 
     * if the user signed up via a referral code, the referrer's id is stored here.
     */
    inviteCodeData: InviteCodeData;
    /** the user's personal referral data (including their code, the amount of people they referred and so on) */
    referralData: ReferralData;
    /** 
     * a list of post IDs where chests have been opened for today 
     *
     * this feature is specific to Wonderbits so users can obtain rewards by opening chests in X
     */
    openedPostIdsToday: string[];
}