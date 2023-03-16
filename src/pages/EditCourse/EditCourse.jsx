import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import axios from 'axios'
import myApi from "../../service/service";
import "./EditCourse.css"
const EditCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subject, setSubject] = useState("-1");
  const params = useParams();
  const navigate = useNavigate();

  // console.log(params);

  useEffect(() => {
    myApi
      .getOneCourse(params.courseId)
      .then((res) => {
        console.log(res.data)
        setTitle(res.data.oneCourse.title);
        setDescription(res.data.oneCourse.description);
        setSubject(res.data.oneCourse.subject);
      })
      .catch((e) => console.error(e));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const courseToUpdate = { title, description, subject };

    try {
      const newCourse = await myApi.updateCourse(
        params.courseId,
        courseToUpdate
      );
      if (newCourse.status === 202) {
        navigate("/courses");
      }
      console.log(newCourse);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="editForm">
    <form  onSubmit={handleSubmit}>
      <label htmlFor="title"> title :</label>
      <div>
        <input
          value={title}
          name="title"
          id="title"
          cols="30"
          rows="10"
          onChange={(event) => setTitle(event.target.value)}
        ></input>
      </div>
      <div>
        <label htmlFor="description"> Description : </label>
        <textarea
          value={description}
          name="description"
          id="description"
          cols="30"
          rows="10"
          onChange={(event) => setDescription(event.target.value)}
        ></textarea>
      </div>
      <div>
        <label htmlFor="subject"> Subject : </label>
        <select
          value={subject}
          name="subject"
          id="subject"
          onChange={(event) => setSubject(event.target.value)}
        >
          <option disabled value="-1">
            Select a subject
          </option>
          <option value="Maths">Maths</option>
          <option value="Physics">Physics</option>
          <option value="Computer_Science">Computer_Science</option>
          <option value="Physical_Education">Physical_Education</option>
          <option value="History">History</option>
          <option value="Chemistry">Chemistry</option>
          <option value="Biology">Biology</option>
        </select>
        <button>Update a course</button>
      </div>
    </form>
    </div>
  );
};

export default EditCourse;
