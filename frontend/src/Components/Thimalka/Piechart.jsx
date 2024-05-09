import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Container, Grid, Box, Typography } from '@mui/material';
import axios from 'axios';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const PieChartMui = () => {
  const [data, setData] = useState([
    { name: 'Recycle', value: 0 },
    { name: 'Compost', value: 0 },
    { name: 'Glass', value: 0 },
    { name: 'Wet Garbage & Food', value: 0 },
  ]);

  const [details, setDetails] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (details.length > 0) {
      calculateWasteTypeSums();
    }
  }, [details]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:4011/analitics/analitics');
      setDetails(response.data);
    } catch (error) {
      setError('Error fetching data from server. Please try again later.');
      console.error('Error fetching data:', error);
    }
  };

  const calculateWasteTypeSums = () => {
    const sums = {};
    details.forEach((detail) => {
      if (sums[detail.wastetype]) {
        sums[detail.wastetype] += detail.wasteamount;
      } else {
        sums[detail.wastetype] = detail.wasteamount;
      }
    });
    updateChartData(sums);
  };

  const updateChartData = (sums) => {
    const updatedData = data.map((entry) => ({
      ...entry,
      value: sums[entry.name] || 0,
    }));
    setData(updatedData);
  };

  return (
    <Container>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6}>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Grid>
        <Grid item xs={12} sm={6} style={{ paddingLeft: '200px' }}>
          <Box sx={{ pl: 2 }}>
            {data.map((entry, index) => (
              <Box key={entry.name} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box sx={{ width: 10, height: 10, backgroundColor: COLORS[index], mr: 1 }} />
                <Typography>{entry.name}</Typography>
                <Typography variant="body2" sx={{ ml: 1, color: 'text.secondary' }}>
                  {`${entry.value} units`}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PieChartMui;
