import { Router } from 'express';
import * as validations from '@/modules/comments/validations';
import * as handlers from '@/modules/comments/handlers';

const router = Router();

router.get(
  '/:productId',
  validations.getProductRequestCommentsValidations,
  handlers.getProductRequestCommentsHandler
);
router.post(
  '/:productId',
  validations.addProductRequestCommentsValidations,
  handlers.addProductRequestCommentsHandler
);

export default router;
