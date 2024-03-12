// import React, { useState,useRef, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import axios from 'axios'

// const Signup = () => {
//     const [name, setName] = useState("")
//     const [password, setPassword] = useState("")
//     const [email, setEmail] = useState("")
//     const inputRef = useRef(null);
//     useEffect(() => {
//         if (inputRef.current) {
//             const inputWidth = inputRef.current.offsetWidth;
//             setButtonWidth(inputWidth);
//         }
//     }, []);

//     const [buttonWidth, setButtonWidth] = useState('100%');
//     const Postdata = () => {
//         // fetch("http://localhost:5000/signup", {
//         //     method: "post",
//         //     headers: {
//         //         "Content-Type": "application/json"
//         //     },
//         //     body: JSON.stringify(
//         //         {
//         //             name: "",
//         //             password: "",
//         //             email: ""
//         //         }
//         //     )

//         // }).then(res => res.json())
//         //     .then(data => console.log(data))

//         axios.post("http://localhost:5000/signup", {
//             name: name,
//             password: password,
//             email: email
//         }, {
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         })
//             .then(response => {
//                 console.log(response.data)
//             })
//             .catch(error => {
//                 console.error('Error occurred while signing up:', error);
//             });

//     }
//     return (
//         <div className='mycard'>
//             <div className='card auth-card'>
//                 <h2>Zoundify</h2>
//                 <div className="curved-background" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
//                     <input type="text" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} style={{ ...inputStyle, marginBottom: '10px' }}  ref={inputRef} />
//                     <input type="text" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} style={{ ...inputStyle, marginBottom: '10px' }} />
//                     <input type="text" placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} style={{ ...inputStyle, marginBottom: '10px' }}/>
//                 </div>
//                 <button  className="btn waves-effect waves-light" 
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
//                     }}  onClick={() => { Postdata() }}>Login
//                 </button>
//                 <h5><Link to="/signin"> Already have an accout ?</Link></h5>
//             </div>
//         </div>
//     )
// }

// const inputStyle = {
//     height: '50px',
//     borderRadius: '8px',
//     border: '1px solid #ccc',
//     paddingLeft: '10px',
//     marginBottom: '10px'
// };

// export default Signup




import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons'

const Signup = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const Postdata = () => {
        // Your POST request logic here
    }

    return (
        <div className='mycard'>
            <div className='card auth-card'>
                <h2>Zoundify</h2>
                <div className="curved-background" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
                    <div className="input-field" style={{ position: 'relative' }}>
                        <FontAwesomeIcon icon={faUser} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#777' }} />
                        <input type="text" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
                    </div>
                    <div className="input-field"  style={{ position: 'relative' }}>
                        <FontAwesomeIcon icon={faEnvelope} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#777' }} />
                        <input type="text" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
                    </div>
                    <div className="input-field" style={{ position: 'relative' }}>
                        <FontAwesomeIcon icon={faLock} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#777' }} />
                        <input type="password" placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} style={inputStyle} />
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
                    }} onClick={Postdata}>Signup
                </button>
                <h5><Link to="/signin">Already have an account?</Link></h5>
            </div>
        </div>
    )
}

const inputStyle = {
    height: '40px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    paddingLeft: '40px', // Adjusted padding for the icon
    marginBottom: '10px',
    width: '100%',
    boxSizing: 'border-box', // Ensure padding and border are included in the width
};
// const inputStyle = {
//     height: '40px',
//     borderRadius: '8px',
//     border: '1px solid #ccc',
//     paddingLeft: '40px', // Adjusted padding for the icon
//     marginBottom: '10px',
//     width: 'calc(100% - 50px)', // Adjusted width
//     boxSizing: 'border-box', // Ensure padding and border are included in the width
// };

export default Signup
