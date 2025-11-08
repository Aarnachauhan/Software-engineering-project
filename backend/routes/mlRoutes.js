// backend/routes/mlRoutes.js
import express from 'express';
import { getPrediction } from '../controllers/mlController.js';

const router = express.Router();

router.post('/predict', getPrediction);

export default router; // <-- ESM export
