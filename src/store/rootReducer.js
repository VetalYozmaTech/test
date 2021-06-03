import { combineReducers } from 'redux';
import { reducer as users } from './users';

export const rootReducer = combineReducers({ users });
