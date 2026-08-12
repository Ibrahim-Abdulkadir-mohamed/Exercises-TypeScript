import { Request, Response } from "express";

interface ProductQuery {
  page?: string;
  limit?: string;
}

export const getProducts = (req: Request<{}, {}, {}, ProductQuery>, res: Response) => {
  const page = req.query.page || "1";
  const limit = req.query.limit || "10";

  res.status(200).send(`Page ${page} with ${limit} items`);
};