import express from "express";
import { getTodos, createTodo, updateTodo, getTodoById, deleteTodo } from "../controller/todos.controller.js";

const router = express.Router();

router.get("/", getTodos);
router.post("/", createTodo);
router.put("/:id", updateTodo);
router.get("/:id", getTodoById);
router.delete("/:id", deleteTodo);

export default router;