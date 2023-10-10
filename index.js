require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const foodRouter = require('./src/routes/foodRoute');
const dvdRouter = require('./src/routes/dvdRoute');
const bikeRouter = require('./src/routes/bikeRoute');
const booksRouter = require('./src/routes/booksRoute');
const laptopRouter = require('./src/routes/laptopRoute');
const toysRouter = require('./src/routes/toysRoute');
const connection = require("./src/configs/db");

const app = express();
const port = process.env.PORT || 8080;
connection.getConnection();

app.use(bodyParser.json());
app.use(cors());
app.use(foodRouter);

app.get('/', foodRouter);

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
