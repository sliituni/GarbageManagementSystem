import React from 'react'
import MonthlyDetailsChart from '../Thimalka/MonthlyDetailsChart'
import { Header } from '../Header'
import { Footer } from '../Footer'
import PieChartMui from '../Thimalka/Piechart'

export default function GarbageAnalitics() {
    return (
        <div>
            <Header />
            <div className='container' style={{ paddingTop: '150px' }}>
                <h2 style={{color:'#34A853', fontWeight:'bold', letterSpacing: '6px'}}>GARBAGE ANALITICS</h2>
                <div className='mt-5'>
                    <h4>Total Garbage Waste Amount</h4>
                    <MonthlyDetailsChart/>
                </div>
                <div className='mt-5'>
                    <h4>Available Garbage Stock</h4>
                    <PieChartMui/>
                </div>
            </div>
            <Footer />
        </div>
    )
}
