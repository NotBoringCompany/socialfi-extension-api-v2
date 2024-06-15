/**
 * Represents an invite code's data used to play Wonderbits.
 */
export interface InviteCodeData {
    /** will be added here if the user signed up with a starter code */
    usedStarterCode: string | null,
    /** 
     * will be added here if the user either signed up with a referral code or added one later 
     */
    usedReferralCode: string | null,
    /** 
     * if a referral code is specified, the referrer will be added here.
     * 
     * this is the database ID of the user who referred the user to sign up
     */
    referrerId: string | null,
}