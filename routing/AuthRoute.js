/** Module import */
import express from 'express';

/** Controller */
import {login} from '../app/controller/AuthController.js';

/** App */
const router = express.Router();

router.post('/login', (req, res) => {
  res.send(login(req.body))
});
router.get('/signup', (req, res) => {
  console.log('signup route');
});
router.get('/forget-password', (req, res) => {
  console.log('forget password route');
});

export default router;
