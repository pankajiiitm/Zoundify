import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../auth/logo.png'; // Import your company logo as SVG
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import Form from "../Form/Form";
import Header from "../Header/Header";
import "./Home.css"

const Home = () => {
    return (
        <div className="login-page-new">
            <Header />
            <div className="login-page-new__main">
                {/*Background Image */}
                <div className="login-page-new__main-bg "></div>
                <div className="login-page-new__main-container">
                    <Form />
                </div>
            </div>
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
