/**
 * Created by rabby on 19/07/17.
 */
import React from "react";
import ReactDOM from "react-dom";
import Main  from "./components/Main.js";
import { createStore,applyMiddleware } from 'redux';
import AppReducer from './Reducers/Index.js';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route ,Switch, Link, hashHistory,browserHistory } from 'react-router-dom';

import {LoginContainer} from "./components/containers/LoginContainer";


let store = createStore(AppReducer,applyMiddleware(thunk));

const app = document.getElementById("app");
ReactDOM.render(
    <Provider store={store}>
        <Router  history={browserHistory}>
            <Route path="/" component={() => <Main/>}/>
        </Router>
    </Provider>
    , app);

