import React from 'react';
import MainComponents from './MainComponents';
import Login from './pages/Login/Login';
import AdminHome from './pages/AdminHome/AdminHome';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path='/' element={<MainComponents />} />

            <Route path='/login' element={<Login />} />
            <Route path='/adminHome' element={<AdminHome />} />

            {/* Default: Redirect to home */}
            <Route path='*' element={<Navigate to="/" replace />} />

          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
