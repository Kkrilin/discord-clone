import React, { Suspense } from 'react';
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CircularLoader from './components/Loader/CircularLoader';
import PublicRoute from './components/Utils/PublicRoute';
import ProtectedRoute from './components/Utils/ProtectedRoute';

// Laout
import AuthLayout from './components/layouts/AuthLayout';
import AppLayout from './components/layouts/AppLayout';
import DirectMessageLayout from './components/layouts/DirectMessageLayout';
// components
import DirectMessageRightDetail from './components/DirectMessage/DirectMessageRighDetail';
import DirectMessage from './components/DirectMessage/DirectMessage';

// pages
const LandingPage = React.lazy(() => import('./components/pages/LandingPage'))
const RegisterPage = React.lazy(() => import('./components/pages/RegisterPage'))
const LoginPage = React.lazy(() => import('./components/pages/LoginPage'))

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
            <Route index element={<Navigate to='/app/@me' />} />
            <Route path='@me' element={<DirectMessageLayout />}>
              <Route index element={< DirectMessageRightDetail />} />
              <Route path=':channelId' element={<DirectMessage />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
