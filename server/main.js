import express from "express";
import cors from "cors";
import "dotenv/config";
import { clerkMiddleware } from "@clerk/express";

import connectDB from "./configs/mongodb.js"; //file extension is mandatory
import connectCloudinary from "./configs/cloudinary.js";
import { clerkWebhooks, stripeWebhooks } from "./controllers/webhooks.js";
import adminRouter from "./routes/adminRoutes.js";
import courseRouter from "./routes/courseRoutes.js";
import userRouter from "./routes/userRoutes.js";

//initialize express
const app = express();

//connect to database
await connectDB();
await connectCloudinary();

//middlewares
app.use(cors());
app.use(clerkMiddleware()); //adds auth property in all the requests

//routes
app.get("/", (req, res) => {
  res.send("API is working");
});
app.post("/clerk", express.json(), clerkWebhooks);
app.use("/api/admin", express.json(), adminRouter);
app.use("/api/course", express.json(), courseRouter);
app.use("/api/user", express.json(), userRouter);
app.post("/stripe", express.raw({ type: "application/json" }), stripeWebhooks);

//port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port number ${PORT}`);
});
