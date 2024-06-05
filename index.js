const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// app.use(cors({
//   origin: 'https://your-frontend-domain.com' // Substitua pelo domínio do seu frontend
// }));

app.get('/api/get-key', (req, res) => {
  const apiKey = process.env.API_KEY;
  res.json({ apiKey });
});

app.get('/api/get-weather', (req, res) => {
  const apiKey = process.env.API_KEY;
  // Faça a chamada à API da Accuweather aqui e envie a resposta de volta
  // Você pode usar fetch ou axios para fazer essa requisição
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port} - Chave da API: ${process.env.API_KEY}`);
});