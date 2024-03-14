import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../auth/logo.png'; // Import your company logo as SVG
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import "./Home.css"

const Home = () => {
    return (
        <div className="signin-page">
            <nav style={{ backgroundColor: 'transparent', boxShadow: 'none', color: 'black', padding: '10px 20px' }}>
                <div className="nav-wrapper" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Link to="/" className="brand-logo" style={{ color: 'black', display: 'flex', alignItems: 'center' }}>
                            <img src={logo} alt="Logo" style={{ height: '60px', width: 'auto', marginRight: '10px' }} />
                            <span style={{ color: '#292d34', marginRight: '20px', fontSize: '20px', fontWeight: '600' }}>Zoundify</span>
                        </Link>
                    </div>
                    <ul id="nav-mobile" style={{ display: 'flex', alignItems: 'center', listStyle: 'none', margin: 0 }}>
                        <li><Link to="/signin" style={{ color: '#292d34', marginRight: '20px', fontSize: '14px', fontWeight: '500' }}> Don,h have an account ?</Link></li>
                        <li><Link to="/signup" style={{ color: '#292d34', marginRight: '20px', fontSize: '14px', fontWeight: '500' }}><div>Signup</div></Link></li>
                    </ul>
                </div>
            </nav>
            <div className="signin-card">
                <h2>Zoundify</h2>
                <div className="input-field">
                    <label>Email</label>
                    <FontAwesomeIcon icon={faEnvelope} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#777' }} />
                    <input type="email" placeholder="Enter your email" style={inputStyle} />
                </div>
                <div className="input-field">
                    <label>Password</label>
                    <FontAwesomeIcon icon={faLock} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#777' }} />
                    <input type="password" placeholder="Enter your password" style={inputStyle} />
                    <Link to="/forgot-password" className="forgot-password-link">Forgot Password?</Link>
                </div>
                <button className="login-button" style={{
                    transition: 'background-color .2s cubic-bezier(.785,.135,.15,.86) 0s',
                    backgroundColor: '#7b68ee',
                    height: '50px',
                    fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,roboto,Helvetica Neue,helvetica,arial,sans-serif',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '0',
                    borderRadius: '9px',
                    width: '100%',
                    marginBottom: '22px'
                }}>Login</button>
                <button className="google-signin-button" style={{
                    transition: 'background-color .2s cubic-bezier(.785,.135,.15,.86) 0s',
                    backgroundColor: '#7b68ee',
                    height: '50px',
                    fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,roboto,Helvetica Neue,helvetica,arial,sans-serif',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '0',
                    borderRadius: '9px',
                    width: '100%',
                    marginBottom: '22px'
                }}>Sign in with Google</button>
            </div>
            <button className="help-button">Help</button>
        </div>
    );
};

// const inputStyle = {
//     height: '40px',
//     borderRadius: '8px',
//     border: '1px solid #ccc',
//     paddingLeft: '30px', // Adjusted padding for the icon
//     marginBottom: '10px',
//     display: 'block', // Ensure the input fields are block elements
//     width: '100%', // Make the input fields take up the full width
//     boxSizing: 'border-box', // Ensure padding and border are included in the width
//     lineHeight: '40px', // Center vertically
// };
const inputStyle = {
    height: '40px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    marginBottom: '20px',
    display: 'block', 
    width: '100%', // Adjusted width to match the buttons
    boxSizing: 'border-box', 
    lineHeight: '40px',
    textAlign: 'left', // Align text to the left
};


export default Home;
