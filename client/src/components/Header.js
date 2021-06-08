import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Header = () => {
  return (
    <Router>
      <nav>
        <Link to='/dashboard'>Dashboard</Link>
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Signup</Link>
      </nav>
    </Router>
  );
};

export default Header;
