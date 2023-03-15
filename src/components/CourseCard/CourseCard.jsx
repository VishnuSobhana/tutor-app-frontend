import React, { useContext } from "react";
// import { ThemeContext, useTheme } from "../../context/ThemeContext";
import { Link } from "react-router-dom";
import "./CourseCard.css";

const CourseCard = ({ _id, title, description, subject }) => {

  return (
    <div className={`CourseCard`} key={_id}>
      <h3>Title : {title}</h3>
      <h4>subject : {subject}</h4>
      <p style={{ whiteSpace: "pre-line" }}>{description}</p>
      <Link to={`/course/${_id}`}> Edit course !</Link>
    </div>
  );
};

export default CourseCard;
