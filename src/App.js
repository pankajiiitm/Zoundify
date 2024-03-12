import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupPage from './pages/signupPage.js';
import SigninPage from './pages/signinPage.js';
import Navbar from './components/auth/Navbar.js';
import Home from './components/screens/Home.js'
import Signin from './components/screens/Signin.js'
import Signup from './components/screens/Signup.js'
// import Signup from './components/auth/Signup.js'
import Dashboard from './components/screens/Dashboard.js'
import "./App.css"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
