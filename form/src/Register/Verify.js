import React, { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Register.css';

const Verify = () => {
  const [isSuccess, setSuccess] = useState(false);
  const [verificationCode, setVerificationCode] = useState(['', '', '', '']);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { message } = location.state || {};

  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleInput = (e, index) => {
    const value = e.target.value;
    const newVerificationCode = [...verificationCode];

    if (error) {
      setError('');
    }

    if (e.nativeEvent.inputType === 'deleteContentBackward') {
      if (index > 0 && !value) {
        inputRefs[index - 1].current.focus();
      }
      newVerificationCode[index] = '';
    } else if (/^\d$/.test(value)) {
      newVerificationCode[index] = value;
      if (index < inputRefs.length - 1) {
        inputRefs[index + 1].current.focus();
      }
    } else {
      e.target.value = '';
    }

    setVerificationCode(newVerificationCode);
  };

  const handleVerify = (e) => {
    e.preventDefault();
    const isCodeComplete = verificationCode.every((digit) => digit !== '');

    if (!isCodeComplete) {
      setError('Please enter the complete verification code');
    } else {
      const code = verificationCode.join('');
      setSuccess(true);
      navigate('/verify', { state: { message: "Verified" } });
    }
  };

  return (
    <div className='card'>
      {!isSuccess ? (
        <>
          <h3 className='title'>Verify</h3>
          <div className='instruct'><p>Enter verification code sent to <span>your email addres</span></p></div>
          
          <div className='code'>
            {inputRefs.map((ref, index) => (
              <input
                key={index}
                ref={ref}
                type='text'
                inputMode='numeric'
                maxLength='1'
                onInput={(e) => handleInput(e, index)}
                className={error ? 'input-error' : ''}
              />
            ))}
          </div>
          <p className='error-message'>{error}</p>
          <button type='submit' onClick={handleVerify}>Verify</button>

          <div className='resend'>
            <p>didn't receive?</p>
            <p id='r'>Resend</p>
          </div>
        </>
      ) : (
        <div className='verified'>
          <iframe className='check'
            src='../assets/check_icon.png'
            title='success'
          />
          <p style={{fontSize: '32px' }}>{message}</p>
        </div>
      )}
    </div>
  );
};

export default Verify;
