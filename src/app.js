const express = require('express')
const app = express();
let bodyParser = require('body-parser');
const reunionRouter = require('./router/sallereunion');
const reservationRouter = require('./router/reservation')
let cors = require('cors')

require('dotenv').config()
const port = process.env.PORT;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); res.setHeader('Cross-origin-Embedder-Policy', 'require-corp');
  res.setHeader('Cross-origin-Opener-Policy', 'same-origin');
  if (req.method === 'OPTIONS') { res.sendStatus(200) }
  else { next() }
});

app.use(bodyParser.json());

app.use(reunionRouter);
app.use(reservationRouter);

app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});