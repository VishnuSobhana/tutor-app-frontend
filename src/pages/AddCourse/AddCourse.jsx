import myApi from "../../service/service";
import React, { useState } from "react";

const AddCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subject, setSubject] = useState("-1");
  const params = useParams();
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
    <form onSubmit={handleSubmit}>
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
        <button>Create a course</button>
      </div>
    </form>
  );
};

export default AddCourse;
