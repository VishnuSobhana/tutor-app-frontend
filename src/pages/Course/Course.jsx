import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import myApi from "../../service/service";

const Course = () => {
  const [course, setCourse] = useState(null);
  const params = useParams();
  console.log(params);
  const navigate = useNavigate();

  useEffect(() => {
    myApi
      .getOneCourse(params.courseId)
      .then((res) => setCourse(res.data))
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
    <>
      <h2>Title : {course.title}</h2>
      <h4>Subject : {course.subject}</h4>
      <h4>Description : </h4>
      <p style={{ whiteSpace: "pre-line" }}>{course.description}</p>
      <Link to={`/course/${course._id}/edit`}>Update this course</Link>
      <button onClick={handleDelete}>Delete this course</button>
      <button onClick={handleFavorite}>Bookmark this course</button>
      {/* <pre>{JSON.stringify(course, null, 2)}</pre> */}
    </>
  );
};

export default Course;
