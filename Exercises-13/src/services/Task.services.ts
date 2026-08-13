import { TaskModel, Task } from "../models/Task.model";

export type CreateTaskInput = Omit<Task, "createdAt" | "_id">;

export type UpdateTaskInput = Partial<CreateTaskInput>;

//  1: Create task
export async function createTask(data: CreateTaskInput): Promise<Task> {
  const task = new TaskModel(data);
  return await task.save();
}

//  2: Read 
export async function getAllTasks(): Promise<Task[]> {
  return await TaskModel.find().sort({ createdAt: -1 });
}

export async function getTaskById(id: string): Promise<Task | null> {
  return await TaskModel.findById(id);
}

//  3: Update 
export async function updateTask(
  id: string,
  data: UpdateTaskInput
): Promise<Task | null> {
  return await TaskModel.findByIdAndUpdate(id, data, { new: true });
}

//4: Delete
export async function deleteTask(id: string): Promise<Task | null> {
  return await TaskModel.findByIdAndDelete(id);
}