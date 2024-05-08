import React, { useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EditTableForm = ({ monthlyDetail, onCancel }) => {
  const [month, setMonth] = useState(monthlyDetail.month);
  const [amount, setAmount] = useState(monthlyDetail.amount);
  const navigate = useNavigate();

  const handleUpdate = () => {
    axios.put(`http://localhost:4011/monthlyana/updatemonthlyDetails/${monthlyDetail._id}`, { month, amount })
      .then(() => {
        console.log('Details updated successfully');
      })
      .catch(error => {
        console.error('Error updating monthly details:', error);
      });
  };

  return (
    <div className='container' >
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12}>
        <Typography variant="h5">Edit Monthly Details</Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Month"
          color='success'
          variant="outlined"
          value={month}
          onChange={e => setMonth(e.target.value)}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Amount"
          color='success'
          variant="outlined"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="success" onClick={handleUpdate}>Update Details</Button>
        <span style={{ marginRight: "10px" }}></span>
        <Button variant="outlined" color="error" onClick={onCancel}>Cancel</Button>
      </Grid>
    </Grid>
    </div>
  );
};

export default EditTableForm;
