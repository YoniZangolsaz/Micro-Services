import express from 'express';
// import trainerRouter from './trainer.router';
import morgan from 'morgan';
import classRouter from './class.router';

const app = express();
app.use(morgan('dev'));
// app.use('/api/service2/trainer', trainerRouter);
app.use('/api/service2/class', classRouter);

app.listen(3020, () => {
  console.log('listening to port 3020');
});
