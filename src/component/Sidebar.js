import React from 'react'
import '../css/sidebar.css'
import logo from '../images/OIP.jpg'
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
export const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='container'>

                <img src={logo} alt="" />
                <div className='name_prof'>
                    <div className='name'>Dr. Krishnanand </div>
                    <a href="google.com">Visit profile</a>
                </div>
            </div>
            <div className='menu'>
                <div className='menu-item'>
                    <div className='icons'>
                        <AutoDeleteIcon />

                    </div>
                    <span>
                        dashbaord
                    </span>
                </div>

            </div>
        </div>
    )
}
export default Sidebar
