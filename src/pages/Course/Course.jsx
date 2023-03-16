import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import myApi from "../../service/service";
import { AuthContext } from "../../context/AuthContext";
import "./Course.css"

const Course = () => {
  const {user} = useContext(AuthContext)
  const [course, setCourse] = useState(null);
  const params = useParams();
  console.log(params);
  const navigate = useNavigate();

  useEffect(() => {
    myApi
      .getOneCourse(params.courseId)
      .then((res) => setCourse(res.data.oneCourse))
      .catch((e) => console.error(e));
  }, []);

  const handleDelete = async () => {
    try {
      await myApi.deleteCourse(params.courseId);
      navigate("/courses");
    } catch (error) {
      console.error(error);
    }
  };

  const handleFavorite = async () => {
    try {
      await myApi.favoriteCourses(params.courseId);
      navigate("/courses");
    } catch (error) {
      console.error(error);
    }
  };

  if (!course) {
    return <div className="loading">Loading...</div>;
  }
  return (
    <div className="one-course">
      <h2>Title : {course.title}</h2>
      <h4>Subject : {course.subject}</h4>
      <h4>Description : </h4>
      <p style={{ whiteSpace: "pre-line" }}>{course.description}</p>

      {user.isTeacher ? 
      <div className="course-link">
          <Link to={`/course/${course._id}/edit`}>Edit that course</Link>
          <button onClick={handleDelete}>Delete course</button>
      </div>
         : <button onClick={handleFavorite}>Bookmark Course</button>}
    </div>
  );
};

export default Course;
