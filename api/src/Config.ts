import { config } from 'dotenv';
config()

export const mongoDBURL = process.env.MONGODB_URL?process.env.MONGODB_URL:''
export const port=process.env.PORT?+process.env.PORT:3001