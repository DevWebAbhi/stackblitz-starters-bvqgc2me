const express = require('express');
const { resolve } = require('path');
const mongoose = require("mongoose");

const app = express();
const port = 3010;

require("dotenv").config();

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, async() => {
  try {
    
    await mongoose.connect(process.env.MONGO_URI);
    console.log(" Connected to database")
    console.log(`Example app listening at http://localhost:${port}`);
  } catch (error) {
    console.log(error)
  }
  
});
