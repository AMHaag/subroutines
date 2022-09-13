import React from 'react';
import {Link} from 'react-router-dom';

let Welcome = function () {
  return (
    <div>
      <h1>Welcome</h1>
      <Link to='/signup'>Signup</Link>
      <Link to='/login'>Log In</Link>
    </div>
  );
};

export default Welcome;
