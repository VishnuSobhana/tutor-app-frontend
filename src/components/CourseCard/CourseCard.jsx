import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./CourseCard.css";
// import "../../pages/Course/Course";
import { AuthContext } from "../../context/AuthContext";
import myApi from "../../service/service";

const CourseCard = ({
  _id,
  title,
  description,
  subject,
  isBookmarked,
  fetchCourses,
}) => {
  const { user, authenticateUser, removeToken } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleFavorite = async (courseId, isBookmarked) => {
    console.log(isBookmarked);
    try {
      if (isBookmarked) {
        await myApi.removedCourse(courseId);
      } else {
        await myApi.favoriteCourses(courseId);
      }
      fetchCourses();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={`CourseCard`} key={_id}>
      <h3>Title : {title}</h3>
      <h4>subject : {subject}</h4>
      <p style={{ whiteSpace: "pre-line" }}>{description}</p>
      {user.isTeacher ? (
        <Link to={`/course/${_id}`}> Edit course!</Link>
      ) : (
        <button onClick={() => handleFavorite(_id, isBookmarked)}>
          {isBookmarked ? "Unbookmark Course" : "Bookmark Course"}
        </button>
      )}
    </div>
  );
};

export default CourseCard;
