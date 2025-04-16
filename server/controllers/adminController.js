import { clerkClient } from "@clerk/express";
import { v2 as cloudinary } from "cloudinary";

import Course from "../models/Course.js";

//update role to admin
export const updateRoleToAdmin = async (req, res) => {
  try {
    const userId = req.auth.userId;
    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: {
        role: "admin",
      },
    });

    res.json({ success: true, message: "You can publish a course now" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

//add new course
export const addCourse = async (req, res) => {
  try {
    const { courseData } = req.body;
    const imageFile = req.file; //we need to parse this using multer
    const adminId = req.auth.userId;

    if (!imageFile) {
      return res.json({ success: false, message: "Thumbnail not attached" });
    }

    const parsedCourseData = await JSON.parse(courseData);
    parsedCourseData.admin = adminId;

    //course model
    const newCourse = await Course.create(parsedCourseData);

    //upload image on cloudinary and get its public url
    const imageUpload = await cloudinary.uploader.upload(imageFile.path);
    newCourse.courseThumbnail = imageUpload.secure_url;

    //save updated course in the database
    await newCourse.save();

    res.json({ success: true, message: "Course Added" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

//get admin courses
export const getAdminCourses = async (req, res) => {
  try {
    const admin = req.auth.userId;
    const courses = await Course.find({ admin }); //get courses of this particular admin
    res.json({ success: true, courses });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
