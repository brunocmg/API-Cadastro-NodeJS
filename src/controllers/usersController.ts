import { Router, Request, Response } from "express";
const router = Router();

let users: User[] = [];

export const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ mensagem: "Precisa preencher nome e email" });
  }
  const newUser = { id: users.length + 1, name, email };
  await new Promise((resolve) => setTimeout(resolve, 500));
  users.push(newUser);
  res.status(201).json(newUser);
};

export const listUsers = async (req: Request, res: Response) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  res.json(users);
};
