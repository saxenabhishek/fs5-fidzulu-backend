require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const toysRouter = require('./src/routes/toysRoute');
const connection = require("./src/configs/db");

const app = express();
const port = process.env.PORT || 3036;
connection.getConnection();

app.use(bodyParser.json());
app.use(cors());
app.use(toysRouter);

app.get('/', toysRouter);

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
