import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { AuthContext } from '../../context/AuthContext'

const IsLoggedOut = () => {
    const { isLoading, user } = useContext(AuthContext)

    if (isLoading) {
        return <p>Loading please...</p>
    }

    if (user) {
        return <Navigate to="/" />
    }
    return <Outlet />
}

export default IsLoggedOut