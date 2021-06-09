import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import styled from 'styled-components';

import store from '../store';
import { GlobalStyles, CssReset } from './ui/GlobalStyles';
import MaxWidthWrapper from './ui/MaxWidthWrapper';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';

const App = () => {
  return (
    <Provider store={store}>
      <AppWrapper>
        <Header />
        <MaxWidthWrapper>
          <Router>
            <Switch>
              <Route path='/login'>
                <Login />;
              </Route>
              <Route path='/signup'>
                <Signup />;
              </Route>
              <Route path='/dashboard'>
                <Dashboard />
              </Route>
              <Route path='/'>
                <Dashboard />
              </Route>
            </Switch>
          </Router>
        </MaxWidthWrapper>
        <GlobalStyles />
        <CssReset />
        <Footer />
      </AppWrapper>
    </Provider>
  );
};

const AppWrapper = styled.div`
  min-height: 100%;
  display: grid;
  grid-template-rows: 68px 1fr 68px;
`;

export default App;
