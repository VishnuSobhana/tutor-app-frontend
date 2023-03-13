import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
const NavBar = () => {

    return (
        <nav className='nav'>
            <div className='navDiv'>
                <Link to="/">Home</Link>
            </div>
            <div>
                <ul>
                    <li>
                        <Link to="/teachers">Teachers</Link>
                    </li>
                    <li>
                        <Link to="/courses">Courses</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="/logout">Log Out</Link>
                    </li>
                    <li>
                        <Link to="/signup">Sign up</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar