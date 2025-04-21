import { body } from 'express-validator';
import { validationResultHandler } from '@/middlewares/validation-handler';

export const addProductRequestCommentReplyValidations = [
  body('content').exists({ values: 'falsy' }).withMessage('Content is required'),
  body('replyingTo').exists({ values: 'falsy' }).withMessage('Replying to is required'),
  body('commentId').exists({ values: 'falsy' }).withMessage('Comment id is required'),
  validationResultHandler
];
