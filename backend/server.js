const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const products = require('./products')

const app = express();

const PORT = process.env.PORT || 6000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (request, response) => { response.send('Welcome...'); });
app.get('/products', (request, response) => { response.send('products...'); });

app.listen(PORT, () => { console.log(`Server Running on Port http://localhost:${PORT}`); });