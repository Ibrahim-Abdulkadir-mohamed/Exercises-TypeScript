import { Request, Response } from "express";

interface GoodbyeRequest extends Request {
  query: {
    name: string;
  };
}

export const sayGoodbye = (req: GoodbyeRequest, res: Response) => {
  const name = req.query.name;
  res.status(200).json({ farewell: `Goodbye, ${name}` });
};