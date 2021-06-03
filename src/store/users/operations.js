import {setUsers, setSelectedUser, setTrackedUser} from './actions';
import * as fetchApi from '../../api/users';
import { store } from '../store';

export const fetchUsers = () => {
  return fetchApi.fetchUsers()
      .then(({data}) => {
        store.dispatch(setUsers(data.map(val => ({
            ...val,
            label: val.username
        }))));
      })
      .catch((err) => {
    throw err;
  });
};

export const setUser = (user) => {
  store.dispatch(setSelectedUser(user));
};

export const trackHours = (user) => {
  store.dispatch(setTrackedUser(user));
};
