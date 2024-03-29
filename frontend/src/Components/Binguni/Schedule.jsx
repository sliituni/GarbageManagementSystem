import React from 'react';

export default function Schedule() {
  // Words to display in the table cells
  const words = [
    ['', 'A', 'B', 'C', 'D', 'E'],
    ['Household waste/ Garbage (every 2 weeks)* ', 'Wednesday', 'Wednesday', 'Wednesday', 'Wednesday', 'Wednesday'],
    ['Recycling (weekly)', 'Friday', 'Friday', 'Friday', 'Friday', 'Friday'],
    ['Organic Waste (every two weeks from April 16 to  September 16, weekly from September 17 to December 31)', 'Monday', 'Monday', 'Monday', 'Monday', 'Monday'],
    ['Large/ Bulcky Items', '1st Thursday', '2st Thursday', '3st Thursday', '4st Thursday', '4st Thursday'],
    ['Green Waste**', 'Weeks of April 29 and May 20, Weeks of June 21 and October 4'], 
    ['Branches', 'Weeks of April 29, May 20, July 10', 'Weeks of May 6 and 27, June 17, July 29', 'Weeks od May 13, June 3 and 24, August 5', '', ''], 
    ['Special Collection: Cudboard', 'Word44', 'Word45', 'Word46', 'Word47', 'Word48'],
    ['Special Collection: Large Bulky Items', 'Word44', 'Word45', 'Word46', 'Word47', 'Word48']
  ];

  // Generating table rows
  const rows = words.map((row, rowIndex) => (
    <tr key={rowIndex}>
      {/* Generating cells for each row */}
      {row.map((word, colIndex) => {
        if (rowIndex === 5 && colIndex === 1) {
          // Merging cells in the 6th row, columns 2-6
          return (
            <td key={colIndex} colSpan={5}>
              {word}
            </td>
          );
        } else {
          return <td key={colIndex}>{word}</td>;
        }
      })}
    </tr>
  ));

  return (
    <div id="gscheadule" className="container">
      <div className="mb-3">schedule</div>
      <table className="table table-bordered">
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}
