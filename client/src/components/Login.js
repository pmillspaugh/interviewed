import React from 'react';

const Login = () => {
  return (
    <main>
      <h1>Login page</h1>
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
      <p>
        New user? <a href=''>Sign up</a>
      </p>
    </main>
  );
};

export default Login;
