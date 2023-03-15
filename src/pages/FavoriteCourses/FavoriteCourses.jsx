import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router';
import myApi from '../../service/service';

const FavoriteCourses = () => {
    const [favCourses, setFavCourses] = useState('');
    const navigate = useNavigate();

    const fetchFav = () => {
        myApi
            .getfavoriteCourses()
            .then((res) => {
                setFavCourses(res.data)
            })
            .catch((e) => console.error(e));
    }

    useEffect(() => {
        fetchFav()
    }, []);

    const handleRemove = async (courseId) => {
        try {
            await myApi.removedCourse(courseId)
            fetchFav()
        } catch (error) {
            console.error(error);
        }
    };

    if (!favCourses.length) return

    return (
        <>

            <h2>Favorite Courses</h2>
            {favCourses.map(fav => {
                return (
                    <div key={fav.id}>
                        <h3>{fav.course.title}</h3>

                        <button onClick={() => handleRemove(fav.id)}>Unbookmark</button>
                    </div>
                )
            })
            }
        </>
    );
}


export default FavoriteCourses