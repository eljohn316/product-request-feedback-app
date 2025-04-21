import { Router } from 'express';
import * as validations from '@/modules/reply/validations';
import * as handlers from '@/modules/reply/handlers';

const router = Router();

router.post(
  '/',
  validations.addProductRequestCommentReplyValidations,
  handlers.addProductRequestCommentReplyHandler
);

export default router;
