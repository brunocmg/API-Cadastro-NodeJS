"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let users = [];
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
    }
    catch (err) {
        res.status(500).json({ mensagem: `Erro: ${err}` });
    }
});
router.get("/users", async (req, res) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    res.json(users);
});
exports.default = router;
