import React from 'react'
import '../App.css'


const data = [
    {
        symbol: "https://cdn.countryflags.com/thumbs/china/flag-square-250.png",
        name: "nifty",
        last: "15345",
        Chg: "123",
        chgPercentage: "0.26"
    },

    {
        symbol: "https://cdn.countryflags.com/thumbs/united-states-of-america/flag-square-250.png",
        name: "bankini",
        last: "15345",
        Chg: -123,
        chgPercentage: -3.80
    },
    {
        symbol: "https://cdn.countryflags.com/thumbs/india/flag-square-250.png",
        name: "india vi",
        last: "15345",
        Chg: -123,
        chgPercentage: "0.26"
    },
    {
        symbol: "https://cdn.countryflags.com/thumbs/united-states-of-america/flag-square-250.png",
        name: "finnift",

        last: "15345",
        Chg: "123",
        chgPercentage: -3.80
    },
    {
        symbol: "https://cdn.countryflags.com/thumbs/russia/flag-square-250.png",
        name: "nifty",
        last: "15345",
        Chg: -123,
        chgPercentage: "0.26"
    },
    {
        symbol: "https://cdn.countryflags.com/thumbs/china/flag-square-250.png",
        name: "nifty",
        last: "15345",
        Chg: -123,
        chgPercentage: -3.80
    },


    {
        symbol: "https://cdn.countryflags.com/thumbs/china/flag-square-250.png",
        name: "nifty",
        last: "15345",
        Chg: "123",
        chgPercentage: "0.26"
    },
    {
        symbol: "https://cdn.countryflags.com/thumbs/united-states-of-america/flag-square-250.png",
        name: "nifty",
        last: "15345",
        Chg: "123",
        chgPercentage: "0.26"
    },
    {
        symbol: "https://cdn.countryflags.com/thumbs/china/flag-square-250.png",
        name: "nifty",
        last: "15345",
        Chg: "123",
        chgPercentage: "0.26"
    },
    {
        symbol: "https://cdn.countryflags.com/thumbs/united-states-of-america/flag-square-250.png",
        name: "nifty",
        last: "15345",
        Chg: "123",
        chgPercentage: -3.80
    },
    {
        symbol: "https://cdn.countryflags.com/thumbs/china/flag-square-250.png",
        name: "nifty",
        last: "15345",
        Chg: "123",
        chgPercentage: "0.26"
    },
    {
        symbol: "https://cdn.countryflags.com/thumbs/united-states-of-america/flag-square-250.png",
        name: "nifty",
        last: "15345",
        Chg: "123",
        chgPercentage: "0.26"
    },
    {
        symbol: "https://cdn.countryflags.com/thumbs/china/flag-square-250.png",
        name: "nifty",
        last: "15345",
        Chg: "123",
        chgPercentage: "0.26"
    },
]


const OverView = () => {
    return (
        <div>
            <div className='overview-table  custom-table-container bg-light'>
                <div className='d-flex justify-content-between' >
                    <h4>Market Overview</h4>

                </div>
                <div className='scroll-overview my-4'>
                    <table className='my-table-for-overview'>
                        <thead>

                            <tr>
                                <th scope="col">Symbol</th>
                                <th scope="col">Last</th>
                                <th scope="col">Chg</th>
                                <th scope="col">Chg % </th>

                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td>< img src={item.symbol} className='circle' /><span>{item.name}</span></td>
                                    <td>{item.last}</td>
                                    {item.Chg > 0 ? <td style={{ color: "rgb(18 255 82)" }}> {item.Chg}</td> : <td style={{ color: "rgb(255 54 54)" }}>{item.Chg}</td>}
                                    {item.chgPercentage > 0 ? <td style={{ color: "rgb(18 255 82)" }}> {item.chgPercentage}</td> : <td style={{ color: "rgb(255 54 54)" }}>{item.chgPercentage}</td>}



                                </tr>
                            ))}



                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )
}

export default OverView