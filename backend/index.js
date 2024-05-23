const express = require('express');
const path = require('path');
const cors = require('cors');
const router = require('./routes/router');
const connectDB = require('./db/db');

const PORT = 3000;

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/v1/video/', router);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});