import express from 'express';
import morgan from 'morgan';
import trainerRouter from './trainer.router';
import classRouter from './class.router';

const bodyParser = require('body-parser');

const app = express();
const port = 3020;
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/api/service2/trainer', trainerRouter);
app.use('/api/service2/class', classRouter);

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
