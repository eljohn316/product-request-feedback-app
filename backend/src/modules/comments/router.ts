import { Router } from 'express';
import * as validations from '@/modules/comments/validations';
import * as handlers from '@/modules/comments/handlers';

const router = Router();

router.get(
  '/:productId',
  validations.getProductRequestCommentsValidations,
  handlers.getProductRequestCommentsHandler
);

export default router;
