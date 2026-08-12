import { Request, Response } from "express";
import { LoginBody } from "../types/Login";
export const LoginUser = (req: Request<{}, {}, LoginBody>, res: Response) => {
  const { email, password } = req.body;

  if ( !email || !password) {
    return res.status(400).json({ message: "All fields required" });
  }

  return res.status(201).json({
    message: `User ${email} registered successfully!`,
  });
};
