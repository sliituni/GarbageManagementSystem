import React from 'react';

export default function Schedule() {
  return (
    <div id="gschedule" className="container">
      <div className="mb-3" style={{ fontSize: '30px', fontWeight: 'bold', color: 'green'}}>Garbage Collection Schedule</div>
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

          <tr>
            <td style={{backgroundColor: '#e7f0f6', fontSize: '18px', textAlign: 'center'}}>Household waste/ Garbage (every 2 weeks)*</td>
            <td style={{backgroundColor: '#ADD8E6', fontSize: '18px', textAlign: 'center'}}>Wednesday</td>
            <td style={{backgroundColor: '#F3CFC6', fontSize: '18px', textAlign: 'center'}}>Wednesday</td>
            <td style={{backgroundColor: '#FFFF00', fontSize: '18px', textAlign: 'center'}}>Wednesday</td>
            <td style={{backgroundColor: '#90EE90', fontSize: '18px', textAlign: 'center'}}>Wednesday</td>
            <td style={{backgroundColor: '#FFD580', fontSize: '18px', textAlign: 'center'}}>Wednesday</td>
          </tr> 
          <tr>
            <td style={{backgroundColor: '#e7f0f6', fontSize: '18px', textAlign: 'center'}}>Recycling (weekly)</td>
            <td style={{backgroundColor: '#ADD8E6', fontSize: '18px', textAlign: 'center'}}>Friday</td>
            <td style={{backgroundColor: '#F3CFC6', fontSize: '18px', textAlign: 'center'}}>Friday</td>
            <td style={{backgroundColor: '#FFFF00', fontSize: '18px', textAlign: 'center'}}>Friday</td>
            <td style={{backgroundColor: '#90EE90', fontSize: '18px', textAlign: 'center'}}>Friday</td>
            <td style={{backgroundColor: '#FFD580', fontSize: '18px', textAlign: 'center'}}>Friday</td>
          </tr>
          <tr>
            <td style={{backgroundColor: '#e7f0f6', fontSize: '18px', textAlign: 'center'}}>Organic Waste (every two weeks from April 16 to September 16, weekly from September 17 to December 31)</td>
            <td style={{backgroundColor: '#ADD8E6', fontSize: '18px', textAlign: 'center'}}>Monday</td>
            <td style={{backgroundColor: '#F3CFC6', fontSize: '18px', textAlign: 'center'}}>Monday</td>
            <td style={{backgroundColor: '#FFFF00', fontSize: '18px', textAlign: 'center'}}>Monday</td>
            <td style={{backgroundColor: '#90EE90', fontSize: '18px', textAlign: 'center'}}>Monday</td>
            <td style={{backgroundColor: '#FFD580', fontSize: '18px', textAlign: 'center'}}>Monday</td>
          </tr>
          <tr>
            <td style={{backgroundColor: '#e7f0f6', fontSize: '18px', textAlign: 'center'}}>Large/ Bulky Items</td>
            <td style={{backgroundColor: '#ADD8E6', fontSize: '18px', textAlign: 'center'}}>1st Thursday</td>
            <td style={{backgroundColor: '#F3CFC6', fontSize: '18px', textAlign: 'center'}}>2nd Thursday</td>
            <td style={{backgroundColor: '#FFFF00', fontSize: '18px', textAlign: 'center'}}>3rd Thursday</td>
            <td style={{backgroundColor: '#90EE90', fontSize: '18px', textAlign: 'center'}}>4th Thursday</td>
            <td style={{backgroundColor: '#FFD580', fontSize: '18px', textAlign: 'center'}}>4th Thursday</td>
          </tr>
          <tr>
            <td style={{backgroundColor: '#e7f0f6', fontSize: '18px', textAlign: 'center'}}>Green Waste**</td>
            <td colSpan="5" style={{backgroundColor: '#e7f0f6', textAlign: 'center'}}>Weeks of April 29 and May 20, Weeks of June 21 and October 4</td>
          </tr>
          <tr>
            <td style={{backgroundColor: '#e7f0f6', fontSize: '18px',textAlign: 'center'}}>Branches</td>
            <td colSpan="2" style={{backgroundColor: '#ADD8E6', textAlign: 'center'}}>Weeks of April 29, May 20, July 10</td>
            <td style={{backgroundColor: '#FFFF00', fontSize: '18px',textAlign: 'center'}}>Weeks of May 6 and 27, June 17, July 29</td>
            <td colSpan="2" style={{backgroundColor: '#90EE90', textAlign: 'center'}}>Weeks of May 13, June 3 and 24, August 5</td>
          </tr>
          <tr>
            <td style={{backgroundColor: '#e7f0f6', fontSize: '18px',textAlign: 'center'}}>Special Collection: Cudboard</td>
            <td colSpan="5" style={{backgroundColor: '#e7f0f6', textAlign: 'center'}}>April 12 <br/> Spetember 22</td>
          </tr>
          <tr>
            <td style={{backgroundColor: '#e7f0f6', fontSize: '18px',textAlign: 'center'}}>Special Collection: Large Bulky Items</td>
            <td colSpan='5' style={{backgroundColor: '#e7f0f6', textAlign: 'center'}}>Special bulky waste collections will be added <br/> Fefer to the City's website for deatils</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
