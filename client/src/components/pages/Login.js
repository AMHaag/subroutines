import React from 'react';
import './pages.css'

let Login =function(){

    return (
      <div>
        <form className='login-forms' id='login-form' onSubmit={console.log('submit!')}>
          <h2>Log In</h2>
          <div>
            <label for='user-login'>User:</label>
            <input type='text' id='user-login' />
          </div>
          <div>
            <label for='password-login'>Password:</label>
            <input type='password' id='password-login' />
          </div>
          <div>
            <button type='submit'>Login</button>
          </div>
        </form>
      </div>
    );
}

export default Login;