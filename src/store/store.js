import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistedReducer } from './persistedReducer';
import { api } from '../api';

export const store = createStore(
    persistedReducer,
    composeWithDevTools(
        applyMiddleware(
            thunk.withExtraArgument({ api })
        )
    )
);

