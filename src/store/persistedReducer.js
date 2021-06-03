import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from './rootReducer';

const persistConfig = {
    key: 'test',
    storage,
    whitelist: [
        'users',
    ]
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
