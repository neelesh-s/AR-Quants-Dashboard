import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Prize from './Prize'
import Positions from './Positions'
import BlankTable from './BlankTable'
import OverView from './OverView'
import TopProducts from './TopProducts'

const Main = () => {
    return (
        <>
            <div className="App">
                <div style={{ width: "5%" }} className="sidebar-parent blue">
                    <Sidebar />
                </div>
                <div
                    style={{ backgroundColor: "#fcf8f7" }}
                    className="main-container"
                >
                    <Navbar />
                    <Prize />
                    <div className="d-lg-flex d-block justify-content-lg-evenly justify-content-center">
                        <div className="position mt-3 mx-3">
                            <Positions />
                            <BlankTable />
                        </div>
                        <div className="overview mt-3 mx-3">
                            <OverView />
                            <TopProducts />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main