import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';

import login from './img/login.png';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [setError] = useState('');
  const navigate = useNavigate();

  const { email, password } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:4011/user/login', formData);
      console.log(res.data);
      localStorage.setItem('userId',res.data.userDetails._id)
      setFormData({
        email: '',
        password: ''
      });
      // Redirect to index.js page after successful login
      navigate('/Landing');
    } catch (err) {
      if (err.response.status === 400) {
        alert("Email or password incorrect !")
      } else {
        setError('Server error. Please try again later.');
      }
    }
  };

  return (
    <div className='container ' style={{marginTop:'200px'}}>
    <div className='row'>
    <div className='col-sm-6'>
      <h2>Login Account</h2>
      <form onSubmit={onSubmit}>
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
          <button type="submit" className="btn btn-success form-control"><b>Login</b></button>
        </div><br/>
        <p><Link to={"/signup"}>Register</Link> new Account</p>
      </form>
    </div>
    <div className='col-sm-6'>
      <img src={login} alt='login' width="700" height="500" style={{paddingLeft:"200px"}}/>
    </div>
    </div>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
};

export default LoginForm;
