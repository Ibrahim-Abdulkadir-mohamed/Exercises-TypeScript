import express from "express";
import productRoutes from "../src/routes/api"
const app = express();

app.use(express.json());

app.use("/api", productRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});