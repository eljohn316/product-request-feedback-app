import { param } from 'express-validator';

export const getProductRequestCommentsValidations = [
  param('productId').exists().withMessage("Missing required parameter: 'productId'")
];
