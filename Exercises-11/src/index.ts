import express from "express";
import goodbyeRoutes from "../src/routes/goodbye";

const app = express();
app.use(express.json());

app.use("/goodbye", goodbyeRoutes); 

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});