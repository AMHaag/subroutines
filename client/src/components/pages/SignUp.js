import React from 'react';
import {Link} from 'react-router-dom'
import './pages.css';
import { HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi';

let SignUp = function () {
  let submithandler = function (Event) {
    Event.preventDefault();
    console.log('click!');
  };
  return (
    <div className='signup-container'>
      <div className='signup-picture-box'>
        <img
          alt='signuppicture'
          className='signup-picture'
          src='https://placehold.jp/3d4070/ffffff/370x307.png?text=Placeholder%20for%20image%0A%5B370x307%5D'
        ></img>
      </div>
      <div className='signup-title-box'>
        <h2 className='signup-title'>Welcome!</h2>
      </div>
      <form className='signup-forms' id='signup-form' onSubmit={submithandler}>
        <div className='signup-input-container'>
          <label for='user-signup'>
            <HiOutlineMail />
          </label>
          <input type='text' id='user-signup' placeholder='Email' />
        </div>
        <div className='signup-input-container'>
          <label for='password-signup'>
            <HiOutlineLockClosed />
          </label>
          <input type='password' id='password-signup' placeholder='Password' />
        </div>
        <div className='signup-submit-container'>
          <button type='submit'>Create Account</button>
        </div>
      </form>
      <div className='signup-options'>
        <Link to='/login'>Already have an account?</Link>
      </div>
    </div>
  );
};

export default SignUp;
