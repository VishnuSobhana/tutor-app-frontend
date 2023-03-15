import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import myApi from '../../service/service';

const FavoriteCourses = () => {
    const [favCourses, setFavCourses] = useState('');
    const params = useParams;
    const navigate = useNavigate();

    useEffect(() => {
        myApi
            .favoriteCourses(params.favoriteCourseId)
            .then((res) => setFavCourses(res.data))
            .catch((e) => console.error(e));
    }, []);

    const handleRemove = async () => {
        try {
            await myApi.removedCourse(params.courseId);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <h2>Favorite Courses</h2>
            <h3>{favCourses.title}</h3>
            <button onClick={handleRemove
            }>Unbookmark</button>
            {/* <List array={favCourses} MyComponent={CourseCard} /> */}
        </>
    );
}


export default FavoriteCourses