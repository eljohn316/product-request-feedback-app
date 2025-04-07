import { Router } from 'express';
import * as handlers from '@/modules/product-requests/handlers';
import * as validations from '@/modules/product-requests/validations';

const router = Router();

router.get(
  '/',
  validations.getAllProductRequestsValidations,
  handlers.getAllProductRequestsHandler
);
router.get(
  '/:productId',
  validations.getProductRequestValidations,
  handlers.getProductRequestHandler
);

export default router;
