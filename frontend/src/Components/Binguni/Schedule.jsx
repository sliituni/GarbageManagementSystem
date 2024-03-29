import React from 'react';

export default function Schedule() {
  return (
    <div id="gschedule" className="container">
      <div className="mb-3">schedule</div>
      <table className="table table-bordered">
        <tbody >
          <tr>
            <td></td>
            <td style={{ backgroundColor: '#000080', color: 'white' }}>A</td>
            <td style={{ backgroundColor: '#8B008B', color: 'white' }}>B</td>
            <td style={{ backgroundColor: '#B8860B', color: 'white' }}>C</td>
            <td style={{ backgroundColor: '#006400', color: 'white' }}>D</td>
            <td style={{ backgroundColor: '#FF8C00', color: 'white' }}>E</td>
          </tr>
          <tr>
            <td style={{backgroundColor: '#e7f0f6'}}>Household waste/ Garbage (every 2 weeks)*</td>
            <td style={{backgroundColor: '#ADD8E6'}}>Wednesday</td>
            <td style={{backgroundColor: '#F3CFC6'}}>Wednesday</td>
            <td style={{backgroundColor: '#FFFF00'}}>Wednesday</td>
            <td style={{backgroundColor: '#90EE90'}}>Wednesday</td>
            <td style={{backgroundColor: '#FFD580'}}>Wednesday</td>
          </tr>
          <tr>
            <td style={{backgroundColor: '#e7f0f6'}}>Recycling (weekly)</td>
            <td style={{backgroundColor: '#ADD8E6'}}>Friday</td>
            <td style={{backgroundColor: '#F3CFC6'}}>Friday</td>
            <td style={{backgroundColor: '#FFFF00'}}>Friday</td>
            <td style={{backgroundColor: '#90EE90'}}>Friday</td>
            <td style={{backgroundColor: '#FFD580'}}>Friday</td>
          </tr>
          <tr>
            <td style={{backgroundColor: '#e7f0f6'}}>Organic Waste (every two weeks from April 16 to September 16, weekly from September 17 to December 31)</td>
            <td style={{backgroundColor: '#ADD8E6'}}>Monday</td>
            <td style={{backgroundColor: '#F3CFC6'}}>Monday</td>
            <td style={{backgroundColor: '#FFFF00'}}>Monday</td>
            <td style={{backgroundColor: '#90EE90'}}>Monday</td>
            <td style={{backgroundColor: '#FFD580'}}>Monday</td>
          </tr>
          <tr>
            <td style={{backgroundColor: '#e7f0f6'}}>Large/ Bulky Items</td>
            <td style={{backgroundColor: '#ADD8E6'}}>1st Thursday</td>
            <td style={{backgroundColor: '#F3CFC6'}}>2nd Thursday</td>
            <td style={{backgroundColor: '#FFFF00'}}>3rd Thursday</td>
            <td style={{backgroundColor: '#90EE90'}}>4th Thursday</td>
            <td style={{backgroundColor: '#FFD580'}}>4th Thursday</td>
          </tr>
          <tr>
            <td style={{backgroundColor: '#e7f0f6'}}>Green Waste**</td>
            <td colSpan="5" style={{backgroundColor: '#e7f0f6'}}>Weeks of April 29 and May 20, Weeks of June 21 and October 4</td>
          </tr>
          <tr>
            <td style={{backgroundColor: '#e7f0f6'}}>Branches</td>
            <td colSpan="2" style={{backgroundColor: '#ADD8E6'}}>Weeks of April 29, May 20, July 10</td>
            <td style={{backgroundColor: '#FFFF00'}}>Weeks of May 6 and 27, June 17, July 29</td>
            <td colSpan="2" style={{backgroundColor: '#90EE90'}}>Weeks of May 13, June 3 and 24, August 5</td>
          </tr>
          <tr>
            <td style={{backgroundColor: '#e7f0f6'}}>Special Collection: Cudboard</td>
            <td colSpan="5" style={{backgroundColor: '#e7f0f6'}}>April 12 <br/> Spetember 22</td>
          </tr>
          <tr>
            <td style={{backgroundColor: '#e7f0f6'}}>Special Collection: Large Bulky Items</td>
            <td colSpan='5' style={{backgroundColor: '#e7f0f6'}}>Special bulky waste collections will be added <br/> Fefer to the City's website for deatils</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
