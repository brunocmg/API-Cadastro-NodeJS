"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listUsers = exports.createUser = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
let users = [];
const createUser = async (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ mensagem: "Precisa preencher nome e email" });
    }
    const newUser = { id: users.length + 1, name, email };
    await new Promise((resolve) => setTimeout(resolve, 500));
    users.push(newUser);
    res.status(201).json(newUser);
};
exports.createUser = createUser;
const listUsers = async (req, res) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    res.json(users);
};
exports.listUsers = listUsers;
