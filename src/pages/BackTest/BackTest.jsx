import React, { useState } from 'react'
import './BackTest.css'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header';
import { AiOutlineSearch } from 'react-icons/ai';
import { DeleteOutlineTwoTone, Login } from '@mui/icons-material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';





function BackTest() {
    const [bg, setBg] = useState(1);
    const [backg, setBackg] = useState(1);
    const [backgr, setBackgr] = useState(1);

    const [activeButton, setActiveButton] = useState(null);
    const [actBut, setActBut] = useState(null);
    const [befRadio, setBefRadio] = useState(null);
    const [beforeRadio, setBeforeRadio] = useState(null)
    const [bRadio, setBRadio] = useState(null);

    const [divs, setDivs] = useState([]);
    const [divs2,setDivs2] = useState([])
    // the above is for the add conditions button in entry conditions
    const addDiv = () => {
        setDivs([...divs, true]);
    };

    const addDiv2 = () => {
        setDivs2([...divs2, true]);
    };


    
    //   this above is to add a new div when onclicked on add conditions

    const deleteDiv = (index) => {
        const updatedDivs = [...divs];
        updatedDivs.splice(index, 1); // Remove the div2 at the specified index
        setDivs(updatedDivs);
    }
        const deleteDiv2 = (index1) => {
            const updatedDivs2 = [...divs2];
            updatedDivs2.splice(index1, 1); // Remove the div2 at the specified index
            setDivs2(updatedDivs2);
    };

    //   above code is to delete div on clicked on bin icon


    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    }
    const handle = (button) => {
        setActBut(button);
    };
    const handleRadio = (e) => {
        setBefRadio(e.target.value);
    }
    const handleTwoRadio = (e) => {
        setBeforeRadio(e.target.value)
    }
    const handleThreeRadio = (e) => {
        setBRadio(e.target.value)
    };


    return (
        <>
            <div className='App flex flex-col md:flex-row '>


                <div style={{ width: "8%" }} className="hidden md:block md:sidebar-parent ">
                    <Sidebar />
                </div>
                <div className='block md:hidden'>
                    <Header />
                </div>

                <div className="div-one md:mt-8 md:mx-4 lg:mx-10 flex flex-col w-full relative">


                    <div className='div-two md:mt-10 md:mx-10  '>
                        <div className='md:mx-8 p-4 flex flex-col md:mb-0 mb-8'>
                            <h1 className='text-gray-900 flex items-center justify-center my-1 lg:justify-start font-poppins text-4xl font-medium '>Backtest </h1>
                            <p className='text-gray-600 font-poppins text-sm font-normal my-1 leading-normal py-2 md:block hidden' >Backtest your trading ideas using historical data to gauge their potential performance. Analyze how your strategy would have performed in the past to make informed decisions for the future.
                                Fine-tune your approach and gain valuable insights with thorough backtesting.</p>
                            <div className='flex flex-col lg:flex-row my-1 w-full'>
                                <div className="flex flex-col md:flex-row justify-center items-start lg:items-center md:space-x-4 lg:w-1/2 w-full border-r-gray-900 h-full">
                                    <div className="text-xl font-['Poppins'] my-2 font-medium text-[#242424] ">
                                        Chart type
                                    </div>
                                    <div className="flex border-solid my-2 h-4 border rounded-lg justify-center items-center mx-auto">

                                        <button onClick={() => setBg(0)} className={`p-1 rounded-l-lg text-base ${bg == 0 ? 'bg-yellow-500 text-white' : 'bg-white text-black'}  focus:outline-none font-thin border border-transparent`}>Candle Stick</button>
                                        <button onClick={() => setBg(1)} className={`p-1 rounded-r-lg text-base ${bg == 1 ? 'bg-yellow-500 text-white' : 'bg-white text-black'} focus:outline-none font-thin border border-transparent`}>Haikel-Ashi</button>
                                    </div>

                                </div>
                                <div className='flex flex-col lg:flex-row justify-center lg:justify-evenly lg:w-1/2 w-full '>
                                    <div className="text-xl my-2 font-['Poppins'] font-medium text-[#242424] w-1/5">
                                        Interval
                                    </div>

                                    <div className="flex justify-evenly  items-center w-full lg:w-4/5">
                                        <button
                                            className={`${activeButton === '5min' ? 'bg-yellow-500 text-white' : 'bg-white text-black'
                                                } p-1 rounded-lg text-base border border-transparent `}
                                            onClick={() => handleButtonClick('5min')}
                                        >
                                            5 min
                                        </button>
                                        <button
                                            className={`${activeButton === '15min' ? 'bg-yellow-500 text-white' : 'bg-white text-black'
                                                } p-1 text-base rounded-lg border border-transparent `}
                                            onClick={() => handleButtonClick('15min')}
                                        >
                                            15 min
                                        </button>
                                        <button
                                            className={`${activeButton === '30min' ? 'bg-yellow-500 text-white' : 'bg-white text-black'
                                                } p-1 text-base rounded-lg border border-transparent `}
                                            onClick={() => handleButtonClick('30min')}
                                        >
                                            30 min
                                        </button>
                                        <button
                                            className={`${activeButton === '1day' ? 'bg-yellow-500 text-white' : 'bg-white text-black'
                                                } p-1 text-base rounded-lg border border-transparent `}
                                            onClick={() => handleButtonClick('1day')}
                                        >
                                            1 day
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col my-1 lg:flex-row lg:justify-start  lg:w-full w-full '>
                                <div className="text-xl my-2 font-['Poppins'] font-medium text-[#242424] lg:w-1/5 left-0">
                                    Trade type
                                </div>

                                <div className="flex justify-evenly my-1 lg:items-center lg:w-3/5 mb-2">
                                    <button
                                        className={`${actBut === 'Positional EQ' ? 'bg-yellow-500 text-white' : 'bg-white text-black'
                                            } p-1 text-base rounded-lg border border-transparent `}
                                        onClick={() => handle('Positional EQ')}
                                    >
                                        Positional EQ
                                    </button>
                                    <button
                                        className={`${actBut === 'Intradey EQ' ? 'bg-yellow-500 text-white' : 'bg-white text-black'
                                            } p-1 text-base rounded-lg border border-transparent `}
                                        onClick={() => handle('Intradey EQ')}
                                    >
                                        Intradey EQ
                                    </button>
                                    <button
                                        className={`${actBut === 'Options' ? 'bg-yellow-500 text-white' : 'bg-white text-black'
                                            } p-1 text-base rounded-lg border border-transparent hidden lg:block`}
                                        onClick={() => handle('Options')}
                                    >
                                        Options
                                    </button>
                                    <button
                                        className={`${actBut === 'Intraday' ? 'bg-yellow-500 text-white' : 'bg-white text-black'
                                            } p-1 text-base rounded-lg border border-transparent hidden lg:block`}
                                        onClick={() => handle('Intraday')}
                                    >
                                        Intraday
                                    </button>
                                </div>
                                <div className="flex justify-evenly  my-1 lg:hidden ">
                                    <button
                                        className={`${actBut === 'Options' ? 'bg-yellow-500 text-white' : 'bg-white text-black'
                                            } p-1 text-base rounded-lg border border-transparent `}
                                        onClick={() => handle('Options')}
                                    >
                                        Options
                                    </button>
                                    <button
                                        className={`${actBut === 'Intraday' ? 'bg-yellow-500 text-white' : 'bg-white text-black'
                                            } p-1 text-base rounded-lg border border-transparent `}
                                        onClick={() => handle('Intraday')}
                                    >
                                        Intraday
                                    </button>
                                </div>

                            </div >
                            <div className='flex flex-col my-1 lg:flex-row lg:justify-start lg:items-center items-start lg:w-auto w-auto ' >
                                <div className="text-xl my-2 font-['Poppins'] font-medium text-[#242424] lg:w-1/2 left-0">
                                    Select Instrument
                                </div>
                                <div className='flex flex-row rounded-md items-center text-base border border-transparent h-full lg:w-auto w-full'>

                                    <select name="equity" id="equity" className=' px-2'>
                                        <option selected className='text-black text-base font-normal'>Equity
                                        </option>
                                    </select>


                                    <div className='flex flex-row border border-gray-400 text-base px-2 items-center justify-center'>
                                        <div><AiOutlineSearch size={16} /></div>
                                        <input type="Search" placeholder='Search Instrument' className='text-base' />
                                    </div>


                                </div>
                                <div className='flex flex-row items-center my-1 justify-center lg:justify-start w-full'>
                                    <div className=' items-center justify-center inline-flex ml-4'>
                                        <input type="radio" id='radio-1' name='radio-1'
                                            onClick={handleRadio} className='hidden' value="radio-1" />
                                        <span className={`w-3 h-3 inline-block rounded-full border-2 border-gray-600
                                        ${befRadio === 'radio-1' ? 'bg-yellow-500' : 'bg-white'}`}></span>
                                        <label htmlFor="radio-1" className='text-base mx-1'>Index</label>
                                    </div>
                                    <div className='flex flex-row items-center justify-center ml-4'>
                                        <input type="radio" id='radio-2' name='radio-2' className='hidden' checked={befRadio}
                                            onClick={handleRadio} value="radio-2" />
                                        <span className={`w-3 h-3 inline-block rounded-full border-2 border-gray-600
                                        ${befRadio === 'radio-2' ? 'bg-yellow-500' : 'bg-white'}`}></span>
                                        <label htmlFor="radio-2" className="text-base mx-1">Stock</label>
                                    </div>

                                </div>


                            </div>
                            <div className='w-full flex lg:flex-row my-1 flex-col'>
                                <div className='flex flex-row  lg:justify-start justify-evenly lg:items-center mx-auto items-center lg:w-1/3 w-full ' >
                                    <div className="text-xl my-2 font-['Poppins'] font-medium text-[#242424] w-auto lg:left-0 ">
                                        Stirke selection
                                    </div>
                                    <div className='flex flex-row  items-center justify-center text-base  h-full lg:w-1/3 w-auto'>

                                        <select name="" id="atm" className=' px-2 border border-gray-500 rounded-md'>
                                            <option selected className='text-black text-base font-normal'>ATM
                                            </option>
                                        </select>
                                    </div>

                                </div>
                                <div className='flex lg:flex-row justify-evenly  lg:justify-start items-center lg:w-1/3 w-full'>
                                    <div className="text-xl my-2 font-['Poppins'] font-medium text-[#242424] ">Option Type</div>
                                    <div className=' items-center justify-center inline-flex ml-4'>
                                        <input type="radio" id='radio-3' name='radio-3'
                                            onClick={handleTwoRadio} className='hidden' value="radio-3" />
                                        <span className={`w-3 h-3 inline-block rounded-full border-2 border-gray-600
                                        ${beforeRadio === 'radio-3' ? 'bg-yellow-500' : 'bg-white'}`}></span>
                                        <label htmlFor="radio-3" className='text-sm mx-1'>Call</label>
                                    </div>
                                    <div className='flex flex-row items-center justify-center ml-4'>
                                        <input type="radio" id='radio-4' name='radio-4' className='hidden' checked={befRadio}
                                            onClick={handleTwoRadio} value="radio-4" />
                                        <span className={`w-3 h-3 inline-block rounded-full border-2 border-gray-600
                                        ${beforeRadio === 'radio-4' ? 'bg-yellow-500' : 'bg-white'}`}></span>
                                        <label htmlFor="radio-4" className="text-sm mx-1">Put</label>
                                    </div>

                                </div>
                                <div className='flex lg:flex-row  justify-evenly lg:justify-start items-center lg:w-1/3 w-full'>
                                    <div className="text-xl my-2 font-['Poppins'] font-medium text-[#242424] ">Action Type</div>
                                    <div className=' items-center justify-center inline-flex ml-4'>
                                        <input type="radio" id='radio-3' name='radio-3'
                                            onClick={handleThreeRadio} className='hidden' value="radio-3" />
                                        <span className={`w-3 h-3 inline-block rounded-full border-2 border-gray-600
                                        ${bRadio === 'radio-3' ? 'bg-yellow-500' : 'bg-white'}`}></span>
                                        <label htmlFor="radio-3" className='text-sm mx-1'>Buy</label>
                                    </div>
                                    <div className='flex flex-row items-center justify-center ml-4'>
                                        <input type="radio" id='radio-4' name='radio-4' className='hidden' checked={befRadio}
                                            onClick={handleThreeRadio} value="radio-4" />
                                        <span className={`w-3 h-3 inline-block rounded-full border-2 border-gray-600
                                        ${bRadio === 'radio-4' ? 'bg-yellow-500' : 'bg-white'}`}></span>
                                        <label htmlFor="radio-4" className="text-sm mx-1">Sell</label>
                                    </div>

                                </div>
                            </div>
                            <div className="flex my-1 flex-col md:flex-row justify-center items-start lg:items-center md:space-x-4 lg:w-1/2 w-full border-r-gray-900 h-full">
                                <div className="text-xl font-['Poppins'] my-2 font-medium text-[#242424] ">
                                    Expiry type
                                </div>
                                <div className="flex border-solid my-2 h-4 border rounded-lg justify-center items-center mx-auto">

                                    <button onClick={() => setBackg(0)} className={`p-1 rounded-l-lg text-base ${backg === 0 ? 'bg-yellow-500 text-white' : 'bg-white text-black'}  focus:outline-none font-thin border border-transparent`}>Weekly</button>
                                    <button onClick={() => setBackg(1)} className={`p-1 rounded-r-lg text-base ${backg === 1 ? 'bg-yellow-500 text-white' : 'bg-white text-black'} focus:outline-none font-thin border border-transparent`}>Monthly</button>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className='div-two md:mt-10 mt-4 mb-8 md:mx-10 hidden md:block '>
                        {/* this div is set to be only visible in medium and above screen and stays hidden for lower */}
                        <div className='md:mx-8 p-4 flex flex-col '>
                            <h1 className='text-gray-900 flex items-center justify-center lg:justify-start font-poppins text-2xl font-medium '>Create your strategy </h1>
                            <p className='text-gray-600 font-poppins text-sm font-normal leading-normal py-1 md:block hidden' >Formulate a strategy that suits your trading style. Personalize your entry signals, choose indicators, and configure risk management parameters.
                                Build a custom approach that caters to your preferences and objectives.</p>
                            <div className='flex flex-col border p-4 border-gray-200 rounded-sm mb-4'>
                                <div class="rounded-lg  p-4 flex flex-col ">
                                    <div className='w-full flex flex-row relative '>

                                        <div class="text-gray-400 font-poppins text-18 font-normal inline-flex flex-start"><Login />
                                            Entry conditions
                                        </div>
                                        <a href="#" className='right-0 absolute'>Clear</a>

                                    </div>


                                </div>
                                <div className='inline-flex flex-row justify-evenly w-full mt-4'>
                                    <div className=''>
                                        When
                                    </div>
                                    <div className='rounded-md border-yellow-500 border-2 bg-white w-auto px-2 '>
                                        <select name="RSI" id="rsi" className=' border-yellow-500'>
                                            <option selected className='text-black text-base font-normal'>RSI
                                            </option>
                                        </select>
                                    </div>
                                    <div className='border rounded-md w-auto bg-white '>
                                        <select name="c" id="c" className=' px-4 border-yellow-500 border-2'>
                                            <option selected className='text-black text-base font-normal'>crosses above
                                            </option>
                                            <option value="Below">Below</option>
                                        </select>


                                    </div>
                                    <div className='rounded-md flex border-2 bg-white border-solid border-yellow-500  items-center justify-center w-auto'>
                                        <input type="number" id="numericalInput" name="quantity" placeholder='enter value'>
                                        </input>

                                    </div>
                                    <div className='text-blue-600'
                                    ><DeleteOutlineTwoTone />

                                    </div>

                                </div>
                                <div className="flex  my-1 h-auto w-auto rounded-lg  items-center left-0">

                                    <button onClick={() => setBackgr(0)} className={`p-1 rounded-l-lg text-base ${backgr === 0 ? 'bg-yellow-500 text-white' : 'bg-white text-black'}  focus:outline-none font-thin border border-transparent`}>AND</button>
                                    <button onClick={() => setBackgr(1)} className={`p-1 rounded-r-lg text-base ${backgr === 1 ? 'bg-yellow-500 text-white' : 'bg-white text-black'} focus:outline-none font-thin border   border-transparent`}>OR</button>
                                </div>
                                <div className='inline-flex flex-row justify-evenly w-full mt-4'>
                                    <div className=''>
                                        When
                                    </div>
                                    <div className='rounded-md border-yellow-500 border bg-white w-auto '>
                                        <select name="none" id="none" className='px-2 border-2 border-yellow-500'>
                                            <option selected className='text-white text-base font-normal'>
                                            </option>
                                            <option value="rssi">RSI</option>
                                        </select>
                                    </div>
                                    <div className='border rounded-md w-auto bg-white '>
                                        <select name="empty" id="empty" className=' px-4 border-2 border-yellow-500'>
                                            <option selected className='text-white text-base font-normal '>
                                            </option>
                                            <option value="above">crosses above
                                            </option>
                                            <option value="Below">Below</option>

                                        </select>


                                    </div>
                                    <div className='rounded-md flex border-2 bg-white border-solid border-yellow-500  items-center justify-center '>
                                        <input type="number" id="numericalInput" name="quantity" placeholder='enter value'>
                                        </input>
                                    </div>
                                    <div className='text-blue-600'
                                    ><DeleteOutlineTwoTone />

                                    </div>

                                </div>

                                {divs.map((isDivOpen, index) => (
                                    <div key={index} className=" p-2 mb-2">


                                        {isDivOpen && (<div className='inline-flex flex-row justify-evenly w-full mt-4'>
                                            <div className=''>
                                                When
                                            </div>
                                            <div className='rounded-md border-yellow-500 border bg-white w-auto '>
                                                <select name="none" id="none" className='px-2 border-yellow-500 border-2'>
                                                    <option selected className='text-white text-base font-normal'>
                                                    </option>
                                                    <option value="rssi">RSI</option>
                                                </select>
                                            </div>
                                            <div className='border rounded-md w-auto bg-white '>
                                                <select name="empty" id="empty" className=' px-4 border-yellow-500 border-2'>
                                                    <option selected className='text-white text-base font-normal '>
                                                    </option>
                                                    <option value="above">crosses above
                                                    </option>
                                                    <option value="Below">Below</option>

                                                </select>


                                            </div>
                                            <div className='rounded-md flex  bg-white border-solid border-yellow-500 border-2 items-center justify-center '>
                                                <input type="number" id="numericalInput" name="quantity" placeholder='enter value'>
                                                </input>
                                            </div>
                                            <div className='text-blue-600' onClick={() => deleteDiv(index)}
                                            ><DeleteOutlineTwoTone />

                                            </div>

                                        </div>)}
                                    </div>
                                ))}
                                <div>
                                    <button className='inline-block bg-yellow-500 my-4 ml-4 px-2 py-1 rounded min-w-auto items-center justify-center left-0'
                                        onClick={addDiv}>
                                        <span className='mx-2'>
                                            <AddCircleIcon /></span>
                                        <span className='mr-2'>Add Conditions
                                        </span>


                                    </button>
                                </div>
                            </div>
                            <div className='flex flex-col border p-4 border-gray-200 mb-4 rounded-sm'>
                                <div class="rounded-lg  p-4 flex flex-col ">
                                    <div className='w-full flex flex-row relative '>

                                        <div class="text-gray-400 font-poppins text-18 font-normal inline-flex flex-start"><Login />
                                            Exit conditions
                                        </div>
                                        <a href="#" className='right-0 absolute'>Clear</a>

                                    </div>


                                </div>
                                <div className='inline-flex flex-row justify-evenly w-full mt-4'>
                                    <div className=''>
                                        When
                                    </div>
                                    <div className='rounded-md border-yellow-500  bg-white w-auto  '>
                                        <select name="RSI" id="rsi" className=' border-yellow-500 border-2 px-2'>
                                            <option selected className='text-black text-base font-normal'>RSI
                                            </option>
                                        </select>
                                    </div>
                                    <div className='border rounded-md w-auto bg-white '>
                                        <select name="c" id="c" className=' px-4 border-yellow-500 border-2 rounded-md' >
                                            <option selected className='text-black text-base font-normal'>crosses above
                                            </option>
                                            <option value="Below">Below</option>
                                        </select>


                                    </div>
                                    <div className='rounded-md flex  bg-white border-2 border-yellow-500  items-center justify-center w-auto'>
                                        <input type="number" id="numericalInput" name="quantity" placeholder='enter value'>
                                        </input>

                                    </div>
                                    <div className='text-blue-600'
                                    ><DeleteOutlineTwoTone />

                                    </div>

                                </div>
                                <div className='flex flex-row '>
                                    <div className="flex  my-1 h-auto w-auto rounded-lg  items-center left-0">

                                        <button onClick={() => setBackgr(0)} className={`p-1 rounded-l-lg text-base ${backgr === 0 ? 'bg-yellow-500 text-white' : 'bg-white text-black'}  focus:outline-none font-thin border border-transparent`}>AND</button>
                                        <button onClick={() => setBackgr(1)} className={`p-1 rounded-r-lg text-base ${backgr === 1 ? 'bg-yellow-500 text-white' : 'bg-white text-black'} focus:outline-none font-thin border   border-transparent`}>OR</button>
                                    </div>

                                </div>
                                <div className='inline-flex flex-row justify-evenly w-full mt-4'>
                                    <div className='w-1/2 flex flex-row justify-center space-x-6 items-center'>
                                        <div>
                                            Target
                                        </div>
                                        <div>
                                            <select name="" id="" className='w-auto px-2 border-2 border-yellow-500 rounded-md'>
                                                <option type="numeric" value="" selected>10%</option>
                                            </select>

                                        </div>
                                        <div>
                                            from entry
                                        </div>


                                    </div>
                                    <div className='w-1/2 flex flex-row justify-center space-x-6 items-center'>
                                        <div>
                                            Stop loss
                                        </div>
                                        <div>
                                            <select name="" id="" className='w-auto px-2 border-2 border-yellow-500 rounded-md'>
                                                <option value="" type="numeric" selected>10% </option>
                                            </select>
                                        </div>
                                        <div>
                                            from entry
                                        </div>
                                        <div className='text-blue-600' 
                                        ><DeleteOutlineTwoTone />

                                        </div>


                                    </div>

                                    


                                </div>

                                {divs2.map((isDiv2Open, index1) => (
                                    <div key={index1} className=" p-2 mb-2">


                                        {isDiv2Open && (
                                        <div className='inline-flex flex-row justify-evenly w-full mt-4'>
                                        <div className='w-1/2 flex flex-row justify-center space-x-6 items-center'>
                                            <div>
                                                Target
                                            </div>
                                            <div>
                                                <select name="" id="" className='w-auto px-2 border-2 border-yellow-500 rounded-md'>
                                                    <option type="numeric" value="" selected></option>
                                                </select>
    
                                            </div>
                                            <div>
                                                from entry
                                            </div>
    
    
                                        </div>
                                        <div className='w-1/2 flex flex-row justify-center space-x-6 items-center'>
                                            <div>
                                                Stop loss
                                            </div>
                                            <div>
                                                <select name="" id="" className='w-auto px-2 border-2 border-yellow-500 rounded-md'>
                                                    <option value="" type="numeric" selected> </option>
                                                </select>
                                            </div>
                                            <div>
                                                from entry
                                            </div>
                                            <div className='text-blue-600' onClick={() => deleteDiv2(index1)} 
                                            ><DeleteOutlineTwoTone />
    
                                            </div>
    
    
                                        </div>
    
                                        
    
    
                                    </div>
                                        )}
                                    </div>
                                ))}
                                <div>
                                    <button className='inline-block bg-yellow-500 my-4 ml-4 px-2 py-1 rounded min-w-auto items-center justify-center left-0'
                                        onClick={addDiv2}>
                                        <span className='mx-2'>
                                            <AddCircleIcon /></span>
                                        <span className='mr-2'>Add Conditions
                                        </span>


                                    </button>
                                </div>
                            </div>
                            <div className='w-full flex flex-row mb-4 '>
                                <div className='w-1/3 left-0'>Strategy Name </div>
                                <input type="text" className='border border-black w-1/3 left-0' />

                            </div>
                            <h1 className='text-gray-900 flex items-center justify-center lg:justify-start font-poppins text-2xl font-medium '>Select template </h1>
                            <p className='text-gray-600 font-poppins text-sm font-normal leading-normal py-1 md:block hidden' >If you're encountering challenges while crafting your entry and exit conditions, don't worry. Our platform offers a solution: pre-built templates. These templates are designed to automatically populate your conditions, making the process smoother.
                                Build a custom approach that caters to your preferences and objectives.</p>
                            <div className='flex flex-row items-center justify-evenly mb-2'>
                                <div className=' text-blue-500 bg-white text-xl rounded-md shadow-xl inset-shadow w-auto px-4 py-2'>Short Straddle</div>
                                <div className=' text-blue-500 bg-white text-xl rounded-md shadow-xl inset-shadow w-auto px-4 py-2'>Long Straddle</div>
                                <div className=' text-blue-500 bg-white text-xl rounded-md shadow-xl inset-shadow w-auto px-4 py-2'> Iron Condor</div>
                            </div>
                            <div className='flex flex-row items-center justify-evenly mt-2 mb-12 w-full'>
                                <div className=' text-blue-500 bg-gray-200 text-xl rounded-md shadow-xl inset-shadow  h-10  w-1/5'></div>
                                <div className=' text-blue-500 bg-gray-200 text-xl rounded-md shadow-xl inset-shadow  w-1/5 h-10 '></div>
                                <div className=' text-blue-500 bg-gray-200 text-xl rounded-md shadow-xl inset-shadow  w-1/5 h-10'></div>
                            </div>

                        </div>

                    </div>
                    <div className='bottom-5 right-5 z-2 space-x-2 items-center justify-center md:block hidden absolute w-auto bg-yellow-500 p-2 text-white  text-base rounded-full'>
                        <div className='inline-flex items-center justify-center'>
                            <div><RocketLaunchIcon /></div>
                            <div>Launch Strategy </div>
                        </div>
                    </div>
                    <div className='bottom-5 right-5 z-2 space-x-2 items-center justify-center block md:hidden absolute w-auto bg-blue-500 p-2 text-white  text-lg rounded-md'>
                        <div><EastOutlinedIcon /></div>

                    </div>

                </div>

            </div >

        </>
    )
}


export default BackTest;