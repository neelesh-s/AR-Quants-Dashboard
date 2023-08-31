import React from 'react'
import { GoPersonFill } from 'react-icons/go';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiSolidCoinStack } from 'react-icons/bi';
import flag from '../images/flag.jpg'
import { RiNotification2Line } from 'react-icons/ri';



const data = [
    {
        name: "nifty",
        rate: "13564 ",
        green: "0.68",
        icon: "50"

    },
    {
        name: "Bankini",
        rate: "13564 ",
        green: "0.68",
        icon: <BiSolidCoinStack />

    },
    {
        name: "India VI",
        rate: "13564 ",
        green: "0.68",
        icon: <img src={flag} style={{
            height: "24px",
            width: "24px",
            borderRadius: "50%"
        }} />



    }

]

const Navbar = () => {
    return (
        <div className='d-lg-flex d-block justify-content-between flex-wrap p-4 align-items-start'>
            <div className='d-lg-flex d-block justify-content-between   nav-first-child' >
                <div className='d-flex'><div className='profile-pic'><GoPersonFill /></div><h4>hii Arjun</h4></div>
                <div className='seventy' >
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <button class=" bg-transparent search-btn px-3 py-1" id="btnGroupAddon" style={{ fontSize: "25px" }}><AiOutlineSearch /></button>
                        </div>
                        <input type="text" class=" bg-transparent search" style={{ width: "80%" }} placeholder="Search" aria-label="Input group example" aria-describedby="btnGroupAddon" />
                    </div>

                </div>
            </div>

            <div className='d-flex list text-center'>
                {
                    data && data.map((item, index) => (
                        <div>
                            <div className='icons'>
                                {index === 0 ? <span style={{ backgroundColor: "#201b6c", color: "#fff", fontSize: "12px", borderRadius: "50%", padding: "5px" }}>{item.icon}</span> : index === 1 ? <span style={{ backgroundColor: "#447c45", borderRadius: "50%", padding: "2px 4px" }}>{item.icon}</span> : index === 2 ? <span>{item.icon}</span> : ""}
                                <span>{item.name} </span></div>
                            <div className='name'>({item.rate} + <span> {item.green} )</span></div>
                        </div>
                    ))
                }

            </div>

            <div>
                <button className='notify-btn shadow'> <RiNotification2Line /></button>
            </div>
        </div>
    )
}

export default Navbar