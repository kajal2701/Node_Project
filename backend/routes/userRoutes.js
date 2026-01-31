import express from "express";
import {
  getUsers,
  addUser,
  deleteUser,
  updateUser,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/users", getUsers);
router.post("/create-user", addUser);
router.delete("/delete-User/:id", deleteUser);
router.patch("/update-user", updateUser);

export default router;
