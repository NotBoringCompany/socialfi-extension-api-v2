import mongoose from 'mongoose';
import { UserSchema } from '../schema/User';
import * as dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config({ 
    path: resolve(__dirname, '../../../.env')
});

const wonderbitsMongoURI = process.env.WONDERBITS_MONGODB_URI!;
const wonderverseMongoURI = process.env.WONDERVERSE_MONGODB_URI!;

const wonderbitsConnection = mongoose.createConnection(wonderbitsMongoURI);
const wonderverseConnection = mongoose.createConnection(wonderverseMongoURI);

wonderbitsConnection.on('connected', () => {
    console.log('Connected to Wonderbits database');
});

wonderbitsConnection.on('error', (err) => {
    console.error(`Error connecting to Wonderbits database: ${err}`);
});

wonderverseConnection.on('connected', () => {
    console.log('Connected to Wonderverse database');
});

wonderverseConnection.on('error', (err) => {
    console.error(`Error connecting to Wonderverse database: ${err}`);
});

export const UserModel = wonderverseConnection.model('Users', UserSchema, 'Users');