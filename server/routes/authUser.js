import express from 'express';
import biometricAuth from '../controllers/biometricAuth.js';

const router = express.Router();

router.get('/biometric/auth', biometricAuth);

export default router;