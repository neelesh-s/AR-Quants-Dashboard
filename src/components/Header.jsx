import React from 'react'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import GraphPieIcon from '../Icons/GraphPieIcon'

const Header = () => {
    return (
        <div className='flex justify-between items-center bg-blue-800'>
            <div ><MenuOutlinedIcon size={30} className='text-white'/></div>
            <div className='flex flex-row items-center justify-center'>
                <div className=' '><GraphPieIcon /></div>
                <div className='text-3xl text-white font-lg py-auto '>
                    YODHA
                </div>
            </div>

            <div><NotificationsNoneOutlinedIcon size={30} className='text-white' /></div>

        </div>
    )
}

export default Header