import React, { useEffect, useState } from 'react';
import AHeader from '../AHeader';
import { Link } from 'react-router-dom';
import Piechart from './Piechart';
import MonthlyDetailsChart from './MonthlyDetailsChart';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { Footer } from '../Footer';

export default function Dashboard() {
  const [userCount, setUserCount] = useState(0);
  const [inquiriesCount, setInquiriesCount] = useState(0);
  const [garbageCount, setGarbageCount] = useState(0);

  useEffect(() => {
    fetchUserCount();
    fetchInquiriesCount();
    fetchGarbageCount();
  }, []);

  const fetchUserCount = async () => {
    try {
      const response = await fetch('http://localhost:4011/user/getAllUsers');
      const data = await response.json();
      const count = data.users.length; // Count the number of users in the array
      setUserCount(count);
    } catch (error) {
      console.error('Error fetching user count:', error);
    }
  };

  const fetchInquiriesCount = async () => {
    try {
      const response = await fetch('http://localhost:4011/contact/allContact');
      const data = await response.json();
      const count = data.length; // Count the number of inquiries
      setInquiriesCount(count);
    } catch (error) {
      console.error('Error fetching inquiries count:', error);
    }
  };

  const fetchGarbageCount = async () => {
    try {
      const response = await fetch('http://localhost:4011/garbageRequest/GarbafeRequest');
      const data = await response.json();
      const count = data.length; //Count the Count of garbage requests
      setGarbageCount(count);
    } catch (error) {
      console.error('Error fetching garbage request count:', error);
    }
  }


  return (
    <div>
      <div className='container' style={{ paddingTop: '150px', textAlign: 'center' }}>
        <AHeader />
        <Grid container spacing={2}>
          <Grid component={Link} to={'/usermng'} item xs={12} sm={4} style={{ textDecoration: 'none' }}>
            <Card style={{ height: '170px', backgroundColor: '#9fe1b5' }}>
              <p style={{ textAlign: 'left', marginLeft: '10px', fontSize: '20px' }}><b>User</b></p>
              <CardContent>
                <Typography>
                  <PeopleAltIcon sx={{ fontSize: 50 }} />
                </Typography>
                <Typography variant="h5" component="h2" style={{ paddingTop: '10px' }}>
                  {userCount}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid component={Link} to={'/AllContact'} item xs={12} sm={4} style={{ textDecoration: 'none' }}>
            <Card style={{ height: '170px', backgroundColor: '#9fe1b5' }}>
              <p style={{ textAlign: 'left', marginLeft: '10px', fontSize: '20px' }}><b>Inquires</b></p>
              <CardContent>
                <Typography>
                  <QuestionMarkIcon sx={{ fontSize: 50 }} />
                </Typography>
                <Typography variant="h5" component="h2" style={{ paddingTop: '10px' }}>
                  {inquiriesCount}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid component={Link} to={'/gbReq'} item xs={12} sm={4} style={{ textDecoration: 'none' }}>
            <Card style={{ height: '170px', backgroundColor: '#9fe1b5' }}>
              <p style={{ textAlign: 'left', marginLeft: '10px', fontSize: '20px' }}><b>Garbage request</b></p>
              <CardContent>
                <Typography>
                  <PeopleAltIcon sx={{ fontSize: 50 }} />
                </Typography>
                <Typography variant="h5" component="h2" style={{ paddingTop: '10px' }}>
                  {garbageCount}
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
      <Footer />
    </div>
  );
}
