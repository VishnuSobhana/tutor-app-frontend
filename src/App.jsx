import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import Courses from "./pages/Courses/Courses";
import Course from "./pages/Course/Course";
import AddCourse from "./pages/AddCourse/AddCourse";
import EditCourse from "./pages/EditCourse/EditCourse";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import ProtectedRoute from "./pages/Navigation/protectedRoute";
import IsLoggedOut from "./pages/Navigation/isLoggedOut";
import Teachers from "./pages/Teachers/Teachers";
import Teacher from "./pages/Teacher/Teacher";
import Profile from "./pages/Profile/Profile";
import FavoriteTeachers from "./pages/FavoriteTeachers/FavoriteTeachers";
import FavoriteCourses from "./pages/FavoriteCourses/FavoriteCourses";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/teacher/:teacherId" element={<Teacher />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/course/:courseId" element={<Course />} />
            <Route path="/course/new" element={<AddCourse />} />
            <Route path="/course/:courseId/edit" element={<EditCourse />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/favoriteTeachers" element={<FavoriteTeachers />} />
            <Route path="/favoriteCourses" element={<FavoriteCourses />} />

          </Route>

          <Route element={<IsLoggedOut />}>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
