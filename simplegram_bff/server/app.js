const { join } = require('path');
const express = require('express');

const router = require('./router');
const helpers = require('./utils/helpers');

const appMiddleware = require('./middlewares/appMiddleware');
const errorHandlerMiddleware = require('./middlewares/errorHandlerMiddleware');

const app = express();

app.use(express.static(join(__dirname, 'public')));

app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');

appMiddleware(app);

app.use((req, res, next) => {
  res.locals.h = helpers;
  res.locals.user = req.user || null;
  next();
});

app.use('/', router);

app.use(errorHandlerMiddleware);

module.exports = app;
