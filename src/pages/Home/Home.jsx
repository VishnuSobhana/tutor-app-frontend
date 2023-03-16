import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
const Home = () => {
    return (
        <div className="homepage">
            <h1>Welcome to the tutor App!</h1>
            <div className='home-links'>
            <Link to="./teachers" className='btn-teachers'>Choose a teacher</Link>
            <Link to="./courses" className='btn-courses'>Choose a course</Link>
            </div>
        </div>
    )
}

export default Home