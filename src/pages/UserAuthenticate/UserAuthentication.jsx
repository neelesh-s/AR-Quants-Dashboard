import React from 'react'
import './UserAuthetication.css'
import GraphPieIcon from '../../Icons/GraphPieIcon'
import icici from '../../images/icici.png'

const UserAuthentication = () => {
    return (
        <>
            <div className="h-screen flex relative overflow-hidden">
{/* graph-image */}
                <div className="graph-img"></div>



                <div className="custom-blue-bg w-full ">
                    <div className='w-5/5 flex justify-center items-center flex-col h-4/5	'>

                        <div className="w-full flex justify-center items-center flex-col   ">
                            <div className="custom-bg-white z-10 p-4 relative custom-box-shadow">
                                <div className='custom-heading text-center pb-2'>
                                    ICICIDIRECT User Authentication
                                </div>
                                <div className='flex justify-center pb-3'>
                                    <img src={icici} alt="icici-img" className='w-52' />

                                </div>
                                <div className='pb-4'>
                                    <label for="first_name" class="block text-xs text-gray-900 ">ICICIDIRECECT User id</label>
                                    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                                </div>

                                <div className='text-center '>
                                    <button className='custom-blue-bg py-1 px-5 text-white	rounded-lg		 '>Log in</button>
                                </div>


                            </div>

                        </div>


                    </div>
                    {/* footer */}
                    <div className='z-10 relative flex items-center justify-center custom-footer'><GraphPieIcon /> <p className='custom-p mb-0 '>Yodha</p></div>
                </div>

            </div>
        </>
    )
}

export default UserAuthentication