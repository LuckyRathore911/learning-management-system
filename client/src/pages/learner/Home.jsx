import React from "react";
import Introduction from "../../components/learner/Introduction";
import CoursesSection from "../../components/learner/CoursesSection";
import TestimonialsSection from "../../components/learner/TestimonialsSection";

const Home = () => {
  return (
    <div className="flex flex-col items-center space-y-7 text-center">
      <Introduction />
      <CoursesSection />
      <TestimonialsSection />
    </div>
  );
};

export default Home;
