const express = require('express');
const axios = require('axios');
const Result = require('../database/models/Result');


const resultRouter = express.Router();

resultRouter.get('/search', async (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: 'Parameter "query" missing' });
  }

  try {
    if (req.user) {
      console.log('User:', req.user);
      const user = req.user;
      const response = await axios.get('https://api.bing.microsoft.com/v7.0/search', {
        params: { q: query },
        headers: {
          'Ocp-Apim-Subscription-Key': process.env.BING_API_KEY,
        },
      });
      //console.log('Bing API Response:', response.data);


      const results = await Result.bulkCreate(response.data.webPages.value.map((item) => ({
        title: item.name,
        content: item.url,
      })));
      res.json(results);
    } else {
      res.status(401).json({ error: 'User not authenticated' });
    }
  } catch (error) {
    console.error('Error in API request:', error);
    res.status(500).json({ error: 'Failed to fetch search results' });
  }
});

module.exports = resultRouter;