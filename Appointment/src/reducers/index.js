import {combineReducers} from 'redux';
import {createNavigationReducer} from 'react-navigation-redux-helpers';
import {AppLaunch} from '../route';

const navReducer = createNavigationReducer(AppLaunch);

export default combineReducers({
  nav: navReducer,
});
