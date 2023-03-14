import { useState } from "react";
import React from 'react'
import { useNavigate } from "react-router-dom";
import myApi from "../../service/service";
const Signup = () => {
    const [username, setUsername] = useState('');
    const [bio, setBio] = useState('');
    const [email, setEmail] = useState('');
    const [telephoneNumber, setTelephoneNumber] = useState('');
    const [city, setCity] = useState('');
    const [isTeacher, setIsTeacher] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()
    const handleSubmit = async (event) => {
        event.preventDefault();
        const userToCreate = {
            username, bio, email, telephoneNumber, city, isTeacher, password
        }
        try {
            const response = await myApi.post('/auth/signup', userToCreate)
            if (response.status === 201) {
                navigate('/login')
            }

        } catch (error) {
            console.log(error)
            setError(error.response.data.message)
        }

    }
    return (
        <>
            <div className="form">
                <h1>Sign up</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input onChange={(event) => setUsername(event.target.value)} value={username} type="text" id="username" name="username" />
                    <label htmlFor="bio">Bio:</label>
                    <input onChange={(event) => setBio(event.target.value)} value={bio} type="text" id="bio" name="bio" />
                    <label htmlFor="email">Email:</label>
                    <input onChange={(event) => setEmail(event.target.value)} value={email} type="email" id="email" name="email" />
                    <label htmlFor="telephoneNumber">Phone Number</label>
                    <input onChange={(event) => setTelephoneNumber(event.target.value)} value={telephoneNumber} type="text" id="telephoneNumber" name="telephoneNumber" />
                    <label>City</label>
                    <input onChange={(event) => setCity(event.target.value)} value={city} type="text" id="city" name="city" />
                    <label htmlFor="isTeacher">Are you a teacher?</label>
                    <input onChange={(event) => setIsTeacher(event.target.checked)} type="checkbox" name="isTeacher" id="isTeacher" />
                    <label htmlFor="password">Password</label>
                    <input onChange={(event) => setPassword(event.target.value)} value={password} type="password" id="password" name="password" />
                    <button type="submit" className="submit">Submit</button>
                </form>

            </div>

        </>

    )
}

export default Signup