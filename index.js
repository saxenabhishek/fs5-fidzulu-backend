require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dvdRouter = require('./src/routes/dvdRoute');
const connection = require("./src/configs/db");

const app = express();
const port = process.env.PORT || 3035;
connection.getConnection();

app.use(bodyParser.json());
app.use(cors());
app.use(dvdRouter);

app.get('/', dvdRouter);

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
