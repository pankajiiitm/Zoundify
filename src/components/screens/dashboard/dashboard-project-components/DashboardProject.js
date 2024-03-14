import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add'; // Assuming you're using Material-UI icons
import { Link } from 'react-router-dom';
import './DashboardProject.css'

const DashboardProject = ({ onUpload }) => {
    const [mediaUploaded, setMediaUploaded] = useState(false);

    const handleUploadMedia = () => {
        // Logic for uploading media
        setMediaUploaded(true);
        onUpload(); // Call the onUpload function passed from DashboardContent
        // Additional logic such as uploading media file and updating state accordingly
    };

    // Dummy media list data
    const mediaList = [
        { id: 1, title: 'Media 1', language: 'English', duration: '10:00' },
        { id: 2, title: 'Media 2', language: 'Spanish', duration: '15:30' },
        // Add more media items as needed
    ];

    return (
        <div className="project-container">
            <div className='project-top-bar'>
                <div className="project-top-bar-left">
                    <div className='project-head'>
                        <h5>My Media</h5>
                    </div>

                    <div className='project-list'>
                        <select className="dropdown">
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>

                    </div>

                </div>
                <div className="project-top-bar-right">
                    {/* Upload Media button */}
                    <button className="upload-button" onClick={handleUploadMedia}>
                    <Link to="/uploads" className="upload-media-link">
                        Upload Media
                     </Link>
                    </button>
                </div>
            </div>

            {/* Media list */}
            <div className='project-down-bar'>
                <table className="media-list">
                    <thead>
                        <tr>
                            <th>Media</th>
                            <th>Language</th>
                            <th>Title</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mediaList.map(media => (
                            <tr key={media.id}>
                                <td>{media.title}</td>
                                <td>{media.language}</td>
                                <td>{media.title}</td>
                                <td>{media.duration}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DashboardProject;
