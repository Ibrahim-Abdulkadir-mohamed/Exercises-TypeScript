import { Request, Response } from "express";

interface ProductParams {
  id: string;
}

interface ProductBody {
  name: string;
  price: number;
}

export const updateProduct = (req: Request<ProductParams, {}, ProductBody>, res: Response) => {
  const { id } = req.params;
  const { name, price } = req.body;

  console.log(`Updating product ID: ${id}, Name: ${name}, Price: ${price}`);

  res.status(200).json({
    message: "Product updated successfully",
    id,
    name,
    price,
  });
};