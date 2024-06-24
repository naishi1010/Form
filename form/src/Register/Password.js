import React from 'react'
import './Register.css'
import { useNavigate,useLocation } from 'react-router-dom'
import { useState } from 'react'
const Password = () => {
    const [formData,setformData] = useState({
      newPassword:'',
      confirmPassword:''
    })

    const [errors,setErrors] = useState({
      newPassword:'',
      confirmPassword:''
    })

    const handleChange=(e)=>{
      const {name,value} = e.target
      setformData({...formData,[name]:value})
      if(errors[name]){
        setErrors({...errors,[name]:''})
      }
    }

    const navigate = useNavigate()
    const location = useLocation()
    const { from } = location.state || {};
    const handleSet=(e)=>{
        e.preventDefault();
        const newErrors = {}
        if(!formData.newPassword){
          newErrors.newPassword = 'Please enter new password!'
        }

        if(!formData.confirmPassword){
          newErrors.confirmPassword = 'Please Enter Confirm Password!'
        }

        if(Object.values(newErrors).length > 0){
          setErrors(newErrors)
        }else{
        setformData({
          newPassword:'',
          confirmPassword:''
        })
        navigate('/success', { state: { message: from === 'register' ? 'You have successfully registered!' : 'You have successfully created your password!' } });
      }
    }

  return (
    <div className='pass'>
        <h3>{from === 'register' ? 'Set Password' : 'New Password'}</h3>
        <form onSubmit={handleSet}>
        <div className='labels'>
          <div className='field'>
          <label>New Password</label>
          <input 
          type='password'
          name='newPassword'
          value={formData.newPassword}
          onChange={handleChange} 
          placeholder='password'
          className={errors.newPassword ? 'input-error': ''}
          ></input>
          <p className='error-message'>{errors.newPassword}</p>
          </div>
          <div className='field'>
          <label>Confirm Password</label>
          <input 
          type='password' 
          name='confirmPassword'
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder='password'
          className={errors.confirmPassword ? 'input-error' : ''}
          ></input>
          <p className='error-message'>{errors.confirmPassword}</p>
          </div>
        </div>
        <button>Submit</button>
        </form>
    </div>
  )
}

export default Password