import { Router } from 'express';
import * as handlers from './handlers';

const router = Router();

router.get('/', handlers.getAllProductRequestsHandler);

export default router;
