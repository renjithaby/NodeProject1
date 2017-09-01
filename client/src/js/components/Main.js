/**
 * Created by rabby on 23/07/17.
 */
import React ,{PropTypes}from "react";


import { HashRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route ,Switch, Link, hashHistory,browserHistory } from 'react-router-dom';

import {LoginContainer} from "./containers/LoginContainer";
import {HomeContainer} from "./containers/HomeContainer.js";
import {AddressViewLayout} from "./AddressViewLayout.js";
import {SampleLayout} from "./SampleLayout.js";

export default class Main extends React.Component{

    constructor(props){
        super(props);
        console.log("th............");
        console.log(props.children);
    }

    componentDidMount() {
        // This doesn't refer to the `span`s! It refers to the children between
        // last line's `<App></App>`, which are undefined.
        console.log(this.props.children);
    }

    render()
    {

        return (
            <div>
                <h1> main main </h1>
                <Switch>
                <Route path="/Login" component={LoginContainer}/>
                <Route path="/Home"  component = {HomeContainer}/>
                <Route component={() => <LoginContainer/>}/>
                </Switch>
            </div>
        )
    }
}

/*Main.propTypes = {
    children: PropTypes.object.isRequired
};*/