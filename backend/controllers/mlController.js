// backend/controllers/mlController.js
import axios from 'axios'; // ✅ use import instead of require

export const getPrediction = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ error: 'Text input is required' });
    }

    // Send data to Flask ML API
    const response = await axios.post('http://127.0.0.1:5000/predict', { text });

    // Return prediction to frontend
    res.json({ prediction: response.data.prediction });

  } catch (error) {
    console.error('Error connecting to ML API:', error.message);
    res.status(500).json({ error: 'Failed to get prediction' });
  }
};
