import React from 'react'
import './UserNuvama.css'
import nuvama from '../../images/n.jpg'
import GraphPieIcon from '../../Icons/GraphPieIcon'


const UserNuvama = () => {
    return (
        <>
            <div className="h-screen flex relative overflow-hidden ">
                <div className="graph-img"></div>
                <div className="custom-blue-bg w-full">
                    <div className='w-5/5 flex justify-center items-center flex-col h-4/5	'>

                        <div className="w-full flex justify-center items-center flex-col   ">
                            <div className="bg-dark-blue text-white z-10 p-4 relative custom-box-shadow">
                                <div className='custom-heading text-center text-white pb-2'>
                                    ICICI Securities User Authentication
                                </div>
                                <div className='flex justify-center pb-3'>
                                    <img src={nuvama} alt="icici-img" className='w-52' />

                                </div>
                                <div className='pb-4'>
                                    <label for="first_name" class="block text-xs text-gray-900 text-white">ICICIDIRECECT User id</label>
                                    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                                </div>




                            </div>

                        </div>


                    </div>
                    <div className='z-10 relative flex items-center justify-center custom-footer'><GraphPieIcon /> <p className='custom-p mb-0 '>Yodha</p></div>
                </div>

            </div>
        </>
    )
}

export default UserNuvama