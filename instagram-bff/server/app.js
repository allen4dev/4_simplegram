const express = require('express');

const appMiddleware = require('./middlewares/appMiddleware');
const errorHandlerMiddleware = require('./middlewares/errorHandlerMiddleware');

const app = express();

app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');

appMiddleware(app);

app.get('/', (req, res, next) => {
  // res.render('index', { title: 'BFF simple starter' });
  next(new Error('Something goes wrong'));
});

app.use(errorHandlerMiddleware);

module.exports = app;
