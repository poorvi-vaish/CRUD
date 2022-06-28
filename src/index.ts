import express from 'express';
import cors from 'cors';
import router from './routes'
import { Request, Response, NextFunction } from 'express';
import connect from './database';


const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const start = async () => {
  await connect();
  app.use('/', router);

  app.use((err:Error, req:Request, res:Response, next:NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ error: true, message: 'Internal Server Error' });
  });

  app.listen(8080, function () {
    console.log('server started on port 8080');
  });
};

start();
