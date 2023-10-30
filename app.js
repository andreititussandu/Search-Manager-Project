const express = require('express');
const axios = require('axios');
require('dotenv').config({ path: 'cheie.env' });

const app = express();
const port = 3000;
const BING_API_KEY = process.env.BING_SEARCH_API_KEY;

app.use(express.json());

app.get('/search', async (req, res) => {
    const { query } = req.query;
  
    if (!query) {
      return res.status(400).json({ error: 'Parameter "query" missing' });
    }
  
    try {
      const response = await axios.get('https://api.bing.microsoft.com/v7.0/search', {
        params: { q: query },
        headers: {
          'Ocp-Apim-Subscription-Key': BING_API_KEY
        }
      });
  
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch search results' });
    }
  });

app.listen(port, () => {
    console.log(`Serverul rulează la adresa http://localhost:${port}`);
  });
