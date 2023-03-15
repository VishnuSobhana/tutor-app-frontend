import React, { useContext } from "react";
// import { ThemeContext, useTheme } from "../../context/ThemeContext";
import { Link } from "react-router-dom";
import "./TeacherCard.css";


const TeacherCard = ({ _id, username, bio, email, telephoneNumber, city }) => {

  return (
    <div className={`TeacherCard`} key={_id}>
      <h3>Name : {username}</h3>
      <h4>City : {city}</h4>

      <p style={{ whiteSpace: "pre-line" }}>Biography: {bio}</p>

      <Link to={`/teacher/${_id}`}>More info</Link>
    </div>
  );
};

export default TeacherCard;
