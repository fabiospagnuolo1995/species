import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSagas from '../sagas/rootSagas';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const disableStateLogger = false;
const enableDevTools = true;

let store;
const sagaMiddleware = createSagaMiddleware();

if (window.navigator.userAgent.includes("Chrome") && enableDevTools) {
    if(disableStateLogger) {
        store = createStore(
            rootReducer,
            composeWithDevTools(applyMiddleware(thunk, sagaMiddleware))
        )
    } else {
        store = createStore(
            rootReducer,
            composeWithDevTools(applyMiddleware(thunk, logger, sagaMiddleware))
        )
    }
} else {
    if(disableStateLogger) {
        store = createStore(
            rootReducer,
            applyMiddleware(thunk, sagaMiddleware)
        );
    } else {
        store = createStore(
            rootReducer,
            applyMiddleware(thunk, logger, sagaMiddleware)
        );
    }
}

sagaMiddleware.run(rootSagas, store.dispatch, store.getState);


export default store;