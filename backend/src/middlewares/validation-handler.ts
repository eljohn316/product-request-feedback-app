import { Request, Response, NextFunction } from 'express';
import { validationResult, Result, FieldValidationError } from 'express-validator';

export const validationResultHandler = async (req: Request, res: Response, next: NextFunction) => {
  const result: Result = validationResult(req);

  if (result.isEmpty()) return next();

  const errors = Object.fromEntries(
    result.array().map((err: FieldValidationError) => [err.path, err.msg])
  );

  res.status(400).json({
    ...errors
  });
};
