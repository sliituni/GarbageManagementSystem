import React from 'react';
import { Header } from '../Header';
import Barchart from './Barchart';
import { Link } from 'react-router-dom';
import Piechart from './Piechart';

export default function Dashboard() {
  return (
    <div className='container' style={{ textAlign: 'center' }}>
      <Header />
      <div style={{ marginTop: '100px' }}>
        <h4>Total Garbage Waste Amount</h4>
        <div style={{ marginTop: '50px' }}>
          <Barchart />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
          <Link to='/addanalitics' className='btn' style={buttonStyle}>
            Add Analytics Details
          </Link>
          <Link to='/viewanalitics' className='btn' style={buttonStyle}>
            View Analytics Details
          </Link>
        </div>
      </div><br></br><br></br><br></br>
      <h4>Available Garbage Stock</h4>
      <div style={{ marginTop: '100px' }}>
        <Piechart />
      </div>
    </div>
  );
}

const buttonStyle = {
  width: '200px',
  height: '50px',
  padding: '10px 20px',
  background: '#111',
  borderRadius: '20px',
  color: '#fff',
  textDecoration: 'none',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 20px',
};
