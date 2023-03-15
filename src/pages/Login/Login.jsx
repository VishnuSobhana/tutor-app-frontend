import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import myApi from "../../service/service";
import './Login.css'

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { storeToken, authenticateUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const loggedUser = { username, password };
            const response = await myApi.post("/auth/login", loggedUser);
            storeToken(response.data.token);
            await authenticateUser();
            navigate("/");
        } catch (error) {
            console.log(error);
            setError(error.response.data.message);
        }
    };

    return (
        <>
            <h1>login</h1>
            <form onSubmit={handleSubmit} className="login">
                <label htmlFor="username">Username:</label>
                <input
                    onChange={(event) => setUsername(event.target.value)}
                    type="text"
                    name="username"
                    id="username"
                    value={username}
                />
                <label htmlFor="password">Password:</label>
                <input
                    onChange={(event) => setPassword(event.target.value)}
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                />
                <button type="submit">Login</button>

            </form>
        </>
    );
};

export default Login;
