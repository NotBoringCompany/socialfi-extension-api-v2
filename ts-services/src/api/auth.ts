import { APIResponse, APIResponseStatus } from '../utils/api';
import { generateObjectID } from '../utils/crypto';
import { ExtendedXProfile } from '../utils/customProfiles';
import { UserModel } from '../utils/db';

/**
 * Handles the authentication process for logging via X.
 */
export const handleXAuth = async (
    xId: string, 
    xProfile?: ExtendedXProfile
): Promise<APIResponse> => {
    try {
        // search if the user already exists
        const user = await UserModel.findOne({ 'xProfile.xId': xId }).lean();

        // if user doesn't exist, create a new user instance
        if (!user) {
            const userObjectID = generateObjectID();
        }
    } catch (err: any) {
        return {
            status: APIResponseStatus.INTERNAL_SERVER_ERROR,
            message: `(handleXAuth) Error: ${err.message}`
        }
    }
}