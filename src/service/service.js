import axios from "axios";

// Frontend is running on http://localhost:5173

// Backend is running on http://localhost:5005

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5005";

const myApi = axios.create({
  baseURL: BACKEND_URL,
});

// Teachers :

myApi.getAllTeachers = (queryString) => {
  return myApi.get(`/api/teachers?${queryString}`);
};

myApi.getOneTeacher = (id) => {
  return myApi.get(`/api/teachers/${id}`);
};

myApi.favTeacher = (id) => {
  return myApi.post(`/api/favorite-teacher/${id}/add`);
};

myApi.getfavoriteTeacher = () => {
  return myApi.get(`/api/favorite-teacher`);
};

myApi.removedTeachers = (id) => {
  return myApi.delete(`/api/favorite-teacher/${id}`);
};

//Courses :
myApi.interceptors.request.use((request) => {
  const token = localStorage.getItem("token");
  request.headers.Authorization = token ? `Bearer ${token}` : null;
  return request;
});

myApi.createCourse = (course) => {
  return myApi.post("/api/courses/add", course);
};

myApi.getAllCourses = (queryString) => {
  return myApi.get(`/api/courses?${queryString}`);
};

myApi.getOneCourse = (id) => {
  return myApi.get(`/api/courses/${id}`);
};

myApi.deleteCourse = (id) => {
  return myApi.delete(`/api/courses/${id}`);
};

myApi.favoriteCourses = (id) => {
  return myApi.post(`/api/favorite-courses/${id}/add`);
};

myApi.getfavoriteCourses = () => {
  return myApi.get(`/api/favorite-courses`);
};

myApi.removedCourse = (id) => {
  return myApi.delete(`/api/favorite-courses/${id}/remove`);
};

myApi.updateCourse = (id, course) => {
  return myApi.patch(`/api/courses/${id}`, course);
};

export default myApi;
