const express = require('express');
const router = express.Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const API_KEY = process.env.GOOGLE_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

//Provide list of food(general suggestion)


//Provide foods for different times of day


//Provide meals for suggested diet



module.exports = router;
