import React from 'react'
import logo from '../../../screens/logo.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';
import './Dashboardnav.css';
import { green } from '@mui/material/colors';
const DashboardNav = () => {
    return (
        <div className="dashboard-nav">
            <div className="left">
                {/* Company logo */}
                <img src={logo} alt="Company Logo" className="logo" />
                {/* Create button */}
                <button className="create-button">
                    <span className="create-icon-container">
                        <AddIcon style={{ color: 'white', fontSize: 24 }} />
                    </span>
                    <span className="create-text">Create</span></button>
            </div>
            <div className="right">
                {/* Days left text */}
                <span className="days-left">25 days left</span>
                {/* Add billing button */}
                <button className="add-billing">Add Billing</button>
                {/* Profile logo */}
                <AccountCircleIcon style={{ fontSize: 32 }} />
            </div>
        </div>
    )
}

export default DashboardNav