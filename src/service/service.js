import axios from "axios";

// Frontend is running on http://localhost:5173

// Backend is running on http://localhost:5005

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5005";

const myApi = axios.create({
  baseURL: BACKEND_URL,
});

// Teachers :

myApi.getAllTeachers = (queryString) => {
  return myApi.get(`/teachers?${queryString}`);
};

myApi.getOneTeacher = (id) => {
  return myApi.get(`/teachers/${id}`);
};

myApi.favoriteTeachers = (id) => {
  return myApi.post(`/favorite-teacher/${id}/add`);
}

//Courses :
myApi.interceptors.request.use((request) => {
  const token = localStorage.getItem("token");
  request.headers.Authorization = token ? `Bearer ${token}` : null;
  return request;
});

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

myApi.favoriteCourses = (id) => {
  return myApi.post(`/favorite-courses/${id}/add`);
}

myApi.updateCourse = (id, course) => {
  return myApi.patch(`/courses/${id}`, course);
};

export default myApi;
