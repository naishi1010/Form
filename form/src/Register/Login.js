import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const navigate = useNavigate();

  const handlepass = (e) => {
    e.preventDefault();
    navigate('/forgetpass');
  };

  const handleregister = (e) => {
    e.preventDefault();
    navigate('/register');
  };

  const handlelogin = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.username) {
      newErrors.username = 'Username is required';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setFormData({
        username: '',
        password: ''
      });
      navigate('/verify', { state: { message: 'You have successfully logged in!' } });
    }
  };

  return (
    <div className='login'>
      <h3>Login Here</h3>
      <form onSubmit={handlelogin}>
        <div className='labels'>
          <div className='field'>
            <label>UserName</label>
            <input
              type='text'
              name='username'
              value={formData.username}
              onChange={handleChange}
              placeholder='username'
              className={errors.username ? 'input-error' : ''}
            ></input>
          <p className='error-message'>{errors.username}</p>
          </div>
          <div className='field'>
            <label>Password</label>
            <input
              type='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              placeholder='password'
              className={errors.password ? 'input-error' : ''}
            ></input>
            <p className='error-message'>{errors.password}</p>
          </div>
        </div>
        <button type='submit'>Login</button> 
        <div className='forget'>
        <p onClick={handlepass}>Forget Password?</p>
        <p onClick={handleregister}>Register?</p>
      </div>    
      </form>
      
    </div>
  );
};

export default Login;
