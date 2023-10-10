require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');






const foodRouter = require('./src/routes/foodRoute');
const dvdRouter = require('./src/routes/dvdRoute');
const bikeRouter = require('./src/routes/bikeRoute');
const booksRouter = require('./src/routes/booksRoute');
const laptopRouter = require('./src/routes/laptopRoute');
const toysRouter = require('./src/routes/toysRoute');


const app = express();
app.use('/foodRoute',foodRouter);
app.get('/', (req, res) => {
  res.json({'message': 'ok'});
})
/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({'message': err.message});
  
  return;
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:8080}`)
});
