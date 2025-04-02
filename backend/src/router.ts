import { Router } from 'express';

import productRequestsRouter from '@/modules/product-requests';

const router = Router();

router.use('/product-requests', productRequestsRouter);

export default router;
