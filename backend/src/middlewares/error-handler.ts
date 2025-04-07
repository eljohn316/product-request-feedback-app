import { Request, Response, NextFunction } from 'express';
import { NotFoundError } from '@/utils/errors';

const errorHandlerMiddleware = async (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof NotFoundError) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  res.status(500).json({ error: 'Something went wrong' });
};

export default errorHandlerMiddleware;
