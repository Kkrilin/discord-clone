import React from 'react';
import { Navigate } from 'react-router-dom'

type Props = {
    redirectedTo: string;
    children: React.ReactNode;
}


export default function PublicRoute({ redirectedTo = '/user', children }: Props) {

    const isAuthenticated = localStorage.getItem('token')
    return isAuthenticated ? <Navigate to={redirectedTo} /> : children
}