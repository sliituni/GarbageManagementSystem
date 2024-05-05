import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Container, Grid, Box, Typography } from '@mui/material';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default class PieChartMui extends PureComponent {
  render() {
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
          <Grid item xs={12} sm={6} style={{paddingLeft: '200px'}}>
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
  }
}
