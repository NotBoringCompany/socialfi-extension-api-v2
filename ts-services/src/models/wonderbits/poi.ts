/**
 * Represents a user's POI (point of interest)-related data for Wonderbits.
 */
export interface UserPOIData {
    /** the current location of the user (either home or in a POI) */
    location: POIName;
    /** 
     * checks if the user is currently travelling to another POI 
     * 
     * if not null, this means that the user is currently travelling to another POI.
     */
    travellingTo: POIName | null;
    /** 
     * the arrival time of the destination at `travellingTo`
     * 
     * value will be 0 if not travelling (i.e. if travellingTo is null)
     */
    destinationArrival: number;
}

/**
 * Lists all POI names.
 */
export enum POIName {
    HOME = 'Home',
    EVERGREEN_VILLAGE = 'Evergreen Village',
    PALMSHADE_VILLAGE = 'Palmshade Village',
    SEABREEZE_HARBOR = 'Seabreeze Harbor',
    STARFALL_SANCTUARY = 'Starfall Sanctuary',
}