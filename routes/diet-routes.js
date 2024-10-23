const express = require('express');
const router = express.Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const API_KEY = process.env.GOOGLE_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

//Analyze the goal of the diet: loose, gain, maintain


//Analyze the difficulty level of the diet


//Analyze the calorie defficit required



module.exports = router;
