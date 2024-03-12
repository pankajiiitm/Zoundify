// import React from 'react';
// import { Link } from 'react-router-dom'
// import logo from '../screens/logo.png'

// const Navbar = () => {
//     return (
//         // <nav style={{ backgroundColor: '#808080' }}>
//         //     <div className="nav-wrapper  ">
//         //         <Link to="/" className="brand-logo">
//         //             <img src={logo} alt="Logo" style={{ height: '30%', width: 'auto' }} />
//         //         </Link>
//         //         <ul id="nav-mobile" className="right">
//         //             <li><Link to="/signin">Login</Link></li>
//         //             <li><Link to="/signup">Signup</Link></li>   
//         //             <li><Link to="/dashboard">Dashboard</Link></li>
//         //         </ul>
//         //     </div>
//         // </nav>

//         <nav style={{  backgroundColor: 'transparent', boxShadow: 'none', color: 'black', padding: '10px 20px' }}>
//             <div className="nav-wrapper">
//                 <Link to="/" className="brand-logo" style={{ color: 'black' }}>
//                     <img src={logo} alt="Logo" style={{ height: '30%', width: 'auto', marginRight: '10px' }} />
//                 </Link>
//                 <ul id="nav-mobile" className="right">
//                     <li><Link to="/signin" style={{ color: 'black' }}>Login</Link></li>
//                     <li><Link to="/signup" style={{ color: 'black' }}>Signup</Link></li>
//                     <li><Link to="/dashboard" style={{ color: 'black' }}>Dashboard</Link></li>
//                 </ul>
//             </div>
//         </nav>
//     )
// }

// export default Navbar


import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../screens/logo.png';

const Navbar = () => {
    return (
        <nav style={{ backgroundColor: 'transparent', boxShadow: 'none', color: 'black', padding: '10px 20px' }}>
            <div className="nav-wrapper" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Link to="/" className="brand-logo" style={{ color: 'black', display: 'flex', alignItems: 'center' }}>
                        <img src={logo} alt="Logo" style={{ height: '30%', width: 'auto', marginRight: '10px' }} />
                        <span style={{ color: '#292d34', marginRight: '20px', fontSize:'20px', fontWeight:'600' }}>Zoundify</span>
                    </Link>
                </div>
                <ul id="nav-mobile" style={{ display: 'flex', alignItems: 'center', listStyle: 'none', margin: 0 }}>
                    <li><Link to="/signin" style={{ color: '#292d34', marginRight: '20px', fontSize:'14px', fontWeight:'500' }}> Login</Link></li>
                    <li><Link to="/signup" style={{ color: '#292d34', marginRight: '20px', fontSize:'14px', fontWeight:'500' }}><div>Signup</div></Link></li>
                    <li><Link to="/dashboard" style={{ color: '#292d34', marginRight: '20px', fontSize:'14px', fontWeight:'500' }}><div>Dashboard</div></Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;


