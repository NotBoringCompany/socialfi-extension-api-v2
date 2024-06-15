/**
 * Represents a user's squad data for Wonderbits.
 */
export interface UserSquadData {
    /** the id of the user's current squad. if the user is not in any squad, this will be null. */
    squadId: string | null;
    /** the timestamp of when the user last left a squad (for cooldown purposes) */
    lastLeftSquad: number;
}