import mongoose from 'mongoose';
import { UserSchema } from '../schema/User';

import * as dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config({ 
    path: resolve(__dirname, '../../../.env')
});

const wonderbitsMongoURI = process.env.WONDERBITS_MONGODB_URI!;
const wonderverseMongoURI = process.env.WONDERVERSE_MONGODB_URI!;

export const WONDERBITS_CONNECTION = mongoose.createConnection(wonderbitsMongoURI);
export const WONDERVERSE_CONNECTION = mongoose.createConnection(wonderverseMongoURI);

WONDERBITS_CONNECTION.on('connected', () => {
    console.log('Connected to Wonderbits database');
});

WONDERBITS_CONNECTION.on('error', (err) => {
    console.error(`Error connecting to Wonderbits database: ${err}`);
});

WONDERVERSE_CONNECTION.on('connected', () => {
    console.log('Connected to Wonderverse database');
});

WONDERVERSE_CONNECTION.on('error', (err) => {
    console.error(`Error connecting to Wonderverse database: ${err}`);
});

export const UserModel = WONDERVERSE_CONNECTION.model('Users', UserSchema, 'Users');