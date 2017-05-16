import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Routes from './routes';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { configureStore } from './store/configureStore';

const store = configureStore();

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
)
