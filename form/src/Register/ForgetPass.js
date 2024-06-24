import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Register.css';

const ForgetPass = () => {
  const [useremail, setUseremail] = useState({ useremail: '' });
  const [errors, setErrors] = useState({ useremail: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUseremail({ ...useremail, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!useremail.useremail) {
      newErrors.useremail = 'User Email is Required!';
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setUseremail({ useremail: '' });
      navigate('/success', { state: { message: 'A link has been shared to your email to reset password' } });
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/register');
  };

  return (
    <div className='forgetpass'>
      <h3>Forget Password</h3>
      <form onSubmit={handleSubmit}>
        <div className='labels'>
          <div className='field'>
            <label>User Email</label>
            <input
              type='email'
              name='useremail'
              value={useremail.useremail}
              onChange={handleChange}
              placeholder='Enter registered email'
              className={errors.useremail ? 'input-error' : ''}
            ></input>
            {errors.useremail && <p className='error-message'>{errors.useremail}</p>}
            <button type='submit'>Submit</button>
            <p className='reg' onClick={handleRegister}>Register?</p>
          </div>
        </div>
       
      </form>
      
    </div>
  );
};

export default ForgetPass;
