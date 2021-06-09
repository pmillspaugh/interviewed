import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import MaxWidthWrapper from './ui/MaxWidthWrapper';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import Dashboard from './Dashboard';

const App = () => {
  const loggedIn = useSelector((state) => state.user.loggedIn);

  return (
    <Router>
      <AppWrapper>
        <Header />
        <MaxWidthWrapper>
          <Route path='/'>{loggedIn ? <Dashboard /> : <Login />}</Route>
        </MaxWidthWrapper>
        <Footer />
      </AppWrapper>
    </Router>
  );
};

const AppWrapper = styled.div`
  min-height: 100%;
  display: grid;
  grid-template-rows: 68px 1fr 68px;
`;

export default App;
