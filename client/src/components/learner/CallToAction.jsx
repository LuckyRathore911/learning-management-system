import React, { useContext } from "react";

import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";

const CallToAction = () => {
  const { navigate } = useContext(AppContext);

  const navigateToCoursesSection = e => {
    e.preventDefault();
    navigate("/courses");
  };

  const navigateToEnrollmentsSection = e => {
    e.preventDefault();
    navigate("/enrollments");
  };

  return (
    <div className="flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0">
      <h1 className="text-xl md:text-4xl text-gray-800 font-semibold">
        Learn anything, anytime, anywhere
      </h1>
      <p className="text-gray-500 sm:text-sm">
        CodeCampus is a powerful LMS built for managing, delivering, and
        tracking custom-built coding courses with ease. <br />
        It supports interactive content, coding exercises, and insightful
        analytics to streamline the learning journey. <br />
        Designed with flexibility in mind, CodeCampus adapts to the unique needs
        of every educator and learner.
      </p>
      <div className="flex items-center font-medium gap-6 mt-4">
        <button
          onClick={navigateToEnrollmentsSection}
          className="px-10 py-3 rounded-md text-white bg-blue-600 cursor-pointer"
        >
          Get started
        </button>
        <button
          onClick={navigateToCoursesSection}
          className="flex items-center gap-2 cursor-pointer"
        >
          Learn more <img src={assets.arrow_icon} alt="arrow_icon" />
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
