import { Router, Request, Response } from "express";
import { User } from "../models/user";
const router = Router();

let users: User[] = [];

export const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ mensagem: "Precisa preencher nome e email" });
  }
  const newUser: User = { id: users.length + 1, name, email };
  await new Promise((resolve) => setTimeout(resolve, 500));
  users.push(newUser);
  res.status(201).json(newUser);
};

export const listUsers = async (req: Request, res: Response) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  res.json(users);
};

export const getUserById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const user = users.find((u) => u.id === id);
  if (!user) {
    return res.status(404).json({ mensagem: "Usuário não encontrado" });
  }
  res.json(user);
};

export const updateUser = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { name, email } = req.body;
  const userIndex = users.findIndex((u) => u.id === id);
  if (userIndex === -1) {
    return res
      .status(400)
      .json({ mensagem: "Informe nome ou email para atualizar" });
  }
  if (name) users[userIndex].name = name;
  if (email) users[userIndex].email = email;
  res.json(users[userIndex]);
};

export const partialUpdate = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const userIndex = users.findIndex((u) => u.id === id);
  if (userIndex === -1) {
    return res
      .status(400)
      .json({ mensagem: "Informe nome ou email para atualizar" });
  }

  if (req.body.name) users[userIndex].name = req.body.name;
  if (req.body.email) users[userIndex].email = req.body.email;

  res.json(users[userIndex]);
};

export const deleteUser = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const userIndex = users.findIndex((u) => u.id === id);
  if (userIndex === -1) {
    return res.status(404).json({ mensagem: "Usuário não encontrado" });
  }
  const deleted = users.splice(userIndex, 1)[0];
  res.json({ mensagem: "Usuário deletado", user: deleted });
};

export const deleteAllUsers = async (req: Request, res: Response) => {
  const deletedCount = users.length;
  users = [];
  return res.json({ mensagem: "Todos os usuários foram deletados", deleted: deletedCount });
};
