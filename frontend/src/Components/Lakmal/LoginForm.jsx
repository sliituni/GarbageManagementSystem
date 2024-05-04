import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import login from './img/login.png';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [successOpen, setSuccessOpen] = useState(null);
  const navigate = useNavigate();

  const { email, password } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSuccessOpen(null);
    setError('');
  };

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:4011/user/login', formData);
      console.log(res.data);
      localStorage.setItem('userId', res.data.userDetails._id);
      setFormData({
        email: '',
        password: ''
      });
      setSuccessOpen(true);
      // Redirect to index.js page after successful login
      navigate('/Landing');
    } catch (err) {
      if (err.response.status === 400) {
        setError("Email or password incorrect !");
      } else {
        setError('Server error. Please try again later.');
      }
    }
  };

  return (
    <div className='container ' style={{ marginTop: '200px' }}>
      <div className='row'>
        <div className='col-sm-6'>
          <h2>Login Account</h2>
          <form onSubmit={onSubmit}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              name="email"
              value={email}
              onChange={onChange}
              required
            />
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              margin="normal"
              name="password"
              value={password}
              onChange={onChange}
              type="password"
              required
            />
            <br />
            <Button type="submit" variant="contained" color="success" fullWidth style={{ backgroundColor: '#34A853', color: 'white' }}>
              <b>Login</b>
            </Button>
            <br /><br />
            <p><Link to={"/signup"}>Register</Link> new Account</p>
          </form>
        </div>
        <div className='col-sm-6'>
          <img src={login} alt='login' width="700" height="500" style={{ paddingLeft: "200px" }} />
        </div>
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      {/* Snackbar for success message */}
      <Snackbar open={successOpen} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}>
        <MuiAlert onClose={handleClose} variant="filled" severity="success" sx={{ width: '100%' }}>
          Login Successful!
        </MuiAlert>
      </Snackbar>

      {/* Snackbar for error message */}
      <Snackbar open={error !== ''} autoHideDuration={6000} onClose={() => setError('')} anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}>
        <MuiAlert onClose={() => setError('')} variant="filled" severity="error" sx={{ width: '100%' }}>
          {error}
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default LoginForm;
