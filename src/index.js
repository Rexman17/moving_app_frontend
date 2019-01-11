import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk';
// import {BrowserRouter as Router} from 'react-router-dom'

// Create the Redux store:
const store = createStore(rootReducer, applyMiddleware(thunk))
// console.log("REDUX STORE IS", store);
// console.log("==================");
// console.log("get state function", store.getState());
// console.log('%c get state function','background: blue; color: white; display: block;', store.getState());
// Wrap App with Provider
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

export default store;
