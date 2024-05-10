import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Grid, Typography } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import AHeader from '../AHeader';

const UpdateForm = () => {
  const [openAlert, setOpenAlert] = useState(false);
  const [formData, setFormData] = useState({
    a1: '',
    a2: '',
    a3: '',
    a4: '',
    abcde5: '',
    ab6: '',
    abcde7: '',
    abcde8: '',
    b1: '',
    b2: '',
    b3: '',
    b4: '',
    c1: '',
    c2: '',
    c3: '',
    c4: '',
    c6: '',
    d1: '',
    d2: '',
    d3: '',
    d4: '',
    de6: '',
    e1: '',
    e2: '',
    e3: '',
    e4: ''
  });

  // Fetch existing data from the server and populate the form fields
  useEffect(() => {
    const fetchTableData = async () => {
      try {
        const response = await axios.get('http://localhost:4011/table/getTable/6637043fdea388a61e70cc8e'); // Update the URL accordingly
        const tableData = response.data.table;
        setFormData(tableData);
      } catch (error) {
        console.error('Error fetching table data:', error);
      }
    };

    fetchTableData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put('http://localhost:4011/table/updatetable/6637043fdea388a61e70cc8e', formData); // Update the URL accordingly
      console.log('Table data updated successfully');
      setOpenAlert(true);
    } catch (error) {
      console.error('Error updating table data:', error);
    }
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };


  return (
    <div>
    <AHeader/>
    <div className='container mt-5' style={{paddingTop: '100px', paddingBottom: '190px'}}>
      <Typography variant="h4" gutterBottom>
        Update Table Data
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={3}>
            <TextField
              label="A1"
              id="a1"
              name="a1"
              value={formData.a1}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              label="A2"
              id="a2"
              name="a2"
              value={formData.a2}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              label="A3"
              id="a3"
              name="a3"
              value={formData.a3}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              label="A4"
              id="a4"
              name="a4"
              value={formData.a4}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              label="ABCDE5"
              id="abcde5"
              name="abcde5"
              value={formData.abcde5}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              label="AB6"
              id="ab6"
              name="ab6"
              value={formData.ab6}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              label="ABCDE7"
              id="abcde7"
              name="abcde7"
              value={formData.abcde7}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              label="ABCDE8"
              id="abcde8"
              name="abcde8"
              value={formData.abcde8}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              label="B1"
              id="b1"
              name="b1"
              value={formData.b1}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              label="B2"
              id="b2"
              name="b2"
              value={formData.b2}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              label="B3"
              id="b3"
              name="b3"
              value={formData.b3}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              label="B4"
              id="b4"
              name="b4"
              value={formData.b4}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              label="C1"
              id="c1"
              name="c1"
              value={formData.c1}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              label="C2"
              id="c2"
              name="c2"
              value={formData.c2}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              label="C3"
              id="c3"
              name="c3"
              value={formData.c3}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              label="C4"
              id="c4"
              name="c4"
              value={formData.c4}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              label="C6"
              id="c6"
              name="c6"
              value={formData.c6}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              label="D1"
              id="d1"
              name="d1"
              value={formData.d1}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              label="D2"
              id="d2"
              name="d2"
              value={formData.d2}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              label="D3"
              id="d3"
              name="d3"
              value={formData.d3}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              label="D4"
              id="d4"
              name="d4"
              value={formData.d4}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              label="DE6"
              id="de6"
              name="de6"
              value={formData.de6}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              label="E1"
              id="e1"
              name="e1"
              value={formData.e1}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              label="E2"
              id="e2"
              name="e2"
              value={formData.e2}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              label="E3"
              id="e3"
              name="e3"
              value={formData.e3}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              label="E4"
              id="e4"
              name="e4"
              value={formData.e4}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="success" style={{ marginTop: 20 }}>
          Update Data
        </Button>
      </form>
      <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleCloseAlert} anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}>
        <MuiAlert onClose={handleCloseAlert} variant="filled" severity="success" sx={{ width: '100%' }}>
          Data updated successfully
        </MuiAlert>
      </Snackbar>
    </div>
    </div>
  );
};

export default UpdateForm;
