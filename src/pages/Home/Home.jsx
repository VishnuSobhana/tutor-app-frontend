import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div>
            <h1>Welcome to the tutor App!</h1>
            <Link to="./teachers" className='btn-home'>Choose a teacher</Link>
            <Link to="./courses" className='btn-home'>Choose a course</Link>
        </div>
    )
}

export default Home