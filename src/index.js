import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { compose, applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import { Router } from 'react-router-dom';
import reducers from './reducers';
import App from './App';
import history from './history';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDom.render(
  <Provider store={store}>
    <Router history={history}>
      <App></App>
    </Router>
  </Provider>,
  document.querySelector('#root')
);
