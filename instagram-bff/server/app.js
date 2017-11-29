const express = require('express');

const router = require('./router');

const appMiddleware = require('./middlewares/appMiddleware');
const errorHandlerMiddleware = require('./middlewares/errorHandlerMiddleware');

const app = express();

app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');

appMiddleware(app);

app.use('/', router);

app.use(errorHandlerMiddleware);

module.exports = app;
