import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../actions/actionCreators';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <Router>
      <nav>
        <Link to='/dashboard'>Dashboard</Link>
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Signup</Link>
        <button onClick={() => dispatch(toggleTheme())}>Change theme</button>
      </nav>
    </Router>
  );
};

export default Header;
