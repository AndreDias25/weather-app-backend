const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// const corsOptions = {
//   origin: ['https://angular-weather-app-tau-fawn.vercel.app', 'http://localhost:4200']
// };

const options = [
  cors({
    origin: ['http://localhost:4200', 'https://angular-weather-app-tau-fawn.vercel.app'], // Permitir as origens 'http://localhost:4200' e 'https://angular-weather-app-tau-fawn.vercel.app'
    methods: 'GET', // Permitir apenas o método GET
    allowedHeaders: ['Content-Type', 'Authorization'], // Permitir apenas esses cabeçalhos
    credentials: true, // Permitir credenciais
  })
];

app.use(options);

app.get('/api/get-key', (req, res) => {
  const apiKey = process.env.API_KEY;
  res.json({ apiKey });
});

// app.get('/api/get-weather', (req, res) => {
//   const apiKey = process.env.API_KEY;
  
// });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port} - Chave da API: ${process.env.API_KEY}`);
});