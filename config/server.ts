import * as dotenv from 'dotenv';

dotenv.config();

const {
  PORT,
  DATABASE_URL,
} = process.env;

export default {
  port: PORT || 3000,
  connectionUrl: DATABASE_URL,
}