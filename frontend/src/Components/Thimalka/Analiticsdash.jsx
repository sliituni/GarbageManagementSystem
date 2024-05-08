import React from 'react';
import  AHeader  from '../AHeader';
import Barchart from './Barchart';
import { Link } from 'react-router-dom';
import Piechart from './Piechart';
import MonthlyDetailsChart from './MonthlyDetailsChart';

export default function Dashboard() {
  return (
    <div className='container' style={{paddingTop: '50px' ,textAlign: 'center' }}>
      <AHeader />
      <div style={{ marginTop: '100px' }}>
        <h4>Total Garbage Waste Amount</h4>
        <div style={{ marginTop: '50px' }}>
          <MonthlyDetailsChart />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
        </div>
      </div>
      <h4>Available Garbage Stock</h4>
      <div style={{ marginTop: '50px' }}>
        <Piechart />
      </div>
    </div>
  );
}
