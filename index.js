/** Module import */
import express from 'express';
import cluster from 'cluster';
import { cpus } from 'os';
import { config } from 'dotenv';

/** File import */
import rootRouting from './routing/index.js';

/** App */
const cpuCount = cpus().length;
config();
if (cluster.isPrimary) {
  for (let i = 0; i < cpuCount; i++) {
    cluster.fork();
  }
} else {
  const app = express();
  const port = process.env.PORT;
  app.listen(port, () => {
    console.log(`Express running as localhost:${port}`);
    app.use('/', rootRouting);
  });
}
