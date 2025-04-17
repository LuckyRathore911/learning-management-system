import express from "express";

import {
  getUserCourseProgress,
  getUserData,
  getUserEnrolledCourses,
  purchaseCourse,
  updateUserCourseProgress,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/data", getUserData);
userRouter.get("/enrolled-courses", getUserEnrolledCourses);
userRouter.post("/purchase", purchaseCourse);

userRouter.post("/update-course-progress", updateUserCourseProgress);
userRouter.post("/get-course-progress", getUserCourseProgress);

export default userRouter;
