import React from 'react';
import AHeader from '../AHeader';
import { Link } from 'react-router-dom';
import Piechart from './Piechart';
import MonthlyDetailsChart from './MonthlyDetailsChart';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

export default function Dashboard() {
  return (
    <div className='container' style={{ paddingTop: '150px', textAlign: 'center' }}>
      <AHeader />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card style={{ height: '170px',backgroundColor:'#9fe1b5' }}>
            <p style={{textAlign: 'left', marginLeft: '10px'}}>User</p>
            <CardContent>
                <Typography>
                <PeopleAltIcon sx={{ fontSize: 50 }} />
              </Typography>
              <Typography variant="h5" component="h2" style={{ paddingTop: '10px' }}>
                All Users
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card style={{ height: '170px',backgroundColor:'#9fe1b5' }}>
          <p style={{textAlign: 'left', marginLeft: '10px'}}>Inquires</p>
            <CardContent>
                <Typography>
                <QuestionMarkIcon sx={{ fontSize: 50 }} />
              </Typography>
              <Typography variant="h5" component="h2" style={{ paddingTop: '10px' }}>
              Inquires
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card style={{ height: '170px',backgroundColor:'#9fe1b5' }}>
          <p style={{textAlign: 'left', marginLeft: '10px'}}>Garbage request</p>
            <CardContent>
                <Typography>
                <PeopleAltIcon sx={{ fontSize: 50 }} />
              </Typography>
              <Typography variant="h5" component="h2" style={{ paddingTop: '10px' }}>
              Total Garbage request 
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
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
