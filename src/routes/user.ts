import { Router } from "express";
import {
  createUser,
  listUsers,
  getUserById,
  updateUser,
  partialUpdate,
  deleteUser,
} from "../controllers/usersController";

const router = Router();

router.post("/users", createUser);
router.get("/users", listUsers);
router.get("/users/:id", getUserById);
router.put("/users/:id", updateUser);
router.patch("/users/:id", partialUpdate);
router.delete("/users/:id", deleteUser);

export default router;
