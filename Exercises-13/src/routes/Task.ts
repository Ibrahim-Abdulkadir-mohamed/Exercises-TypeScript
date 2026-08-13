import { Router } from "express";
import {
  handleCreateTask,
  handleGetAllTasks,
  handleGetTaskById,
  handleUpdateTask,
  handleDeleteTask,
} from "../controllers/Task.controller";

const router = Router();

router.post("/tasks", handleCreateTask); 
router.get("/tasks", handleGetAllTasks); 
router.get("/tasks/:id", handleGetTaskById); 
router.patch("/tasks/:id", handleUpdateTask);
router.delete("/tasks/:id", handleDeleteTask)

export default router;