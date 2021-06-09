import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers/reducer';
// add redux middleware?

const store = createStore(reducer, composeWithDevTools());

export default store;
