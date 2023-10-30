const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = 3000;
const BING_API_KEY = process.env.BING_SEARCH_API_KEY;

app.use(express.json());



app.listen(port, () => {
    console.log(`Serverul rulează la adresa http://localhost:${port}`);
  });
