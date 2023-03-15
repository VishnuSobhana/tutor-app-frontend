import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router';
import myApi from '../../service/service';

const favoriteTeachers = () => {
    const [favTeachers, setfavTeachers] = useState('');
    // const navigate = useNavigate();

    const fetchFav = () => {
        myApi
            .getfavoriteTeacher()
            .then((res) => {
                // console.log(res.data)
                setfavTeachers(res.data)
            })
            .catch((e) => console.error(e));

    }
    useEffect(() => {
        fetchFav()
    }, []);

    const handleRemove = async (teachersId) => {
        try {
            await myApi.removedTeachers(teachersId)
            fetchFav()
        } catch (error) {
            console.error(error);
        }
    };

    if (!favTeachers.length) return

    return (
        <>

            <h2>Favorite Teachers</h2>
            {favTeachers.map(fav => {
                return (
                    <div key={fav._id}>
                        <h3>{fav.teacher.username}</h3>

                        <button onClick={() => handleRemove(fav._id)}>Unbookmark</button>
                    </div>
                )
            })
            }
        </>
    );
}


export default favoriteTeachers