import CryptoJS from 'crypto-js';

/**
 * Generates a random object ID for MongoDB documents.
 */
export const generateObjectID = (): string => {
    return CryptoJS.enc.Hex.stringify(CryptoJS.lib.WordArray.random(16));
}