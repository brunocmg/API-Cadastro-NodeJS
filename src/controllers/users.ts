import { Router, Request, Response } from "express";
const router = Router();

interface User {
  id: number;
  nome: string;
  email: string;
}

let users: User[] = [];

router.post("/users", async (req, res) => {
  try {
    const { nome, email } = req.body;

    if (!nome || !email) {
      return res
        .status(400)
        .json({ mensagem: "Precisa preencher nome e email!" });
    }

    const newUser = { id: users.length + 1, nome, email };

    await new Promise((resolve) => setTimeout(resolve, 500));

    users.push(newUser);

    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ mensagem: `Erro: ${err}` });
  }
});

router.get("/users", async (req, res) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  res.json(users);
});

export default router;
