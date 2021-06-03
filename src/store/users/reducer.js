import { createReduxReducer } from '../../helpers/createReduxReducer';
import * as types from './types';

const initialState = {
  users: [],
  selectedUser: null,
  trackedUsers: []
};

export const reducer = createReduxReducer(initialState, {
  [types.SET_TRACKED_USER]: (state, user) => {
    return {
      ...state,
      trackedUsers: [...state.trackedUsers, user],
    };
  },

  [types.SET_USERS]: (state, users) => {
    return {
      ...state,
      users: users,
    };
  },

  [types.SET_USER]: (state, user) => {
    return {
      ...state,
      selectedUser: user
    };
  },
});
