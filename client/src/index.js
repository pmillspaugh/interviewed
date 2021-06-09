import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import store from './store';
import { GlobalStyles, CssReset } from './components/ui/GlobalStyles';
// add analytics?

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <GlobalStyles />
      <CssReset />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
