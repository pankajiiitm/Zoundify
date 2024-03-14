import React from 'react'
import SettingsVoiceIcon from '@mui/icons-material/SettingsVoice';
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import FormatShapesOutlinedIcon from '@mui/icons-material/FormatShapesOutlined';
import './DashboardNewProject.css'

const DashboardNewProject = () => {
    return (
        <div className='new-project-wrapper'>
            <div className='new-project-section new-project-section'>new project input</div>
            <div className='new-project-record-section new-project-section'>
                <div className='microphone-file-text'>
                    <div className='microphone microphone-file-text-div'><KeyboardVoiceOutlinedIcon /> <span>Microphone</span></div>
                    <div className='file microphone-file-text-div'> <CloudDownloadOutlinedIcon /> <span>File</span></div>
                    <div className='text microphone-file-text-div'><FormatShapesOutlinedIcon /> <span>Test</span></div>
                </div>
                <div className='record-icon'><SettingsVoiceIcon style={{ fontSize: 120 }} /></div>
                <div className='record-button'><button>Start recording</button></div>
            </div>
            <div className='new-project-text-section new-project-section'>
                <h3>Tips for getting the highest quality recording</h3>
                <ul>
                    <li>This is tips number 1</li>
                    <li>This is tips number 2</li>
                    <li>This is tips number 3</li>
                </ul>

            </div>
        </div>
    )
}