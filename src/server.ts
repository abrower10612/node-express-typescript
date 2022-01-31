import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app: Application = express();

app.use(cors());
app.use(express.json());

const port: string | number = process.env.PORT || 5000;

app.listen(port, () => console.log(`listening on port ${port} 🔥`));