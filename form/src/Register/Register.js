import React from 'react'
import './Register.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Register = () => {
  const navigate = useNavigate();
  
  
  const [formData, setformData] = useState({
    firstName:'',
    lastName: '',
    company: '',
    email: '',
    mobile: ''
  });

  const [error,setError] = useState({
    firstName:'',
    lastName:'',
    company:'',
    email:''
  })
  
  
  const handleChange=(e)=>{
    const {name,value} = e.target;
    setformData({...formData,[name]:value});
    if(error[name]){
      setError({...error,[name]:''});
    }
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formData);
    const newErrors = {}
    if(!formData.firstName){
      newErrors.firstName = "Please Enter FirstName"
    }
    if(!formData.lastName){
      newErrors.lastName="Please Enter LastName"
    }
    if(!formData.company){
      newErrors.company="Please Enter Company name"
    }
    if(!formData.email){
      newErrors.email = "Please Enter Email"
    }

    if(Object.values(newErrors).length > 0){
      setError(newErrors)
    }else{
    setformData({
      firstName:'',
      lastName: '',
      company: '',
      email: '',
      mobile: ''

    });
    navigate('/success', { state: { message: 'You have successfully Registered!\ncheck your inbox for the link!' } });
  }
  }


  return (
    <div className='registration'>
      <form onSubmit={handleSubmit}>
        <h3>Register</h3>
        <div className='labels'>
          <div className='field'>
          <label>First Name</label>
          <input 
            type='text'
            name='firstName'
            value={formData.firstName}
            onChange={handleChange}
            placeholder='first name'
            className={error.firstName ? 'input-error' : ''}
            ></input>
            <p className='error-message'>{error.firstName}</p>
          </div>
          <div className='field'>
          <label>Last Name</label>
          <input 
            type='text'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
            placeholder='last name'
            className={error.lastName ? 'input-error' : ''}
            ></input>
            <p className='error-message'>{error.lastName}</p>
          </div>
          <div className='field'>
          <label>Company</label>
          <input 
            type='text'
            name='company'
            value={formData.company}
            onChange={handleChange} 
            placeholder='company'
            className={error.company ? 'input-error' : ''}
            ></input>
            <p className='error-message'>{error.company}</p>
          </div>
          <div className='field'>
          <label>Email</label>
          <input 
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange} 
          placeholder='email'
          className={error.email ? 'input-error' : ''}
            ></input>
            <p className='error-message'>{error.email}</p>
          </div>
          <div className='field'>
          <label>Mobile</label>
          <input 
          type='tel' 
          name='mobile'
          value={formData.mobile}
          onChange={handleChange}
          placeholder='mobile (optional)'
          ></input>
          </div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Register