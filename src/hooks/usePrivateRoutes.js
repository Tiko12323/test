import React, { useEffect, useState } from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const usePrivateRoutes = () => {
    // You could improve this by using a custom hook or state management.
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        // Check if token exists in localStorage
        const token = window.localStorage.getItem('tokenAdmin')
        
        // Example: Additional token validation logic if needed (like expiry checks)
        if (token) {
            setIsAuthenticated(true)
        } else {
            setIsAuthenticated(false)
        }
    }, []) // Only run this effect on initial mount

    return isAuthenticated ? <Outlet /> : <Navigate to='/' />
}

export default usePrivateRoutes
