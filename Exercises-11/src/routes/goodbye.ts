import express from "express";
import { sayGoodbye } from "../controllers/goodbye";

const router = express.Router();

router.get("/", sayGoodbye);

export default router;