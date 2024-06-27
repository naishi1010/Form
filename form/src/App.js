import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './Register/Register';
import Verify from './Register/Verify';
import Password from './Register/Password';
import Success from './Register/Success';
import Login from './Register/Login';
import ForgetPass from './Register/ForgetPass';
import './Register/Register.css'

function App() {
  return (
    <Router>
      <div className='Main'>
        <img className='logo'
          src='./assets/da-1.png'
          title='logo' 
          style={{"margin-left": "2rem"}}
        />
        <div className='main-body'>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/set-password" element={<Password />} />
          <Route path='/success' element={<Success/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/forgetpass' element={<ForgetPass/>}/>
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
