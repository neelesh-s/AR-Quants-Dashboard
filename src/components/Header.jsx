import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai';

import { RiNotification2Line } from 'react-icons/ri';
import GraphPieIcon from '../Icons/GraphPieIcon'

const Header = () => {
    return (
        <div className='flex justify-between items-center bg-blue-800'>
            <div ><AiOutlineMenu size={30} /></div>
            <div className='flex flex-row items-center justify-center'>
                <div className=' '><GraphPieIcon /></div>
                <div className='text-3xl text-white font-lg py-auto '>
                    YODHA
                </div>
            </div>

            <div><RiNotification2Line size={30} /></div>

        </div>
    )
}

export default Header