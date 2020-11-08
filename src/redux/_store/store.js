import promiseMiddleware from "redux-promise";
import rootReducer from "../_reducers";
import ReduxThunk from "redux-thunk";

import { createStore, applyMiddleware } from "redux";

import { persistStore } from 'redux-persist';

const createStoreWithMiddleware = applyMiddleware(
    promiseMiddleware,
    ReduxThunk
)(createStore);

// const enhancedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStoreWithMiddleware(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__());

export const persistor = persistStore(store);