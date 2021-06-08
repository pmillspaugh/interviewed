import React from 'react';

const Signup = () => {
  return (
    <main>
      <h1>Signup page</h1>
      <form action=''>
        <label htmlFor='username'>
          Username:
          <input type='text' name='username' />
        </label>
        <label htmlFor='password'>
          Password:
          <input type='text' name='password' />
        </label>
      </form>
      <button>Sign up with Google</button>
      <button>Sign up with LinkedIn</button>
      <button>Sign up with GitHub</button>
      <button>Sign up with Facebook</button>
      <button>Sign up with Twitter</button>
    </main>
  );
};

export default Signup;
