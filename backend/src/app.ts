import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import router from '@/router';

const app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', router);

export default app;
