require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const requestRoutes = require('./routes/request-routes');

app.use('/', requestRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
