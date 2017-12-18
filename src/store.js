import {createStore, applyMiddleware} from 'redux';
import reducer from './redux/reducer';
import promiseMiddleware from 'redux-promise-middleware';


export default createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(promiseMiddleware()) // this line is for the chrome dev tool to work
);