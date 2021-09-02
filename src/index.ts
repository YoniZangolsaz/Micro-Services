import * as config from './config';

import express from 'express';
import morgan from 'morgan';
import trainerRouter from './trainer.router';
import classRouter from './class.router';

const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/api/service2/trainer', trainerRouter);
app.use('/api/service2/class', classRouter);

app.listen(config.PORT, () => {
  console.log(`listening to port ${config.PORT}`);
});
