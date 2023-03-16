import "./NavBar.css";
import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import { Nav, Navbar } from "react-bootstrap";
//import Navbar from "react-bootstrap/Navbar";
import { AuthContext } from "../../context/AuthContext";
// import { Navbar, Nav } from "react-bootstrap";
const NavBar = () => {
  const { user, authenticateUser, removeToken } = useContext(AuthContext);
  const handleClick = () => {
    removeToken();
    authenticateUser();
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>

              {user ? (
                <>
                  <li>
                    <NavLink to="/profile">Profile</NavLink>
                  </li>
                  <li>
                    <NavLink to="/courses">Courses</NavLink>
                  </li>
                  <li>
                    <NavLink to="/teachers">Teachers</NavLink>
                  </li>
                  {user.isTeacher ? (
                    <>
                      <li>
                        <NavLink to="/course/new">Add new course</NavLink>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <NavLink to="/favoriteCourses">
                          My favourite courses
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/favoriteTeachers">
                          My favourite teachers
                        </NavLink>
                      </li>
                    </>
                  )}
                  <li>
                    <button onClick={handleClick}>Logout</button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink to="/signup">Sign up</NavLink>
                  </li>
                  <li>
                    <NavLink to="/login">Log In</NavLink>
                  </li>
                </>
              )}
            </ul>
          </Nav>
        </Container>
      </Navbar>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default NavBar;
