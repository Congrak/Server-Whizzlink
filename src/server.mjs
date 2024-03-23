import { config } from 'dotenv';

config();

import pkg from 'express';
const express = pkg;

export const app = express();

app.set('port', process.env.PORT || 4000);

app.use(express.json());
