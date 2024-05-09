import React, { useState, useEffect } from 'react';

export default function Schedule() {

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetchTableData();
  }, []);

  const fetchTableData = async () => {
    try {
      const response = await fetch('http://localhost:4011/table/fulltable');
      const data = await response.json();
      setTableData(data);
    } catch (error) {
      console.error('Error fetching table data:', error);
    }
  };


  return (
    <div id="gscheadule" className="container" style={{paddingTop: '150px'}}>
      <div className="mb-3" style={{ color:'#34A853', fontWeight:'bold', letterSpacing: '6px'}}><h3><b>GARBAGE COLLECTION SCHEDULE</b></h3></div><br/>
      <table className="table table-bordered">
        <tbody >
        <tr>
          <td style={{width: '120px', backgroundColor: '#e7f0f6'}}></td>
          <td style={{width: '80px', backgroundColor: '#000080', color: 'white',  fontSize: '18px', textAlign: 'center'}}>A</td>
          <td style={{width: '80px', backgroundColor: '#8B008B', color: 'white',  fontSize: '18px', textAlign: 'center'}}>B</td>
          <td style={{width: '80px', backgroundColor: '#B8860B', color: 'white',  fontSize: '18px', textAlign: 'center'}}>C</td>
          <td style={{width: '80px', backgroundColor: '#006400', color: 'white',  fontSize: '18px', textAlign: 'center'}}>D</td>
          <td style={{width: '80px', backgroundColor: '#FF8C00', color: 'white',  fontSize: '18px', textAlign: 'center'}}>E</td>
        </tr>
        {tableData.map((row, index) => (
          <tr key={index}>
            <td style={{backgroundColor: '#e7f0f6', fontSize: '18px', textAlign: 'center'}}>Household waste/ Garbage (every 2 weeks)*</td>
            <td style={{backgroundColor: '#ADD8E6', fontSize: '18px', textAlign: 'center'}}>{row.a1}</td>
            <td style={{backgroundColor: '#F3CFC6', fontSize: '18px', textAlign: 'center'}}>{row.b1}</td>
            <td style={{backgroundColor: '#FFFF00', fontSize: '18px', textAlign: 'center'}}>{row.c1}</td>
            <td style={{backgroundColor: '#90EE90', fontSize: '18px', textAlign: 'center'}}>{row.d1}</td>
            <td style={{backgroundColor: '#FFD580', fontSize: '18px', textAlign: 'center'}}>{row.e1}</td>
          </tr> 
        ))}
        {tableData.map((row, index) => (
          <tr key={index}>
            <td style={{backgroundColor: '#e7f0f6', fontSize: '18px', textAlign: 'center'}}>Recycling (weekly)</td>
            <td style={{backgroundColor: '#ADD8E6', fontSize: '18px', textAlign: 'center'}}>{row.a2}</td>
            <td style={{backgroundColor: '#F3CFC6', fontSize: '18px', textAlign: 'center'}}>{row.b2}</td>
            <td style={{backgroundColor: '#FFFF00', fontSize: '18px', textAlign: 'center'}}>{row.c2}</td>
            <td style={{backgroundColor: '#90EE90', fontSize: '18px', textAlign: 'center'}}>{row.d2}</td>
            <td style={{backgroundColor: '#FFD580', fontSize: '18px', textAlign: 'center'}}>{row.e2}</td>
          </tr>
        ))}
        {tableData.map((row, index) => (
          <tr key={index}>
            <td style={{backgroundColor: '#e7f0f6', fontSize: '18px', textAlign: 'center'}}>Organic Waste (every two weeks from April 16 to September 16, weekly from September 17 to December 31)</td>
            <td style={{backgroundColor: '#ADD8E6', fontSize: '18px', textAlign: 'center'}}>{row.a3}</td>
            <td style={{backgroundColor: '#F3CFC6', fontSize: '18px', textAlign: 'center'}}>{row.b3}</td>
            <td style={{backgroundColor: '#FFFF00', fontSize: '18px', textAlign: 'center'}}>{row.c3}</td>
            <td style={{backgroundColor: '#90EE90', fontSize: '18px', textAlign: 'center'}}>{row.d3}</td>
            <td style={{backgroundColor: '#FFD580', fontSize: '18px', textAlign: 'center'}}>{row.e3}</td>
          </tr>
        ))}
        {tableData.map((row, index) => (
          <tr key={index}>
            <td style={{backgroundColor: '#e7f0f6', fontSize: '18px', textAlign: 'center'}}>Large/ Bulky Items</td>
            <td style={{backgroundColor: '#ADD8E6', fontSize: '18px', textAlign: 'center'}}>{row.a4}</td>
            <td style={{backgroundColor: '#F3CFC6', fontSize: '18px', textAlign: 'center'}}>{row.b4}</td>
            <td style={{backgroundColor: '#FFFF00', fontSize: '18px', textAlign: 'center'}}>{row.c4}</td>
            <td style={{backgroundColor: '#90EE90', fontSize: '18px', textAlign: 'center'}}>{row.d4}</td>
            <td style={{backgroundColor: '#FFD580', fontSize: '18px', textAlign: 'center'}}>{row.e4}</td>
          </tr>
        ))}
        {tableData.map((row, index) => (
          <tr key={index}>
            <td style={{backgroundColor: '#e7f0f6', fontSize: '18px', textAlign: 'center'}}>Green Waste**</td>
            <td colSpan="5" style={{backgroundColor: '#e7f0f6', textAlign: 'center'}}>{row.abcde5}</td>
          </tr>
        ))}
        {tableData.map((row, index) => (
          <tr key={index}>
            <td style={{backgroundColor: '#e7f0f6', fontSize: '18px',textAlign: 'center'}}>Branches</td>
            <td colSpan="2" style={{backgroundColor: '#ADD8E6', textAlign: 'center'}}>{row.ab6}</td>
            <td style={{backgroundColor: '#FFFF00', fontSize: '18px',textAlign: 'center'}}>{row.c6}</td>
            <td colSpan="2" style={{backgroundColor: '#90EE90', textAlign: 'center'}}>{row.de6}</td>
          </tr>
        ))}
        {tableData.map((row, index) => (
          <tr key={index}>
            <td style={{backgroundColor: '#e7f0f6', fontSize: '18px',textAlign: 'center'}}>Special Collection: Cudboard</td>
            <td colSpan="5" style={{backgroundColor: '#e7f0f6', textAlign: 'center'}}>{row.abcde7}</td>
          </tr>
        ))}
        {tableData.map((row, index) => (
          <tr key={index}>
            <td style={{backgroundColor: '#e7f0f6', fontSize: '18px',textAlign: 'center'}}>Special Collection: Large Bulky Items</td>
            <td colSpan='5' style={{backgroundColor: '#e7f0f6', textAlign: 'center'}}>{row.abcde8}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}
