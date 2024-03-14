// import React from 'react'
// import './DashboardSidebar.css'
// import HomeIcon from '@mui/icons-material/Home';
// import MovieIcon from '@mui/icons-material/Movie';
// import FileUploadIcon from '@mui/icons-material/FileUpload';
// import GroupsIcon from '@mui/icons-material/Groups';
// import AddIcon from '@mui/icons-material/Add';
// import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
// import QueryStatsIcon from '@mui/icons-material/QueryStats';
// import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';

// const DashboardSidebar = () => {
//     return (
//         <div className="dashboard-sidebar">
//             <div className="home-compartment">
//                 <div className='home-icon'> <HomeIcon/> <span>Home</span></div>
//                 <div className='media-icon'>  <span> <MovieIcon/> My Media</span></div>
//                 <div className='upload-icon'> <span> <FileUploadIcon/> My Uploads</span></div>
//             </div>
//             <div className="project-compartment">
//                 <span>Project</span>
//                 <AddIcon/>
//              {/* Dynamic number of projects */}
//             </div>
//             <div className="team-compartment">
//                 <GroupsIcon/>
//                 <span>My Team</span>
//             </div>
//             <div className="voice-compartment">
//                 <RecordVoiceOverIcon/>
//                 <span>Voice</span>
//                 <span>My Voices</span>
//             </div>
//             <div className="statistic-compartment">
//                 <QueryStatsIcon/>
//                 <span>Statistics</span>
//             </div>
//             <div className="setting-compartment">
//                 <SettingsSuggestIcon/>
//                 <span>Settings</span>
//             </div>
//         </div>

//     )
// }

// export default DashboardSidebar

import React from 'react';
import './DashboardSidebar.css';
import HomeIcon from '@mui/icons-material/Home';
import MovieIcon from '@mui/icons-material/Movie';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import GroupsIcon from '@mui/icons-material/Groups';
import AddIcon from '@mui/icons-material/Add';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';

const SidebarItem = ({ icon, text }) => {
    return (
        <div className="compartment-wrapper">
            <div className="compartment">
                <div className="icon">{icon}</div>
                <div className="text">{text}</div>
            </div>
        </div>

    );
};

const DashboardSidebar = () => {
    return (
        <div className="dashboard-sidebar">
            <div className="compartment home-compartment"> {/* Apply 'home-compartment' class */}
                <div className="icon"><HomeIcon /></div>
                <div className="text">Home</div>
            </div>
            <SidebarItem icon={<MovieIcon />} text="My Media" />
            <SidebarItem icon={<FileUploadIcon />} text="My Uploads" />
            <SidebarItem icon={<AddIcon />} text="Project" />
            <SidebarItem icon={<GroupsIcon />} text="My Team" />
            <SidebarItem icon={<RecordVoiceOverIcon />} text="Voice" />
            <SidebarItem icon={<QueryStatsIcon />} text="Statistics" />
            <SidebarItem icon={<SettingsSuggestIcon />} text="Settings" />
        </div>
    );
};

export default DashboardSidebar;

