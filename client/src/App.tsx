import React, { Suspense } from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CircularLoader from './components/Loader/CircularLoader';

// pages
const LandingPage = React.lazy(() => import('./pages/LandingPage'))
const RegisterPage = React.lazy(() => import('./pages/RegisterPage'))
const LoginPage = React.lazy(() => import('./pages/LoginPage'))

function App() {

  return (
    <BrowserRouter>
      <Suspense fallback={<CircularLoader />}>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
