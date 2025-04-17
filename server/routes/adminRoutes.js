import express from "express";

import {
  addCourse,
  getAdminCourses,
  updateRoleToAdmin,
  adminDashboardData,
  getEnrolledStudentsData,
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
adminRouter.get("/dashboard", protectAdmin, adminDashboardData);
adminRouter.get("/enrolled-students", protectAdmin, getEnrolledStudentsData);

export default adminRouter;
