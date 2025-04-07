import React from "react";

import { assets } from "../../assets/assets";
import SearchBar from "./SearchBar";

const Introduction = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70">
      <h1 className="md:text-5xl text-4xl relative font-bold text-gray-800 max-w-3xl mx-auto">
        Unleash Your Potential—
        <span className="text-blue-600">One Course at a Time</span>
        <img
          src={assets.sketch}
          alt="sketch"
          className="md:block hidden absolute -bottom-7 right-0"
        />
      </h1>

      <p className="md:block hidden text-gray-500 max-w-2xl mx-auto">
        CodeCampus is a next-generation Learning Management System designed to
        empower learners and educators alike. With an intuitive interface and
        powerful tools, it simplifies course creation, progress tracking, and
        interactive learning. Unlock your full potential with a platform built
        for growth, innovation, and success.
      </p>
      <p className="md:hidden text-gray-500 max-w-sm mx-auto">
        CodeCampus is a next-generation Learning Management System designed to
        empower learners and educators alike. Unlock your full potential with a
        platform built for growth, innovation, and success.
      </p>

      <SearchBar />
    </div>
  );
};

export default Introduction;
