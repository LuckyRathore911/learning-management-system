import express from "express";
import cors from "cors";
import "dotenv/config";

import connectDB from "./configs/mongodb.js"; //file extension is mandatory
import { clerkWebhooks } from "./controllers/webhooks.js";

//initialize express
const app = express();

//connect to database
await connectDB();

//middlewares
app.use(cors());

//routes
app.get("/", (req, res) => {
  res.send("API is working");
});

app.post("/clerk", express.json(), clerkWebhooks);

//port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port number ${PORT}`);
});
