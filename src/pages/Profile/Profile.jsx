import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import myApi from "../../service/service";
import { Link, useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const { user, authenticateUser } = useContext(AuthContext);
  const [showEditForm, setEditForm] = useState(false);
  const [username, setUsername] = useState(user.username);
  const [bio, setBio] = useState(user.bio);
  const [email, setEmail] = useState(user.email);
  const [telephoneNumber, setTelephoneNumber] = useState(user.telephoneNumber);
  const [city, setCity] = useState(user.city);
  const [isTeacher, setIsTeacher] = useState(user.isTeacher);
  const navigate = useNavigate();

  const handleDelete = async (event) => {
    try {
      await myApi.delete(`/profile`);
      navigate("/");
      authenticateUser();
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const userToEdit = {
      username,
      bio,
      email,
      telephoneNumber,
      city,
      isTeacher,
    };
    try {
      const response = await myApi.put("/profile/", userToEdit);
      if (response.status === 200) {
        console.log(response);
        setEditForm(false);
        authenticateUser();
      }
    } catch (error) {
      console.log(error);
      //   setError(error.response.data.message);
    }
  };
  if (!user) {
    return <p>Loading</p>;
  }
  return (
    <div className="card Profile">
      <h1 className="title">{user.username}</h1>
      <h2 className="details">BIO:{user.bio}</h2>
      <h2 className="details">EMAIL:{user.email}</h2>
      <h2 className="details">TELEPHONE-NUMBER:{user.telephoneNumber}</h2>
      <h2 className="details">CITY:{user.city}</h2>
      <h2 className="details">{user.isTeacher ? "Teacher" : "Student"}</h2>

      {showEditForm ? (
        <>
          <button onClick={() => setEditForm(false)}>Hide</button>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              onChange={(event) => setUsername(event.target.value)}
              value={username}
              type="text"
              id="username"
              name="username"
            />
            <label htmlFor="bio">Bio:</label>
            <input
              onChange={(event) => setBio(event.target.value)}
              value={bio}
              type="text"
              id="bio"
              name="bio"
            />
            <label htmlFor="email">Email:</label>
            <input
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              type="email"
              id="email"
              name="email"
            />
            <label htmlFor="telephoneNumber">Phone Number</label>
            <input
              onChange={(event) => setTelephoneNumber(event.target.value)}
              value={telephoneNumber}
              type="text"
              id="telephoneNumber"
              name="telephoneNumber"
            />
            <label>City</label>
            <input
              onChange={(event) => setCity(event.target.value)}
              value={city}
              type="text"
              id="city"
              name="city"
            />
            <label htmlFor="isTeacher">Are you a teacher?</label>
            {!isTeacher ? (
              <input
                onChange={(event) => setIsTeacher(event.target.checked)}
                type="checkbox"
                name="isTeacher"
                id="isTeacher"
              />
            ) : (
              <input
                onChange={(event) => setIsTeacher(event.target.checked)}
                type="checkbox"
                name="isTeacher"
                id="isTeacher"
                checked
              />
            )}
            <button type="submit" className="submit">
              Submit
            </button>
          </form>
        </>
      ) : (
        <button onClick={() => setEditForm(true)}>Edit Profile</button>
      )}
      <button onClick={handleDelete}>Delete profile</button>
      <Link to="/favoriteCourses">Favourite courses</Link>
      <Link to='/favoriteTeachers'>Favorite Teachers</Link>
    </div>
  );
};

export default Profile;
