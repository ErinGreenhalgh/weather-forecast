import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export const configureStore = () => {
  return createStore(
    rootReducer,
    applyMiddleware(thunk, reduxImmutableStateInvariant())
  )
}
