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
      .then((res) => setCourse(res.data.oneCourse))
      .catch((e) => console.error(e));
  }, []);

  const handleClick = async () => {
    try {
      await myApi.deleteCourse(params.courseId);
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
      <h2>{course.title}</h2>
      <p style={{ whiteSpace: "pre-line" }}>{course.description}</p>
      <Link to={`/course/${course._id}/edit`}>Edit that course</Link>
      <button onClick={handleClick}>Delete course</button>
      <pre>{JSON.stringify(course, null, 2)}</pre>
    </>
  );
};

export default Course;
