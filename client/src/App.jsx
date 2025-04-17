import React from "react";
import { Routes, Route, useMatch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./pages/learner/Home";
import CoursesList from "./pages/learner/CoursesList";
import CourseDetails from "./pages/learner/CourseDetails";
import Enrollments from "./pages/learner/Enrollments";
import CoursePlayer from "./pages/learner/CoursePlayer";
import Loading from "./components/learner/Loading";
import Navbar from "./components/learner/Navbar";

import Admin from "./pages/admin/Admin";
import Dashboard from "./pages/admin/Dashboard";
import AddCourse from "./pages/admin/AddCourse";
import MyCourses from "./pages/admin/MyCourses";
import StudentsEnrolled from "./pages/admin/StudentsEnrolled";

const App = () => {
  const isAdminRoute = useMatch("/admin/*");

  return (
    <div className="text-default min-h-screen bg-white">
      <ToastContainer /> {/*to display api responses */}
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CoursesList />} />
        <Route path="/courses/:input" element={<CoursesList />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/enrollments" element={<Enrollments />} />
        <Route path="/course-player/:courseId" element={<CoursePlayer />} />
        <Route path="/loading/:path" element={<Loading />} />

        <Route path="/admin" element={<Admin />}>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="add-course" element={<AddCourse />} />
          <Route path="my-courses" element={<MyCourses />} />
          <Route path="students-enrolled" element={<StudentsEnrolled />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
