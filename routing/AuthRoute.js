/** Module import */
import express from 'express';

/** App */
const router = express.Router();

router.get('/login', (req, res) => {
  console.log('login route');
});
router.get('/signup', (req, res) => {
  console.log('signup route');
});
router.get('/forget-password', (req, res) => {
  console.log('forget password route');
});

export default router;
