import React from 'react'
import SettingsVoiceIcon from '@mui/icons-material/SettingsVoice';
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import FormatShapesOutlinedIcon from '@mui/icons-material/FormatShapesOutlined';
import './DashboardNewProject.css'

const DashboardNewProject = () => {
    return (
        <div className='new-project-wrapper'>
            <div className='new-project-input-section new-project-section'>
                <div className='project-harder'> New Project</div>
                <div className='project-name'>
                    <lebel>Project Name</lebel>
                    <input type="text" id="Pname" name="Pname"></input>
                </div>
                <div className='privacy'>
                    <lebel>Project Name</lebel>
                    <input type="text" id="Pname" name="Pname"></input>
                </div>
                <div className='favourite-voices'>
                    <div class='rounded-div'></div>
                    <div class='rounded-div'></div>
                    <div class='rounded-div'></div>
                    <div class='rounded-div'></div>
                </div>
                <div className='create-proj-btn'>
                    <button>Create Project</button>
                </div>
            </div>
            <div className='new-project-record-section new-project-section'>
                <div className='microphone-file-text new-project-section-media'>
                    <div className='microphone microphone-file-text-div'><KeyboardVoiceOutlinedIcon /> <span>Microphone</span></div>
                    <div className='file microphone-file-text-div'> <CloudDownloadOutlinedIcon /> <span>File</span></div>
                    <div className='text microphone-file-text-div'><FormatShapesOutlinedIcon /> <span>Test</span></div>
                </div>
                <div className='record-icon new-project-section-media'><SettingsVoiceIcon style={{ fontSize: 120 }} /></div>
                <div className='record-button new-project-section-media'><button className='recording-btn'>Start recording</button></div>
            </div>
            <div className='new-project-text-section new-project-section'>
                <h5>Tips for getting the highest quality recording</h5>
                <ul>
                    <li>This is tips number 1</li>
                    <li>This is tips number 2</li>
                    <li>This is tips number 3</li>
                </ul>

            </div>
        </div>
    )
}

export default DashboardNewProject