import { combineReducers } from 'redux';

import { app } from './app';
import { user } from './user';
import { locale } from './locale';

import { home } from './home';
import { detail } from './detail';

import { profile } from './profile';


const rootReducer = combineReducers({
  app,
  user,
  locale,
  home,
  detail,
  profile
});

export default rootReducer;
