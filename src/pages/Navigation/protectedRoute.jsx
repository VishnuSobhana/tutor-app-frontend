import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { AuthContext } from '../../context/AuthContext'

const ProtectedRoute = () => {
    const { isLoading, user } = useContext(AuthContext)

    if (isLoading) {
        return <p>Please wait...</p>
    }

    if (!user) {
        return <Navigate to='/login' />
    }

    return <Outlet />
}

export default ProtectedRoute