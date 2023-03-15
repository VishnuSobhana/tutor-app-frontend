import React, { useState, useEffect } from "react";
import myApi from "../../service/service";
import TeacherCard from "../../components/TeacherCard/TeacherCard";
import List from "../../components/List/List";
import "../../components/TeacherCard/TeacherCard.css"

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    let queryString = "";
    if (query) {
      queryString = `city=${query}`;
    }



    myApi
      .getAllTeachers(queryString)
      .then((res) => setTeachers(res.data))
      .catch((e) => console.error(e));
  }, [query]);

  return (
    <div>
      <div>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search city" className="search"
        />
      </div>
      <List array={teachers} MyComponent={TeacherCard} />
    </div>
  );
};

export default Teachers;
