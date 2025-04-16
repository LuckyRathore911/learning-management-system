import express from "express";

import {
  addCourse,
  getAdminCourses,
  updateRoleToAdmin,
} from "../controllers/adminController.js";
import upload from "../configs/multer.js";
import { protectAdmin } from "../middlewares/authMiddleware.js";

const adminRouter = express.Router();

// add admin role
adminRouter.get("/update-role", updateRoleToAdmin);

adminRouter.post(
  "/add-course",
  upload.single("image"),
  protectAdmin,
  addCourse
);

adminRouter.get("/courses", protectAdmin, getAdminCourses);

export default adminRouter;
