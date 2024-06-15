import { Profile as TwitterProfile } from '@superfaceai/passport-twitter-oauth2';

export interface ExtendedTwitterProfile extends TwitterProfile {
    photos?: {
        value: string;
    }[];
    twitterAccessToken: string;
    twitterRefreshToken: string;
    twitterExpiryDate: number;
}