import { Router } from 'express';

import productRequestsRouter from '@/modules/product-requests';
import commentsRouter from '@/modules/comments';

const router = Router();

router.use('/product-requests', productRequestsRouter);
router.use('/comments', commentsRouter);

export default router;
