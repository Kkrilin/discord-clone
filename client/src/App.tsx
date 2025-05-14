import React, { Suspense } from 'react';
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CircularLoader from './components/Loader/CircularLoader';
import PublicRoute from './components/Utils/PublicRoute';
import AuthLayout from './layouts/AuthLayout';
import ProtectedRoute from './components/Utils/ProtectedRoute';
import AppLayout from './layouts/AppLayout';

// pages
const LandingPage = React.lazy(() => import('./pages/LandingPage'))
const RegisterPage = React.lazy(() => import('./pages/RegisterPage'))
const LoginPage = React.lazy(() => import('./pages/LoginPage'))
const HomePage = React.lazy(() => import('./pages/HomePage'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<CircularLoader />}>
        <Routes>
          <Route path='/' element={<PublicRoute redirectedTo='/app'> <AuthLayout /> </PublicRoute>}>
            <Route index element={<LandingPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
          </Route>
          <Route path='/app' element={<ProtectedRoute redirectedTo='/'> <AppLayout /></ProtectedRoute>} >
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
