import React, { useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';
import axios from 'axios';

const AddMonthlyDetails = () => {
  const [month, setMonth] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleAddDetails = () => {
    axios.post('http://localhost:4011/monthlyana/addmonthlyDetails', { month, amount })
      .then(() => {
        setMessage('Details added successfully');
        setMonth('');
        setAmount('');
      })
      .catch(error => {
        setMessage('Error adding details');
        console.error(error);
      });
  };

  return (
    <div className='container mt-5'>
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12}>
        <Typography variant="h5">Add Monthly Details</Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Month"
          variant="outlined"
          value={month}
          onChange={e => setMonth(e.target.value)}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Amount"
          variant="outlined"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleAddDetails}>Add Details</Button>
      </Grid>
      <Grid item xs={12}>
        {message && <Typography variant="body1" color={message.includes('Error') ? 'error' : 'success'}>{message}</Typography>}
      </Grid>
    </Grid>
    </div>
  );
};

export default AddMonthlyDetails;
