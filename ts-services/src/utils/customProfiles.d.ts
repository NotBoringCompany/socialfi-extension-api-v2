import { Profile as XProfile } from '@superfaceai/passport-twitter-oauth2';

export interface ExtendedXProfile extends XProfile {
    photos?: {
        value: string;
    }[];
    twitterAccessToken: string;
    twitterRefreshToken: string;
    twitterExpiryDate: number;
}