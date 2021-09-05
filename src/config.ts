import * as dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 3020;
export const APP = process.env.APP || 'app';
export const PORTApp = process.env.PORTApp || 3010;
