require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const booksRouter = require('./src/routes/booksRoute');
const connection = require("./src/configs/db");

const app = express();
const port = process.env.PORT || 8080;
connection.getConnection();

app.use(bodyParser.json());
app.use(cors());
app.use(booksRouter);

// app.get('/', foodRouter);
app.get('/',booksRouter);

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
