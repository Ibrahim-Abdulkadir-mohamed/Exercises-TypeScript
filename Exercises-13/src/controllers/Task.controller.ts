import { Request, Response } from "express";
import {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
  CreateTaskInput,
  UpdateTaskInput,
} from "../services/Task.services";

//  1: POST 
export async function handleCreateTask(
  req: Request<{}, {}, CreateTaskInput>,
  res: Response
) {
  try {
    const task = await createTask(req.body);
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: "Failed to create task" });
  }
}

//  2 GET
export async function handleGetAllTasks(req: Request, res: Response) {
  try {
    const tasks = await getAllTasks();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
}


export async function handleGetTaskById(
  req: Request<{ id: string }>,
  res: Response
) {
  try {
    const task = await getTaskById(req.params.id);
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch task" });
  }
}

export async function handleUpdateTask(
  req: Request<{ id: string }, {}, UpdateTaskInput>,
  res: Response
) {
  try {
    const task = await updateTask(req.params.id, req.body);
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: "Failed to update task" });
  }
}

export async function handleDeleteTask(
  req: Request<{ id: string }>,
  res: Response
) {
  try {
    const task = await deleteTask(req.params.id);
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete task" });
  }
}