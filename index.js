const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// const corsOptions = {
//   origin: ['https://angular-weather-app-tau-fawn.vercel.app', 'http://localhost:4200']
// };

app.use(cors());

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