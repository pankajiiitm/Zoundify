// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// const Signin = () => {
//     return (
//         <div className='mycard'>
//             <div className='card auth-card'>
//                 <h2>Zoundify</h2>
//                 <div className="curved-background" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
//                     <input type="text" placeholder='Enter your email' style={inputStyle} />
//                     <input type="text" placeholder='Enter password' style={inputStyle} />
//                 </div>
//                 <button className="btn waves-effect waves-light"
//                     style={{
//                         transition: 'background-color .2s cubic-bezier(.785,.135,.15,.86) 0s',
//                         backgroundColor: '#7b68ee',
//                         height: '50px',
//                         fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,roboto,Helvetica Neue,helvetica,arial,sans-serif',
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         border: '0',
//                         borderRadius: '9px',
//                         width: '100%',
//                         marginBottom: '22px'
//                     }} >Login
//                 </button>
//                 <h5><Link to="/signup"> Don,t have an accout ?</Link></h5>

//             </div>
//         </div>
//     )
// }

// const inputStyle = {
//     height: '40px',
//     borderRadius: '8px',
//     border: '1px solid #ccc',
//     paddingLeft: '10px',
//     marginBottom: '10px'
// };

// export default Signin




import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'

const Signin = () => {
    return (
        <div className='mycard'>
            <div className='card auth-card'>
                <h2>Zoundify</h2>
                <div className="curved-background" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
                    <div className="input-field" style={{ position: 'relative' }}>
                        <FontAwesomeIcon icon={faEnvelope} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#777' }} />
                        <input type="text" placeholder='Enter your email' style={inputStyle} />
                    </div>
                    <div className="input-field" style={{ position: 'relative' }}>
                        <FontAwesomeIcon icon={faLock} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#777' }} />
                        <input type="password" placeholder='Enter password' style={inputStyle} />
                    </div>
                </div>
                <button className="btn waves-effect waves-light"
                    style={{
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
                    }} >Login
                </button>
                <h5><Link to="/signup"> Don't have an account?</Link></h5>
            </div>
        </div>
    )
}

// const inputStyle = {
//     height: '40px',
//     borderRadius: '8px',
//     border: '1px solid #ccc',
//     paddingLeft: '30px', // Adjusted padding for the icon
//     marginBottom: '10px'
// };
const inputStyle = {
    height: '40px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    paddingLeft: '30px', // Adjusted padding for the icon
    marginBottom: '10px',
    display: 'block', // Ensure the input fields are block elements
    width: '100%', // Make the input fields take up the full width
    boxSizing: 'border-box', // Ensure padding and border are included in the width
    lineHeight: '40px', // Center vertically
};

export default Signin


