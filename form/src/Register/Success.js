import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
const Success = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { message } = location.state || {};
    const handleLogin =(e)=>{
        e.preventDefault();
        navigate('/')
    }


  return (
    <div className='Success'>
        <img className='check'
            src='../assets/check_icon.png'
            title='success'
        />
        <div className='message'>
        <h3>Congratulations!</h3>
        <p className='success-message'>{message}</p>
        <button onClick={handleLogin}>⬅️ Back to Login</button>
        </div>
    </div>
  )
}

export default Success