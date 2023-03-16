import myApi from "../../service/service";
import React, { useState } from "react";
import "../../pages/EditCourse/EditCourse"
import { useNavigate } from "react-router";


const AddCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subject, setSubject] = useState("-1");
  //const params = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const courseToCreate = { title, description, subject };
    try {
      const response = await myApi.createCourse(courseToCreate);
      console.log(response);

      if (response.status === 201) {
        setTitle("");
        setDescription("");
        setSubject("");
        navigate("/courses");
      }
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="editForm">
    <form  onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title"> Title </label>
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
        <label htmlFor="description"> Description </label>
        <textarea
          value={description}
          name="description"
          id="description"
          cols="30"
          rows="10"
          onChange={(event) => setDescription(event.target.value)}
        ></textarea>
      </div>
      <div className="options">
        <select
          value={subject}
          name="subject"
          id="subject"
          onChange={(event) => setSubject(event.target.value)}
        >
          <option className="disabled" disabled value="-1">
            Select a subject
          </option>
          <option value="Maths">Math</option>
          <option value="Physics">Physics</option>
          <option value="Computer_Science">Computer Science</option>
          <option value="Physical_Education">Physical Education</option>
          <option value="History">History</option>
          <option value="Chemistry">Chemistry</option>
          <option value="Biology">Biology</option>
        </select>
        <button>Create the course</button>
      </div>
    </form>
    </div>
  );
};

export default AddCourse;
