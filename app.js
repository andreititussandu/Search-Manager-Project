const express = require('express');
const axios = require('axios');
const { User} = require('./models/User'); // Importă modelele
const {Result} = require('./models/Result');
require('dotenv').config({ path: 'cheie.env' });

const app = express();
const port = 3000;
const BING_API_KEY = process.env.BING_SEARCH_API_KEY;

app.use(express.json());

// Definirea relației părinte-copil între User și Result
User.hasMany(Result);
Result.belongsTo(User);

app.get('/search', async (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: 'Parameter "query" missing' });
  }

  try {
    const response = await axios.get('https://api.bing.microsoft.com/v7.0/search', {
      params: { q: query },
      headers: {
        'Ocp-Apim-Subscription-Key': BING_API_KEY,
      },
    });

    // Salvează rezultatele în baza de date asociate utilizatorului
    const user = await User.create({ name: 'Nume Utilizator' });
    const results = await Result.bulkCreate(response.data.webPages.value.map((item) => ({ content: item.url, UserId: user.id })));

    res.json(results);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch search results' });
  }
});

// Sincronizare cu baza de date și pornirea serverului
async function startServer() {
  try {
    await User.sync();
    await Result.sync();
    console.log('Tabele sincronizate cu succes.');

    app.listen(port, () => {
      console.log(`Serverul rulează la adresa http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Eroare la sincronizarea cu baza de date:', error);
  }
}

startServer();
