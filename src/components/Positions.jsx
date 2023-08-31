import React from 'react'
import '../App.css'
import { AiOutlineSearch } from 'react-icons/ai';
import { FaFilter } from 'react-icons/fa';


const data = [
    {
        instrument: "Reliance",
        qty: "100",
        buyPrice: "100",
        sellPrice: "105",
        pl: "+500",
        status: "reject"
    },
    {

        instrument: "Reliance",
        qty: "100",
        buyPrice: "100",
        sellPrice: "105",
        pl: "+500",
        status: "accept"
    },
    {
        instrument: "Reliance",
        qty: "100",
        buyPrice: "100",
        sellPrice: "105",
        pl: "+500",
        status: "reject"
    },
    {

        instrument: "Reliance",
        qty: "100",
        buyPrice: "100",
        sellPrice: "105",
        pl: "+500",
        status: "accept"
    },
    {
        instrument: "Reliance",
        qty: "100",
        buyPrice: "100",
        sellPrice: "105",
        pl: "+500",
        status: "reject"
    },
    {

        instrument: "Reliance",
        qty: "100",
        buyPrice: "100",
        sellPrice: "105",
        pl: "+500",
        status: "accept"
    },
    {
        instrument: "Reliance",
        qty: "100",
        buyPrice: "100",
        sellPrice: "105",
        pl: "+500",
        status: "reject"
    },
    {

        instrument: "Reliance",
        qty: "100",
        buyPrice: "100",
        sellPrice: "105",
        pl: "+500",
        status: "accept"
    },



]
const Positions = () => {
    return (
        <div className='custom-table custom-table-container bg-light gx-3' >
            <div className='d-lg-flex d-block justify-content-between' >
                <h4>My positions</h4>
                <div className='d-flex justify-content-lg-none justify-content-between align-items-center'>
                    <div>
                        <div >
                            <div class="input-group ">
                                <div class="input-group-prepend">
                                    <button class=" bg-transparent search-btn px-2 py-2" id="btnGroupAddon" style={{ fontSize: "25px" }}><AiOutlineSearch /></button>
                                </div>

                                <input type="text" class=" bg-transparent search-2" placeholder="Search" aria-label="Input group example" aria-describedby="btnGroupAddon" />
                            </div>
                        </div>
                    </div>
                    <span style={{ fontSize: "20px" }} className='mx-3'>

                        <FaFilter />
                    </span>
                </div>
            </div>
            <div className='scroll my-4'>
                <table className='my-table'>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Instrument</th>
                            <th scope="col">Qty</th>
                            <th scope="col">Buy Price</th>
                            <th scope="col">Sell Price</th>
                            <th scope="col">P&L</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (

                            <tr>
                                <th scope="row"></th>
                                <td>{item.instrument}</td>
                                <td>{item.qty}</td>
                                <td>{item.buyPrice}</td>
                                <td>{item.sellPrice}</td>
                                <td>{item.pl}</td>

                                {item.status == "reject" ? <td><button className='reject'>{item.status}</button></td> : <td><button className='accept'>{item.status}</button></td>}

                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Positions