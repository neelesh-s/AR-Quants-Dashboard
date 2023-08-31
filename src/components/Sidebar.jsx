import React from 'react'
import './../App.css'
import { AiFillPieChart } from 'react-icons/ai';
import { BsGrid1X2Fill } from 'react-icons/bs';
import { HiBackward } from 'react-icons/hi2';
import { FaChartLine } from 'react-icons/fa';
import { GoPersonFill } from 'react-icons/go';
import { BiMessageAltDetail } from 'react-icons/bi';
import { RiSettings4Fill } from 'react-icons/ri';
import { BsTranslate } from 'react-icons/bs';


const size = 25


const Sidebar = () => {





    return (
        <div className='blue sidebar'  >
            <section >
                <div><AiFillPieChart size={size}/></div>
                <div><BsGrid1X2Fill size={size}/></div>
                <div> <HiBackward size={size}/></div>
                <div><FaChartLine size={size}/></div>
                <div><GoPersonFill size={size}/></div>
                <div><BiMessageAltDetail size={size}/></div>
            </section>
            <section>
                <div><RiSettings4Fill size={size}/></div>
                <div><BsTranslate size={size}/></div>
            </section>
        </div>
    )
}

export default Sidebar