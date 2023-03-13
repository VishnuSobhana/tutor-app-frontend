import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import myApi from "../../service/service";

const Teacher = () => {
  const [teacher, setTeacher] = useState(null);
  const params = useParams();
  console.log(params);
  const navigate = useNavigate();

  useEffect(() => {
    myApi
      .getOneTeacher(params.teacherId)
      .then((res) => setTeacher(res.data.oneTeacher))
      .catch((e) => console.error(e));
  }, []);

  if (!teacher) {
    return <div className="loading">Loading...</div>;
  }
  return (
    <>
      <div className="teacherContact">
        <h2>Username : {teacher.username}</h2>
        <h4>Email : {teacher.email}</h4>
        <h4>TelephoneNumber : {teacher.telephoneNumber}</h4>
        {/* <Link to={`/teacher/${teacher._id}/edit`}>Edit teacher</Link> */}
      </div>
    </>
  );
};

export default Teacher;