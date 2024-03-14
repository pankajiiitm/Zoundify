// import React, { useState } from 'react';
// import DashboardNav from './dashboard/dashboard-nav-components/DashboardNav'
// import DashboardProject from './dashboard/dashboard-project-components/DashboardProject'
// import DashboardSidebar from './dashboard/dashboard-sidebar-components/DashboardSidebar'
// import DashboardUpload from './dashboard/dashboard-project-components/dashboard-project-upload/DashboardUpload';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import "./Dashboard.css"
// const Dashboard = () => {
//     return (
//         // <div className='dashboard-wrap'>
//         //     <div className='dashboard-nav'> <DashboardNav /></div>
//         //     <div className='project'>
//         //         <div className='dashboard-sidebar'><DashboardSidebar /></div>
//         //         <div className='dashboard-project'><DashboardProject /></div>
//         //     </div>

//         // </div>
//         <div className='dashboard-wrap'>
//             <DashboardNav />
//             <div className='project'>
//                 <div className='dashboard-sidebar'><DashboardSidebar /></div>
//                 <div className='dashboard-project'>
//                     <Routes>
//                         <Route  path="/" element={<DashboardContent />} />
//                         <Route path="/uploads" element={<DashboardUpload />} /> {/* Define route for DashboardUpload */}
//                     </Routes>
//                 </div>
//             </div>
//         </div>
//     )


// }

// // const DashboardContent = () => {
// //     const [mediaUploaded, setMediaUploaded] = useState(false);

// //     const handleUploadMedia = () => {
// //         // Logic for uploading media
// //         setMediaUploaded(true);
// //         // Additional logic such as uploading media file and updating state accordingly
// //     };

// //     return mediaUploaded ? <DashboardUpload /> : <DashboardProject onUpload={handleUploadMedia} />;
// // };
// const DashboardContent = () => {
//     return <DashboardProject onUpload={() => {}} />; // Pass a dummy function for now
// };

// export default Dashboard
























import React, { useState } from 'react';
import DashboardNav from './dashboard/dashboard-nav-components/DashboardNav';
import DashboardProject from './dashboard/dashboard-project-components/DashboardProject';
import DashboardSidebar from './dashboard/dashboard-sidebar-components/DashboardSidebar';
import DashboardUpload from './dashboard/dashboard-project-components/dashboard-project-upload/DashboardUpload';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./Dashboard.css";

const Dashboard = () => {
    const [mediaUploaded, setMediaUploaded] = useState(false);

    const handleUploadMedia = () => {
        // Logic for uploading media
        setMediaUploaded(true);
        // Additional logic such as uploading media file and updating state accordingly
    };

    return (
        <div className='dashboard-wrap'>
            <DashboardNav />
            <div className='project'>
                <div className='dashboard-sidebar'><DashboardSidebar /></div>
                <div className='dashboard-project'>
                    <Routes>
                        <Route path="/" element={<DashboardContent handleUploadMedia={handleUploadMedia} />} />
                        <Route path="/uploads" element={<DashboardUpload />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

const DashboardContent = ({ handleUploadMedia }) => {
    return <DashboardProject onUpload={handleUploadMedia} />;
};

export default Dashboard;
