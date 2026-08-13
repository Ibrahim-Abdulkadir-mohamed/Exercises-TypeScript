import express from "express";
import mongoose from "mongoose";
import taskRoutes from "./routes/Task"; 
const app = express();
app.use(express.json());

const PORT = 3000;
const MONGO_URI = "mongodb://localhost:27017/task-api";

app.use("/api", taskRoutes);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server wuu socdaa: http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB isku xirid wuu fashilmay:", err);
  });