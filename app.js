const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/DB.js');

dotenv.config();
connectDB();

app.use(express.json());
app.get('/',(req,res)=>{
    res.send("User Management API");
});

module.exports = app