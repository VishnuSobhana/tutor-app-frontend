import React, { useContext } from "react";
// import { ThemeContext, useTheme } from "../../context/ThemeContext";
import { Link } from "react-router-dom";
import "./TeacherCard.css";

const TeacherCard = ({ _id, username, bio, email, telephoneNumber, city }) => {
  // const { theme, setTheme } = useContext(ThemeContext)
  //const { theme, setTheme } = useTheme();

  return (
    <div className={`TeacherCard`} key={_id}>
      <h3>Username : {username}</h3>
      <h4>City : {city}</h4>
      <p style={{ whiteSpace: "pre-line" }}>{bio}</p>
      <Link to={`/teacher/${_id}`}> Call me !</Link>
    </div>
  );
};

export default TeacherCard;
