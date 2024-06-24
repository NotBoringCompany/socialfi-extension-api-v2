import mongoose, { Schema } from 'mongoose';

/**
 * User schema for Wonderverse. Schema representation of the `User` interface in `models/user.ts`.
 */
export const UserSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    xProfile: {
        xId: String,
        xUsername: String,
        xDisplayName: String,
        xProfilePicture: String
    },
    discordProfile: {
        discordId: String,
        displayName: String,
        username: String,
        refreshToken: String
    },
    createdTimestamp: Number,
    walletData: {
        mainWallet: {
            address: String,
            privateKey: String
        },
        secondaryWallet: [{
            address: String,
            signatureMessage: String,
            signature: String
        }]
    },
    wonderbitsData: {
        inventory: {
            weight: Number,
            maxWeight: Number,
            xBitBerryData: {
                currentXBitBerries: Number,
                totalXBitBerriesSpent: Number,
                weeklyXBitBerriesSpent: Number,
                extendedXBitBerryData: [{
                    amount: Number,
                    source: String
                }]
            },
            resources: [{
                type: String,
                amount: Number
            }],
            items: [{
                type: String,
                amount: Number,
                totalAmountConsumed: Number,
                weeklyAmountConsumed: Number
            }],
            raftId: Number,
            islandIds: [Number],
            bitIds: [Number]
        },
        level: Number,
        tutorialData: {
            completedTutorialIds: [Number],
        },
        rewardData: {
            beginnerRewardData: {
                lastClaimedTimestamp: Number,
                isClaimable: Boolean,
                daysClaimed: [Number],
                daysMissed: [Number]
            },
            dailyLoginRewardData: {
                lastClaimedTimestamp: Number,
                isDailyClaimable: Boolean,
                consecutiveDaysClaimed: Number
            }
        },
        squadData: {
            squadId: { type: Schema.Types.Mixed },
            lastLeftSquad: Number,
        },
        poiData: {
            location: String,
            travellingTo: { type: Schema.Types.Mixed },
            destinationArrival: Number,
        },
        inviteCodeData: {
            usedStarterCode: { type: Schema.Types.Mixed },
            usedReferralCode: { type: Schema.Types.Mixed },
            referrerId: { type: Schema.Types.Mixed },
        },
        referralData: {
            referralCode: String,
            referredUsersData: [{
                userId: String,
                username: String,
                referredTimestamp: Number,
                minLevelReached: Boolean
            }],
            claimableReferralRewards: [{
                type: String,
                amount: Number
            }]
        },
        openedPostIdsToday: [String]
    }
})