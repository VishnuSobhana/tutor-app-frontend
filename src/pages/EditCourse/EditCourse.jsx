import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import axios from 'axios'
import myApi from "../../service/service";

const EditCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subject, setSubject] = useState("-1");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    myApi
      .getOneCourse(params.courseId)
      .then((res) => {
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
    <form onSubmit={handleSubmit}>
      <label htmlFor="course">Update the course:</label>
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
        <label htmlFor="description">: </label>
        <select
          value={subject}
          name="subject"
          id="subject"
          onChange={(event) => setCategory(event.target.value)}
        >
          <option disabled value="-1">
            Select a subject
          </option>
          <option value="Maths">Math</option>
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
  );
};

export default EditCourse;
