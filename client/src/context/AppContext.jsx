import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { dummyCourses } from "../assets/assets";

export const AppContext = createContext();

export const AppContextProvider = props => {
  const currency = import.meta.env.VITE_CURRENCY;
  const [allCourses, setAllCourses] = useState([]);
  const [isAdmin, setIsAdmin] = useState(true);
  const navigate = useNavigate();

  const fetchAllCourses = async () => {
    setAllCourses(dummyCourses);
  };

  //calculate average rating of course
  const calculateRating = course => {
    if (course.courseRatings.length === 0) {
      return 0;
    }
    let totalRating = 0;
    course.courseRatings.forEach(rating => {
      totalRating += rating.rating;
    });
    return totalRating / course.courseRatings.length;
  };

  useEffect(() => {
    fetchAllCourses();
  }, []);

  const value = {
    currency,
    allCourses,
    navigate,
    calculateRating,
    isAdmin,
    setIsAdmin,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
