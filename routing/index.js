/** Module import */
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

/** File import */
import AuthRoute from './AuthRoute.js';

/** App */
const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

/**default route, mainly for browser */
router.get('/', (req, res) => {
  res.sendFile(path.join(rootDir + '/app/view/index.html'));
});

/** other routes */
router.use('/auth', AuthRoute);

export default router;
