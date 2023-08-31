import React from 'react'
import './Zerodha.css'
import KiteLogo from '../../Icons/KiteLogo'
import GraphPieIcon from '../../Icons/GraphPieIcon'

const Zerodha = () => {
    return (
        <>
            <div className="h-screen flex relative overflow-hidden">

                <div className="graph-img"></div>



                <div className="custom-blue-bg w-full">
                    <div className='w-5/5 flex justify-center items-center flex-col h-4/5	'>

                        <div className="w-full flex justify-center items-center flex-col   ">
                            <div className="custom-bg-white z-10 p-4 relative custom-box-shadow">
                                <div className='custom-heading text-center pb-3'>
                                    ZERODHA User Authentication
                                </div>
                                <div className='flex justify-center items-center pb-3'>
                                    <KiteLogo /> <p className='mb-0 text-base	 '>Kite Connect</p>
                                </div>
                                <div className='pb-4'>
                                    <label for="first_name" class="block text-xs text-gray-900 ">Zerodha User id</label>
                                    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                                </div>

                                <div className='text-center '>
                                    <button className='custom-blue-bg py-1 px-5 text-white	rounded-lg'>Log in</button>
                                </div>


                            </div>

                        </div>


                    </div>
                    <div className='z-10 relative flex items-center justify-center custom-footer '><GraphPieIcon /> <p className='custom-p mb-0 '>Yodha</p></div>
                </div>

            </div>
        </>
    )
}

export default Zerodha