const express = require('express');
const axios = require('axios');
const connectDB = require('./config/db.js');
const dotenv = require('dotenv');
const app = express();
app.use(express.json());
dotenv.config();

connectDB();

app.get('/test', function(req ,res){
    res.json({"res":"ok"});
});

const PORT = 5000;
app.listen(PORT, console.log(`server is running on port ${PORT}`))