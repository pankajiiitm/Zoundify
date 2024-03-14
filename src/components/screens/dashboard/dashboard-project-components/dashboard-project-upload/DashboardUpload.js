import React, { useState } from 'react';
import './DashboardUpload.css'
import CloseIcon from '@mui/icons-material/Close';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
const DashboardUpload = () => {


    return (
        <div className='upload-wrapper'>
            <div className='upload-div'>
                <div className='upload-text'>
                    <h5>Uploads Media</h5>
                    <span><CloseIcon/></span>
                </div>
                <div className='project-upload'>
                    <div className='upload-icon'> <CloudUploadIcon style={{ fontSize: 120 }} /></div>
                    <div className='upload-heading'>
                        <h5> Drag & Drop</h5>

                    </div>
                    <div className='upload-para'>
                        <p>or select files from device max. 50MB</p>
                    </div>

                </div>
                <div className='add-details'>
                    <div className='add-name'>
                        {/* <button>Add Title</button> */}
                        Add a title
                    </div>
                    <div className='add-language'>
                       Select a language
                    </div>

                </div>

                <div className='add-done'>
                    <div className='reset'> <button> <RestartAltIcon/> Reset</button></div>
                    <div className='done'> <button> <TaskAltIcon/> Done</button></div>
                </div>

            </div>

        </div>

    )

}

export default DashboardUpload