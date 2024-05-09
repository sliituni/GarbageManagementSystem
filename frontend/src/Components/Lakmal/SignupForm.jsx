import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import login from './img/login.png';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    contactno: '',
    address: '',
    password: '',
    image: null
  });

  const navigate = useNavigate();
  const { fullname, email, contactno, address, password, image } = formData;
  const [previewImage, setPreviewImage] = useState(null);
  const [emailError, setEmailError] = useState('');
  const [contactError, setContactError] = useState('');

  const onChange = e => {
    if (e.target.name === 'image') {
      setFormData({ ...formData, image: e.target.files[0] });

      // Preview image
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const validateContactNo = () => {
    if (!contactno.match(/^\d{10}$/)) {
      setContactError('Invalid Contact No format (e.g., 1234567890)');
      return false;
    } else {
      setContactError('');
      return true;
    }
  };

  const validateEmail = () => {
    // Regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      setEmailError('Invalid email address');
      return false;
    } else {
      setEmailError('');
      return true;
    }
  };

  const onSubmit = async e => {
    e.preventDefault();
    // Validate email and contact no
    if (!validateEmail() || !validateContactNo()) {
      return;
    }

    const data = new FormData();
    data.append('fullname', fullname);
    data.append('email', email);
    data.append('contactno', contactno);
    data.append('address', address);
    data.append('password', password);
    if (image) {
      data.append('image', image);
    }

    try {
      const res = await axios.post('http://localhost:4011/user/signup', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      console.log(res.data);
      navigate('/');
      setFormData({
        fullname: '',
        email: '',
        contactno: '',
        address: '',
        password: '',
        image: null
      });
      setPreviewImage(null); // Clear preview image after submission
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className='container' style={{ marginTop: '200px' }}>
      <div className='row'>
        <div className='col-sm-6'>
          <h2>Create Account</h2>
          <form onSubmit={onSubmit}>
            <TextField
              label="Full Name"
              variant="filled"
              color="success"
              fullWidth
              margin="normal"
              name="fullname"
              value={fullname}
              onChange={onChange}
              required
            />
            <TextField
              label="Email"
              variant="filled"
              color="success"
              fullWidth
              margin="normal"
              name="email"
              value={email}
              onChange={onChange}
              required
              error={!!emailError}
              helperText={emailError}
            />
            <TextField
              label="Contact No"
              variant="filled"
              color="success"
              fullWidth
              margin="normal"
              name="contactno"
              value={contactno}
              onChange={onChange}
              required
              error={!!contactError}
              helperText={contactError}
            />
            <TextField
              label="Address"
              variant="filled"
              color="success"
              fullWidth
              margin="normal"
              name="address"
              value={address}
              onChange={onChange}
              required
            />
            <TextField
              label="Password"
              variant="filled"
              color="success"
              fullWidth
              margin="normal"
              name="password"
              value={password}
              onChange={onChange}
              type="password"
              required
            />
            <input
              variant="filled"
              color="success"
              fullWidth
              margin="normal"
              name="image"
              onChange={onChange}
              type="file"
              required
            />
            {previewImage &&
              <img src={previewImage} alt="Preview"
                style={{ width: "100px", height: "100px", marginTop: "10px", borderRadius: '100px' }}
              />}
            <br />
            <br />
            <Button type="submit" variant="contained" color="success" fullWidth style={{ backgroundColor: '#34A853', color: 'white' }}>
              <b>Sign Up</b>
            </Button>
            <br /><br />
            <p>Already have an account? <Link to={"/"}> Login</Link></p>
          </form>
        </div>
        <div className='col-sm-6'>
          <img src={login} alt='login' width="700" height="500" style={{ paddingLeft: "200px" }} />
        </div>
      </div>
      <br /><br /><br /><br /><br /><br /><br />
    </div>
  );
};

export default SignupForm;
