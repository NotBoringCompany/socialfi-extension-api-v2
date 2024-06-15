/**
 * Represents a user's wallet data, containing the main wallet generated upon registration and secondary wallets linked to the user's account.
 */
export interface WalletData {
    /** the user's main wallet */
    mainWallet: MainWallet;
    /** a list of secondary wallets linked to the user's account */
    secondaryWallets?: SecondaryWallet[];
}

/**
 * Represents a user's main wallet generated upon registration.
 */
export interface MainWallet {
    /** the wallet's address */
    address: string;
    /** the wallet's private key */
    privateKey: string;
}

/**
 * Represents a user's secondary wallet that they can link to their account.
 */
export interface SecondaryWallet {
    /** the secondary wallet's address */
    address: string;
    /** the message used to generate the signature for verification */
    signatureMessage: string;
    /** the signature of the user from the secondary wallet, showing ownership of the wallet */
    signature: string;
}