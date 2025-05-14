import React from 'react';
import { Navigate } from 'react-router-dom'

type Props = {
    redirectedTo: string;
    children: React.ReactNode;
}


export default function ProtectedRoute({ redirectedTo = '/', children }: Props) {

    const isAuthenticated = localStorage.getItem('token')
    return isAuthenticated ? children : <Navigate to={redirectedTo} />
}