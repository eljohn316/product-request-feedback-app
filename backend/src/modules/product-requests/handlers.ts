import { Request, Response } from 'express';

export const getAllProductRequestsHandler = async (req: Request, res: Response) => {
  res.json({
    requests: []
  });
};
