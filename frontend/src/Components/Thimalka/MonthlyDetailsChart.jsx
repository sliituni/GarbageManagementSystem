import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import axios from 'axios';

const MonthlyDetailsChart = () => {
  const [monthlyDetails, setMonthlyDetails] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4011/monthlyana/monthlyDetails')
      .then(response => {
        setMonthlyDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching monthly details:', error);
      });
  }, []);

  const maxAmount = monthlyDetails.length > 0 ? Math.max(...monthlyDetails.map(item => item.amount)) : 0;

  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <BarChart
          data={monthlyDetails}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="month" />
          <YAxis domain={[0, maxAmount + 100]}/>
          <Tooltip />
          <Bar dataKey="amount" fill="#529364" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyDetailsChart;
