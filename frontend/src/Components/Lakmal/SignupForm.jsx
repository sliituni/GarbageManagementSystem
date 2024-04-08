import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

import login from './img/login.png';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    contactno: '',
    address: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { fullname, email, contactno, address, password } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === 'email') {
      validateEmail(e.target.value);
    } else if (e.target.name === 'contactno') {
      validateContactNo(e.target.value);
    } else if (e.target.name === 'password') {
      validatePassword(e.target.value);
    }
  };

  const validateEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrors({ ...errors, email: 'Invalid email address' });
    } else {
      setErrors({ ...errors, email: '' });
    }
  };

  const validateContactNo = contactno => {
    const contactRegex = /^\d{10}$/;
    if (!contactRegex.test(contactno)) {
      setErrors({ ...errors, contactno: 'Contact number must be 10 digits' });
    } else {
      setErrors({ ...errors, contactno: '' });
    }
  };

  const validatePassword = password => {
    // Password must be at least 6 characters long
    // Password must contain both letters and numbers
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!passwordRegex.test(password)) {
      setErrors({ ...errors, password: 'Password must be at least 6 characters long and contain both letters and numbers' });
    } else {
      setErrors({ ...errors, password: '' });
    }
  };

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:4011/user/signup', formData);
      console.log(res.data);
      navigate('/');
      // Reset form after successful submission
      setFormData({
        fullname: '',
        email: '',
        contactno: '',
        address: '',
        password: ''
      });
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
            <div className='mb-3'>
              <label className="form-label">Full Name:</label>
              <input
                type="text"
                className="form-control"
                name="fullname"
                value={fullname}
                onChange={onChange}
                required
              />
            </div>
            <div className='mb-3'>
              <label className="form-label">Email:</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={email}
                onChange={onChange}
                required
              />
              {errors.email && <p className="text-danger">{errors.email}</p>}
            </div>
            <div className='mb-3'>
              <label className="form-label">Contact No:</label>
              <input
                type="text"
                className="form-control"
                name="contactno"
                value={contactno}
                onChange={onChange}
                required
              />
              {errors.contactno && <p className="text-danger">{errors.contactno}</p>}
            </div>
            <div className='mb-3'>
              <label className="form-label">Address:</label>
              <input
                type="text"
                className="form-control"
                name="address"
                value={address}
                onChange={onChange}
                required
              />
            </div>
            <div className='mb-3'>
              <label className="form-label">Password:</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={onChange}
                required
              />
              {errors.password && <p className="text-danger">{errors.password}</p>}
            </div><br />
            <div>
              <button type="submit" className="btn btn-success form-control"><b>Sign Up</b></button>
            </div><br />
            <p>Already have an account? <Link to={"/"}> Login</Link> </p>
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
