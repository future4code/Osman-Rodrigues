import * as knex from 'knex';
import * as dotenv from 'dotenv';

import * as express from 'express';
import {AddressInfo} from 'net';

//Get .env variables
dotenv.config();

//Set DB connection
const connection = knex({
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  },
});

//Set api
const app = express();
//Set api middleware
app.use(express.json());

