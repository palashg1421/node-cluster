import express from 'express';
import cluster from 'cluster';
import { cpus } from 'os';
import { config } from 'dotenv';
import mongoose from 'mongoose';

import rootRouting from './routing/index.js';

const cpuCount = 1 //cpus().length;
config();

if (cluster.isPrimary) {
  for (let i = 0; i < cpuCount; i++)
    cluster.fork();
} else {
  const app = express();
  const port = process.env.PORT;
  const connection_string = process.env.DBCON

  app.listen(port, () => {
    mongoose.connect(connection_string).then(() => {
      console.log(`Application connected with MongoDB and running @ localhost:${port}`);
      app.use(express.json());
      app.use(express.urlencoded({ extended: true }));
      app.use('/', rootRouting);
    }).catch((err) => {
      console.log(`Unable to connect with database: ${err}`);
    });

  });
}
