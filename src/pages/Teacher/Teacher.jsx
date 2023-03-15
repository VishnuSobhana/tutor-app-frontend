import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import myApi from "../../service/service";

const Teacher = () => {
  const [teacher, setTeacher] = useState(null);
  const params = useParams();
  //console.log(params);
  const navigate = useNavigate();
  console.log(params)

  const handleFavoriteTeacher = async () => {
    try {
      await myApi.favoriteTeachers(params.teacherId);
      navigate("/teachers");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    myApi
      .getOneTeacher(params.teacherId)
      .then((res) => setTeacher(res.data))
      .catch((e) => console.error(e));
  }, []);

  if (!teacher) {
    return <div className="loading">Loading...</div>;

  }
  return (
    <>
      <div className="teacherContact">
        <h4>Name : {teacher.username}</h4>
        <h4>Email : {teacher.email}</h4>
        <h4>Phone Number : {teacher.telephoneNumber}</h4>
        {/* <Link to={`/teacher/${teacher._id}/edit`}>Edit teacher</Link> */}
        <button onClick={handleFavoriteTeacher}>Bookmark teacher</button>
      </div>
    </>
  );
};

export default Teacher;
