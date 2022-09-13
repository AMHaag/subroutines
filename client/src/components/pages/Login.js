import React from 'react';
import {Link} from 'react-router-dom'
import './pages.css';
import { HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi';

let Login = function () {
  let submithandler=function(Event){
    Event.preventDefault()
    console.log('click!')
  }
  return (
    <div className='login-container'>
      <div className='login-picture-box'>
        <img
          alt='loginpicture'
          className='login-picture'
          src='https://placehold.jp/3d4070/ffffff/370x307.png?text=Placeholder%20for%20image%0A%5B370x307%5D'
        ></img>
      </div>
      <div className='login-title-box'>
        <h2 className='login-title'>Login</h2>
      </div>
      <form
        className='login-forms'
        id='login-form'
        onSubmit={submithandler}  
      >
        <div className='login-input-container'>
          <label for='user-login'>
             
          </label>
          <input type='text' id='user-login' placeholder='Email' />
        </div>
        <div className='login-input-container'>
          <label for='password-login'>
            <HiOutlineLockClosed />
          </label>
          <input type='password' id='password-login' placeholder='Password' />
        </div>
        <div className='login-submit-container'>
          <button type='submit'>Login</button>
        </div>
      </form>
      <div className='login-options'>
        <Link to='/forgot-password'>Forgot Password?</Link>
        <Link to='/signup'>New to SubRoutines? Sign up for free!</Link>
      </div>
    </div>
  );
};

export default Login;
