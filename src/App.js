import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import SignupPage from './pages/signupPage.js';
import SigninPage from './pages/signinPage.js';
import Navbar from './components/auth/Navbar.js';
import Home from './components/screens/Home.js';
import Signin from './components/screens/Signin.js';
import Signup from './components/screens/Signup.js';
import Dashboard from './components/screens/Dashboard.js';
import DashboardUpload from './components/screens/dashboard/dashboard-project-components/dashboard-project-upload/DashboardUpload.js'
import "./App.css";

function NavbarWithConditionalRendering() {
  const location = useLocation();

  // Conditionally render Navbar based on route
  const renderNavbar = !['/dashboard'].includes(location.pathname);

  return renderNavbar ? <Navbar /> : null;
}

function App() {
  return (
    <Router>
      <div>
        {/* <NavbarWithConditionalRendering /> */}
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route path="/uploads" element={<DashboardUpload />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
