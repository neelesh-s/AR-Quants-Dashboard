import React from 'react'
import './KeyAuthentication.css'
import GraphPieIcon from '../../Icons/GraphPieIcon'
import One from '../../Icons/One'
import Two from '../../Icons/Two'
import Three from '../../Icons/Three'
import Four from '../../Icons/Four'
import Five from '../../Icons/Five'
import Step2 from '../../images/step-2.png'
import Step3 from '../../images/step-3.png'
import Step4 from '../../images/step-4.png'
import Tick from '../../Icons/Tick'

import icici from '../../images/icici.png'






const KeyAuthentication = () => {
    return (
        <>
            <div className='flex custom-height login-container'>
                <div className="custom-graph-img-left "></div>


                <div className="custom-content custom-blue-bg  px-lg-5 px-3 pt-5 overflow-hidden">

                    <div className="custom-content-container rounded-t-2xl bg-white px-lg-5 px-3 relative w-full custom-box-shadow py-5">
                        <div className='text-2xl text-center '>Following are the steps you can follow to start using Breeze API:</div>
                        <div className=" rounded-xl bg-white px-lg-4 px-2 relative w-full custom-box-shadow-2 mt-3 flex py-3">
                            <div><One /></div>
                            <div className='text-sm px-4 '>Start by clicking this link - https://api.icicidirect.com/apiuser/home</div>
                        </div>
                        <div className=" rounded-xl bg-white px-lg-4 px-2 relative w-full custom-box-shadow-2 mt-3 py-3">
                            <div className='flex'>

                                <div><Two /></div>
                                <div>

                                    <div className='text-sm  px-4 pb-2 '>Use ICICI Direct credentials to login</div>
                                    <div>
                                        <img src={Step2} />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className=" rounded-xl bg-white px-lg-4 px-2 relative w-full custom-box-shadow-2 mt-3 py-3">
                            <div className='flex'>

                                <div><Three /></div>
                                <div>

                                    <div className='text-sm  px-4 pb-2'>Click on register an App</div>
                                    <div>
                                        <img src={Step3} />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className=" rounded-xl bg-white px-lg-4 px-2 relative w-full custom-box-shadow-2 mt-3 py-3">
                            <div className='flex'>

                                <div><Four /></div>
                                <div>
                                    <div className='pb-2'>

                                        <div className='text-sm  px-4 '>Fill below details and submit</div>
                                        <div className='text-sm  px-4 '> App Name:</div>
                                        <div className='text-sm px-4 '>Redirected URL:
                                        </div>


                                    </div>

                                    <div>
                                        <img src={Step4} />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className=" rounded-xl bg-white px-lg-4 px-2 relative w-full custom-box-shadow-2 mt-3 py-3">
                            <div className='flex'>

                                <div><Five /></div>
                                <div className='text-sm px-4 pb-2 '>Your App is created now. You can view the list of Apps, along with their App Key and Secret Key, in the view apps section on the homepage. Note: Registering an App is a one-time activity. </div>
                            </div>

                        </div>

                    </div>
                </div>

                <div className="custom-form">
                    <div className='custom-form-child'>
                        <div className="custom-form-parent">
                            <div className='term-condition mt-3'>

                                <img src={icici} alt='image' />
                            </div>
                            <div className="">

                                <div className="form-group-container">
                                    <div className='form-group'>
                                        <div >
                                            <label htmlFor="Email" className='text-white'>Api key</label>
                                            <input className='form-control' type="text" name="Api-key" id="text" />
                                        </div>
                                    </div>
                                    <div className='form-group'>
                                        <div>

                                            <label htmlFor="Password" className='text-white'>Secret key</label>
                                            <input className='form-control' type="text" name="Secret-key" id="text" />
                                        </div>
                                    </div>

                                    <div className='authenticate-dark-yellow-btn flex justify-center '>

                                        <button class="bg-blue-500 flex  text-white font-bold py-2 px-4 mt-3 w-4/6 rounded">
                                            <span className='mr-2'>

                                                <Tick />
                                            </span>
                                            Authenticate
                                        </button>
                                    </div>



                                </div>

                            </div>
                        </div>
                        <div className='term-condition mt-6 relative'>

                            <div className='heading d-flex justify-content-center align-items-end mb-3'><GraphPieIcon /> <p>Yodha</p></div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default KeyAuthentication