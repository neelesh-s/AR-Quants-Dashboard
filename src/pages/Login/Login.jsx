import React from 'react'
import './Login.css'
import GraphPieIcon from '../../Icons/GraphPieIcon'
import Zirodha from '../../Icons/Zirodha'
import icici from '../../images/icici.png'
import Nuvama from '../../images/Nuvama.png'
import { useState } from 'react'
const Login = () => {

  const [active, setActive] = useState(true);

  const changeState = () => {
    setActive(false);
  }
  const changeStateTo = () => {
    setActive(true);
  }


  return (
    <div className='login-container'>
      {/* graph-image */}
      <div className="custom-graph-img-right"></div>

{/* left side container */}
      <div className="w-3/5 flex items-center lg:flex hidden px-lg-5 px-3">
{/* left side container to keep the content center vertical and horizontaly*/}
        <div className="custom-content-container px-lg-5 px-3 ">
          <h3 className="h3">Implement Your Strategies in Real-Time</h3>
          <p>Step into the world of live trading by deploying your meticulously crafted strategies in real-time. Put your trading ideas to the test and experience the dynamic realm of actual market execution. Get ready to see how your strategies perform when facing the challenges and opportunities of the live trading environment.</p>
        </div>
      </div>
{/*right side form container */}
      <div className="custom-form">
        <div className='custom-form-child'>
          <div className='heading d-flex justify-content-center align-items-center mb-3'><GraphPieIcon /> <p>Yodha</p></div>
          <div className="custom-form-parent">
            <div className="custom-inputs-container">
              <div className="login-signUp-container ">
                <button onClick={() => changeState()} className={`${active ? 'for-text' : 'login-only'}`}>Log in</button><button onClick={() => changeStateTo()} className={`${active ? 'signUp-only' : 'for-text'}`}>Sign up</button>
              </div>
              <div className="form-group-container">
                <div className='form-group'>
                  <div>
                    <label htmlFor="Email">Email</label>
                    <input className='form-control' type="email" name="email" id="email" />
                  </div>
                </div>
                <div className='form-group'>
                  <div>

                    <label htmlFor="Password">Password</label>
                    <input className='form-control' type="password" name="password" id="password" />
                  </div>
                </div>
                <div className='forgot-password' >

                  <a href="http://" >Forgot Password?</a>
                </div>
                <div className='login-blue-btn'>

                  <button>Log in</button>
                </div>
                <div className='broker-text-container'>

                  <p >Or continue with your broker</p>
                </div>

                <div className='same-btn-container ' >
                  <div >
                    <button><Zirodha /></button>
                  </div>

                  <div>


                    <button><img src={icici} alt='img' className='icici-image' /></button>
                  </div>
                  <div>

                    <button className='bg-darkblue'><img src={Nuvama} alt='img' /></button>
                  </div>

                </div>
              </div>

            </div>
          </div>
          <div className='term-condition mt-3'>

            <p className='mb-0'>By continuing you agree to our</p>
            <p className='mb-0'>
              terms and conditions</p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Login