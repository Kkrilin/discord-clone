import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

type Props = {
    redirectedTo: string;
    children: React.ReactNode;
};

export default function PublicRoute({ redirectedTo = '/app', children }: Props) {
    const location = useLocation();
    const isAuthenticated = localStorage.getItem('token');

    // Redirect to app only if they're on base public paths
    const publicPaths = ['/', '/login', '/register'];

    const isOnPublicPath = publicPaths.includes(location.pathname);
    console.log('4444444444', isOnPublicPath)
    if (isAuthenticated && isOnPublicPath) {
        console.log(5555555555555555)
        return <Navigate to={redirectedTo} replace />;
    }

    return <>{children}</>;
}
