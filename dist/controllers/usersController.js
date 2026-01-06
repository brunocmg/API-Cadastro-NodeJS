"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAllUsers = exports.deleteUser = exports.partialUpdate = exports.updateUser = exports.getUserById = exports.listUsers = exports.createUser = void 0;
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
const getUserById = async (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((u) => u.id === id);
    if (!user) {
        return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }
    res.json(user);
};
exports.getUserById = getUserById;
const updateUser = async (req, res) => {
    const id = Number(req.params.id);
    const { name, email } = req.body;
    const userIndex = users.findIndex((u) => u.id === id);
    if (userIndex === -1) {
        return res
            .status(400)
            .json({ mensagem: "Informe nome ou email para atualizar" });
    }
    if (name)
        users[userIndex].name = name;
    if (email)
        users[userIndex].email = email;
    res.json(users[userIndex]);
};
exports.updateUser = updateUser;
const partialUpdate = async (req, res) => {
    const id = Number(req.params.id);
    const userIndex = users.findIndex((u) => u.id === id);
    if (userIndex === -1) {
        return res
            .status(400)
            .json({ mensagem: "Informe nome ou email para atualizar" });
    }
    if (req.body.name)
        users[userIndex].name = req.body.name;
    if (req.body.email)
        users[userIndex].email = req.body.email;
    res.json(users[userIndex]);
};
exports.partialUpdate = partialUpdate;
const deleteUser = async (req, res) => {
    const id = Number(req.params.id);
    const userIndex = users.findIndex((u) => u.id === id);
    if (userIndex === -1) {
        return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }
    const deleted = users.splice(userIndex, 1)[0];
    res.json({ mensagem: "Usuário deletado", user: deleted });
};
exports.deleteUser = deleteUser;
const deleteAllUsers = async (req, res) => {
    const deletedCount = users.length;
    users = [];
    return res.json({ mensagem: "Todos os usuários foram deletados", deleted: deletedCount });
};
exports.deleteAllUsers = deleteAllUsers;
