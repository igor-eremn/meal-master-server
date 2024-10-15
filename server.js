require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const requestRoutes = require('./routes/request-routes');

app.use('/', requestRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
