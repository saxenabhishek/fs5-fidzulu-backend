require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const laptopRouter = require('./src/routes/laptopRoute');
const connection = require("./src/configs/db");

const app = express();
const port = 3036;
connection.getConnection();

app.use(bodyParser.json());
app.use(cors());

app.use(laptopRouter);
app.get('/', laptopRouter);

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
