const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;


const corsOptions = {
  origin: ['http://localhost:4200', 'https://angular-weather-app-tau-fawn.vercel.app'],
  methods: 'GET', 
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};


app.use(cors(corsOptions));

app.get('/api/get-key', (req, res) => {
  const apiKey = process.env.API_KEY;
  res.json({ apiKey });
});

app.get('/api/cities/autocomplete/:cityName', async (req, res) => {
  let { cityName } = req.params;
  cityName = cityName.replace(':', '');

  try {
    const response = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?q=${cityName}&apikey=${process.env.API_KEY}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data from AccuWeather API:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Failed to fetch data from AccuWeather API' });
  }
});

app.get('/api/currentconditions/:cityKey', async (req, res) => {
  let { cityKey } = req.params;
  cityKey = cityKey.replace(':', '');
  try {
    const response = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${process.env.API_KEY}&details=true`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from AccuWeather API' });
  }
});

app.get('/api/forecasts/12hour/:cityKey', async (req, res) => {
  let { cityKey } = req.params;
  cityKey = cityKey.replace(':', '');
  try {
    const response = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${cityKey}?apikey=${process.env.API_KEY}&metric=true`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from AccuWeather API' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});