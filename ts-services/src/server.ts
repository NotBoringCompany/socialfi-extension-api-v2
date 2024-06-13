import express from 'express';
import * as dotenv from 'dotenv';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(port, async () => {
    console.log(`Server running on port ${port}`);
})

export default app;