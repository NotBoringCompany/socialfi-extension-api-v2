import express from 'express';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import passport from 'passport';
import cors from 'cors';
import session from 'express-session';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const mongoUri = process.env.MONGO_URI!;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors()); // temporarily allowing all cors requests

// memory store for session management
app.use(session({
    secret: process.env.SESSION_SECRET!,
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session());

app.listen(port, async () => {
    console.log(`Server running on port ${port}`);

    await mongoose.connect(mongoUri);
});