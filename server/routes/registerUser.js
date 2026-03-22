import express from 'express';
import biometricRegister from '../controllers/biometricRegister.js';
const router = express.Router();

router.get('/biometric/register', biometricRegister);

export default router;