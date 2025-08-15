import React from 'react';
import { Navigate, useLocation } from 'react-router-dom'

type Props = {
    redirectedTo: string;
    children: React.ReactNode;
}


export default function ProtectedRoute({ redirectedTo = '/', children }: Props) {
    const location = useLocation()
    const isAuthenticated = localStorage.getItem('token')
    console.log('isAuthenticated', isAuthenticated, location)
    return isAuthenticated ? <> {children} </> : <Navigate to={redirectedTo} />;
}