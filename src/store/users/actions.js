import * as types from './types';

export const setUsers = (payload) => ({ type: types.SET_USERS, payload });
export const setSelectedUser = (payload) => ({ type: types.SET_USER, payload });
export const setTrackedUser = (payload) => ({ type: types.SET_TRACKED_USER, payload });
