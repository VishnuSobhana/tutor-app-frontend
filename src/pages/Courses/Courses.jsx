import React, { useState, useEffect } from "react";
import myApi from "../../service/service";
import CourseCard from "../../components/CourseCard/CourseCard";
import List from "../../components/List/List";

const Courses = () => {
  //   const [course, setCourse] = useState({
  //     title: "",
  //     description: "",
  //     subject: "",
  //     teacher: "",
  //   });
  const [courses, setCourses] = useState([]);
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({
    Maths: false,
    Physics: false,
    Computer_Science: false,
    Physical_Education: false,
    History: false,
    Chemistry: false,
    Biology: false,
  });

  function fetchCourses() {
    let queryString = "";
    if (query) {
      queryString = `course=${query}`;
    }
    for (const key in filters) {
      if (filters[key]) {
        queryString += `&subject=${key}`;
      }
    }
    // Request to Get all the Courses from the backend

    myApi
      .getAllCourses(queryString)
      .then((res) => {
        console.log("queried", res.data);
        setCourses(res.data);
      })
      .catch((e) => console.error(e));
  }

  useEffect(() => {
    fetchCourses();
  }, [query, filters]);

  const handleCheckBox = (event) => {
    setFilters((current) => {
      return { ...current, [event.target.name]: event.target.checked };
    });
  };

  return (
    <div>
      <div>
        <input className="search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search course"
        />
      </div>
      <fieldset>
        <legend>Filter by subject :</legend>
        <div className="filter">
          <label className="filter-label" htmlFor="Maths">Maths: </label>
          <input 
            checked={filters.Maths}
            onChange={handleCheckBox}
            type="checkbox"
            name="Maths"
            id="maths"
          />
        </div>
        <div className="filter">
          <label className="filter-label" htmlFor="Physics">Physics: </label>
          <input
            checked={filters.Physics}
            onChange={handleCheckBox}
            type="checkbox"
            name="Physics"
            id="physics"
          />
        </div>
        <div className="filter">
          <label className="filter-label" htmlFor="Computer_Science">Computer Science: </label>
          <input
            checked={filters.Computer_Science}
            type="checkbox"
            onChange={handleCheckBox}
            name="Computer_Science"
            id="computer_science"
          />
        </div>
        <div className="filter">
          <label className="filter-label" htmlFor="Physical_Education">Physical Education: </label>
          <input
            checked={filters.Physical_Education}
            type="checkbox"
            onChange={handleCheckBox}
            name="Physical_Education"
            id="physical_education"
          />
        </div>
        <div className="filter">
          <label className="filter-label" htmlFor="History">History: </label>
          <input
            checked={filters.History}
            type="checkbox"
            onChange={handleCheckBox}
            name="History"
            id="history"
          />
        </div>
        <div className="filter">
          <label className="filter-label" htmlFor="Chemistry">Chemistry: </label>
          <input
            checked={filters.Chemistry}
            type="checkbox"
            onChange={handleCheckBox}
            name="Chemistry"
            id="chemistry"
          />
        </div>
        <div className="filter">
          <label className="filter-label" htmlFor="Biology">Biology: </label>
          <input
            checked={filters.Biology}
            type="checkbox"
            onChange={handleCheckBox}
            name="Biology"
            id="biology"
          />
        </div>
      </fieldset>
      <List
        fetchCourses={fetchCourses}
        array={courses}
        MyComponent={CourseCard}
      />
    </div>
  );
};

export default Courses;
