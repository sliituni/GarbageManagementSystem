import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
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

  const navigate = useNavigate();
  const { fullname, email, contactno, address, password } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
    <div className='container' style={{marginTop:'200px'}}>
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
        </div><br/>
        <div>
          <button type="submit" className="btn btn-success form-control"><b>Sign Up</b></button>
        </div><br/>
        <p>Already have an account? <Link to={"/"}> Login</Link> </p>
      </form>
      </div>
      <div className='col-sm-6'>
      <img src={login} alt='login' width="700" height="500" style={{paddingLeft:"200px"}}/>
    </div>
      </div>
    </div>
  );
};

export default SignupForm;
  