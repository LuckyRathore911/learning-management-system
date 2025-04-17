import { clerkClient } from "@clerk/express";
import { v2 as cloudinary } from "cloudinary";

import Course from "../models/Course.js";
import User from "../models/User.js";
import Purchase from "../models/Purchase.js";

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

//get admin dashboard data
export const adminDashboardData = async (req, res) => {
  try {
    const admin = req.auth.userId;
    const courses = await Course.find({ admin });
    const totalCourses = courses.length;
    const courseIds = courses.map(course => course._id);

    //calculate total earnings from purchases
    const purchases = await Purchase.find({
      courseId: { $in: courseIds },
      status: "completed",
    });
    const totalEarnings = purchases.reduce(
      (sum, purchase) => sum + purchase.amount,
      0
    );

    //collect unique enrolled student IDs with their course titles
    const enrolledStudentsData = [];
    for (const course of courses) {
      const students = await User.find(
        {
          _id: { $in: course.enrolledStudents },
        },
        "name imageUrl"
      );

      students.forEach(student => {
        enrolledStudentsData.push({ courseTitle: course.courseTitle, student });
      });
    }

    res.json({
      success: true,
      dashboardData: { totalEarnings, enrolledStudentsData, totalCourses },
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

//get enrolled students data with purchase data
export const getEnrolledStudentsData = async (req, res) => {
  try {
    const admin = req.auth.userId;
    const courses = await Course.find({ admin });
    const courseIds = courses.map(course => course._id);

    const purchases = await Purchase.find({
      courseId: { $in: courseIds },
      status: "completed",
    })
      .populate("userId", "name imageUrl")
      .populate("courseId", "courseTitle");

    const enrolledStudents = purchases.map(purchase => ({
      student: purchase.userId,
      courseTitle: purchase.courseId.courseTitle,
      purchaseDate: purchase.createdAt,
    }));

    res.json({ success: true, enrolledStudents });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
