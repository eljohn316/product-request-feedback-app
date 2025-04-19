import { Router } from 'express';
import * as handlers from '@/modules/product-requests/handlers';
import * as validations from '@/modules/product-requests/validations';

const router = Router();

router.get(
  '/',
  validations.getAllProductRequestsValidations,
  handlers.getAllProductRequestsHandler
);
router.get('/roadmap', handlers.getProductRequestsRoadmapHandler);
router.get('/roadmap-stats', handlers.getProductRequestsRoadmapStatsHandler);
router.get(
  '/:productId',
  validations.getProductRequestValidations,
  handlers.getProductRequestHandler
);
router.post(
  '/',
  validations.createNewProductRequestValidations,
  handlers.createNewProductRequestHandler
);
router.patch(
  '/:productId',
  validations.updateProductRequestValidations,
  handlers.updateProductRequestHandler
);

export default router;
