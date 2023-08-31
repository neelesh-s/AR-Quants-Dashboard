import React from 'react'
import '../App.css'
import { FaArrowRight } from 'react-icons/fa6';
import { FaWallet } from 'react-icons/fa';




const data = [
    {
        name: "Investment ",
        percentage: "+2.2%",
        amount: "$20,000,000"
    },
    {
        name: "P&L ",
        percentage: "+2%",
        amount: "$20,000,000"
    },
    {
        name: "Live Stratgies ",
        amount: "20",
        icon: <FaArrowRight />
    },
    {
        name: "Available cash ",
        amount: "$40,000",
        icon: <FaWallet />
    }
]


const Prize = () => {

    return (
        <>
            <div className='d-flex flex-wrap  '>


                {data.map((item, index) => (

                    <div className='bg-light custom-rounded px-4 py-2 mx-3 d-flex flex-column text-center justify-content-center mb-lg-0 mb-3' >
                        <div className={index === 3 ? "d-none" : ""}>
                            <div className='heading d-flex justify-content-between'><span style={{ fontSize: "14px" }}>{item.name}</span> <span className='green'>{item.percentage}</span></div>

                            <div className='amount' style={{
                                fontSize: "20px",
                                fontWeight: 500
                            }}>{item.amount}</div>
                        </div>
                        {index === 2 ? (<div style={{ display: "flex", justifyContent: "end" }}>

                            <div className='amount' style={{ fontSize: '10px', backgroundColor: "#fea539", padding: "2px 4px", borderRadius: "50%", color: "#fff",fontSize:"12px" }}>{item.icon}</div>
                        </div>) : index === 3 ? (
                            <div className='d-flex'>

                                <div className='wallet'>{item.icon}</div>
                                <div >
                                    <div className='heading'><span style={{ fontSize: "14px" }}>{item.name}</span> <span className='green'>{item.percentage}</span></div>

                                    <div className='amount' style={{
                                        fontSize: "20px",
                                        fontWeight: 500
                                    }}>{item.amount}</div>
                                </div>
                            </div>


                        ) : ""}

                    </div>


                ))}

            </div>
        </>
    )
}

export default Prize