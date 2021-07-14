import {createStore, applyMiddleware} from 'redux';
import {createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

const navigationMiddleware = createReactNavigationReduxMiddleware(
  state => state.nav,
);

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, navigationMiddleware),
);

export default store;
