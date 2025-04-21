import { Router } from 'express';

import productRequestsRouter from '@/modules/product-requests';
import commentsRouter from '@/modules/comments';
import replyRouter from '@/modules/reply';

const router = Router();

router.use('/product-requests', productRequestsRouter);
router.use('/comments', commentsRouter);
router.use('/reply', replyRouter);

export default router;
