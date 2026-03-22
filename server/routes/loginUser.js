import express from 'express';
import loginUser from '../controllers/loginUser';

const router = express.Router();

app.post('/login', loginUser);

export default router;