import { useContext } from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AuthContext } from '../../context/AuthContext';


// import { Navbar, Nav } from 'react-bootstrap';
const NavBar = () => {
    const { user, authenticateUser, removeToken } = useContext(AuthContext)
    const handleClick = () => {
        removeToken()
        authenticateUser()
    }
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>

                    <Nav className="me-auto">


                        <NavLink to="/">Home</NavLink>

                        <NavLink to="/courses">Courses</NavLink>

                        <NavLink to="/profile">Profile</NavLink>
                        <NavLink to="/teachers">Teachers</NavLink>

                        <NavLink to="/signup">Sign up</NavLink>
                        <NavLink to="/login">Log In</NavLink>

                        <NavLink to="/logout">Log Out</NavLink>

                    </Nav>
                </Container>
            </Navbar>
            <main>
                <Outlet />
            </main>
        </>
    );
}



export default NavBar