import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Card, CardContent, Typography, Alert } from '@mui/material';

import logo from '../img/greenbinlogo.png';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === 'admin@gmail.com' && password === '1234') {
      setAlertMessage('Login successful!');
      setShowAlert(true);
      navigate('/admindash');
    } else {
      setAlertMessage('Invalid email or password');
      setShowAlert(true);
    }
  };

  return (
    <Card sx={{ maxWidth: 400, margin: 'auto', marginTop: 30, padding: 2, marginBottom: 32}}>
      <CardContent style={{borderRadius: '10px'}}>
        <img src={logo} alt="Logo" width="100" height="100" />
        <Typography variant="h5" component="h2">
          Admin Login
        </Typography>
        <br/>
        <TextField
          fullWidth
          type="email"
          label="Email"
          placeholder="Enter your email"
          color='success'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          fullWidth
          type="password"
          label="Password"
          placeholder="Enter your password"
          color='success'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <Button variant="contained" color='success' onClick={handleLogin} fullWidth>
          Login
        </Button>
        <br/><br/>
        {showAlert && (
          <Alert severity={alertMessage === 'Login successful!' ? 'success' : 'error'} onClose={() => setShowAlert(false)}>
            {alertMessage}
          </Alert>
        )}
      </CardContent>
    </Card>
  );
};

export default AdminLogin;
