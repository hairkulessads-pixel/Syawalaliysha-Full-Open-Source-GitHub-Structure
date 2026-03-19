// ai.js

const express = require('express');
const openai = require('openai');

const router = express.Router();

// Initialize OpenAI API
const openaiApiKey = process.env.OPENAI_API_KEY;
const openaiClient = new openai.OpenAIApi({ apiKey: openaiApiKey });

// POST endpoint for AI code generation
router.post('/generate-code', async (req, res) => {
    const { prompt } = req.body;

    try {
        const response = await openaiClient.createCompletion({
            model: "code-davinci-002", // Specify the code generation model
            prompt,
            max_tokens: 150,
        });
        res.json({ code: response.choices[0].text.trim() });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to generate code' });
    }
});

module.exports = router;