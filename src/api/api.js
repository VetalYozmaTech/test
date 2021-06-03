import { setup } from 'axios-cache-adapter';

const api = setup({
    baseURL: process.env.API_URL,
});

api.interceptors.request.use(config => config);

export { api };
