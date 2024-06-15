import { Inventory } from './wonderbits/inventory';
import { WalletData } from './web3';
import { InGameData } from './wonderbits/inGame';

/**
 * Represents a user's account data for Wonderverse.
 */
export interface User {
    /** the user's unique database ID */
    userId: string;
    /** the user's X (formerly twitter) account profile data */
    xProfile: XProfile;
    /** the user's discord profile (if their discord account is linked) */
    discordProfile?: DiscordProfile;
    /** when the account was created */
    createdTimestamp: number;
    /** the user's wallet data, created when the user signs up for the first time */
    walletData: WalletData;
    /** the user's in-game data for Wonderbits */
    inGameData: InGameData;
}

/**
 * Represents the user's X account profile data connected to the user's account.
 */
export interface XProfile {
    /** the user's X ID */
    xId: string;
    /** the user's X username */
    xUsername: string;
    /** the user's X display name */
    xDisplayName: string;
    /** the user's X picture URL */
    xProfilePicture: string;
}

/**
 * Represents a user's discord profile.
 */
export interface DiscordProfile {
    /** the user's unique discord ID */
    discordId: string;
    /** the user's discord display name */
    displayName: string | null;
    /** the user's discord username */
    username: string;
    /** the unique refresh token obtained from discord's oauth, lasts 365 days */
    refreshToken: string;
}