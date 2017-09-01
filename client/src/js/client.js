/**
 * Created by rabby on 19/07/17.
 */
import React from "react";
import ReactDOM from "react-dom";
import Main  from "./components/Main.js";
import { createStore,applyMiddleware } from 'redux';
import TodoApp from './reducers';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route ,Switch, Link, hashHistory,browserHistory } from 'react-router-dom';

import {LoginContainer} from "./components/containers/LoginContainer";


let store = createStore(TodoApp,applyMiddleware(thunk));

const app = document.getElementById("app");
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={() => <Main/>}/>
        </Router>
    </Provider>
    , app);

