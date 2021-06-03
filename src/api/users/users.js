import { api } from '../api';

export const fetchUsers = () => {
    return api.get(`https://jsonplaceholder.typicode.com/users`)
        .then(({ data }) => ({ data }))
        .catch((error) => { throw error });
};
