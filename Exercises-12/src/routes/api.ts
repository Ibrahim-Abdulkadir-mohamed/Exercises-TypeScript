import express from "express";
import { LoginUser } from "../controllers/login";
import { getProducts } from "../controllers/ProductQuery";
import { updateProduct } from "../controllers/Products";
const router = express.Router();

router.post("/login", LoginUser);

router.get("/products", getProducts);

router.put("/products/:id", updateProduct);

export default router;