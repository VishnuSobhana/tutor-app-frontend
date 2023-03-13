import axios from "axios";

// Frontend is running on http://localhost:5173

// Backend is running on http://localhost:5005

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const myApi = axios.create({
  baseURL: BACKEND_URL,
});

// Teachers :

myApi.createTeacher = (teacher) => {
  return myApi.post("/", teacher);
};

myApi.getAllTeachers = (queryString) => {
  return myApi.get(`/teachers?${queryString}`);
};

myApi.getOneTeacher = (id) => {
  return myApi.get(`/teachers/${id}`);
};

myApi.deleteTeacher = (id) => {
  return myApi.delete(`/teachers/${id}`);
};

myApi.updateTeacher = (id, teacher) => {
  return myApi.patch(`/teachers/${id}`, teacher);
};

//Courses :

myApi.createCourse = (course) => {
  return myApi.post("/", course);
};

myApi.getAllCourses = (queryString) => {
  return myApi.get(`/courses?${queryString}`);
};

myApi.getOneCourse = (id) => {
  return myApi.get(`/courses/${id}`);
};

myApi.deleteCourse = (id) => {
  return myApi.delete(`/courses/${id}`);
};

myApi.updateCourse = (id, course) => {
  return myApi.patch(`/courses/${id}`, course);
};

export default myApi;
