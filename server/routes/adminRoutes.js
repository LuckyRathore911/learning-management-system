import express from "express";

import { updateRoleToAdmin } from "../controllers/adminController.js";

const adminRouter = express.Router();

// add admin role
adminRouter.get("/update-role", updateRoleToAdmin);

export default adminRouter;
