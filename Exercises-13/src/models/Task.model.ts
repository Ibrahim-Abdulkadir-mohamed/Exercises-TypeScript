import mongoose, { Schema, Document } from "mongoose";

export type TaskStatus = "pending" | "in-progress" | "done";

export interface Task extends Document {
  title: string;
  description: string;
  status: TaskStatus;
  createdAt: Date;
}

const taskSchema = new Schema<Task>({
  title: { type: String, required: true },
  description: { type: String, default: "" },
  status: {
    type: String,
    enum: ["pending", "in-progress", "done"],
    default: "pending",
  },
  createdAt: { type: Date, default: Date.now },
});

export const TaskModel = mongoose.model<Task>("Task", taskSchema);