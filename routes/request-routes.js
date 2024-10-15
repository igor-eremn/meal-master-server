const express = require('express');
const router = express.Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const API_KEY = process.env.GOOGLE_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

// Test prompt
router.get('/generate-default', async (req, res) => {
  try {
    const model = await genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = "Tell me what food is great for losing weight.";

    const result = await model.generateContent(prompt);
    console.log("🚀 ~ router.get ~ result:", result);
    res.json({ response: result.response.text() });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate content', details: error.message });
  }
});

// Custom prompt
router.post('/generate-custom', async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    const model = await genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    console.log("🚀 ~ router.post ~ result:", result)
    res.json({ response: result.response.text() });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate content', details: error.message });
  }
});

module.exports = router;
