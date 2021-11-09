'use strict';

const express = require('express');
const app = express();

const cors = require('cors');

const PORT =process.env.PORT || 3000 ;

const morgan = require('morgan');

const logger = require('./middleware/logger');

const v1Routes = require('./routes/v1');
const v2Routes = require('./routes/v2');
const authRoutes = require('./routes/routes');

const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(morgan('dev'));

app.use(logger);

app.use('/api/v1', v1Routes);
app.use('/api/v2', v2Routes);
app.use(authRoutes);

app.use(errorHandler);
app.use('*', notFoundHandler);


module.exports = {
  server: app,
  start: port => {
    if (!port) { throw new Error('Missing Port'); }
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};