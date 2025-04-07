import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';

import router from '@/router';
import errorHandlerMiddleware from '@/middlewares/error-handler';

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', router);

app.use(errorHandlerMiddleware);

export default app;
