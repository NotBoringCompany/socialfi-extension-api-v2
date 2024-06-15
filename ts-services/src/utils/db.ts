import mongoose from 'mongoose';

const wonderbitsMongoURI = process.env.WONDERBITS_MONGO_URI!;
const wonderverseMongoURI = process.env.WONDERVERSE_MONGO_URI!;

const wonderbitsConnection = mongoose.createConnection(wonderbitsMongoURI);
const wonderverseConnection = mongoose.createConnection(wonderverseMongoURI);

export const UserModel = wonderverseConnection.model('Users', UserSchema, 'Users');