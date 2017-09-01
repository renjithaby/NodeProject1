/**
 * Created by rabby on 22/08/17.
 */
/**
 * Created by rabby on 20/08/17.
 */
import React from "react";
import Radium from "radium";
import {AddressViewLayout} from "./AddressViewLayout.js";
import {SampleLayout} from "./SampleLayout.js";
import { BrowserRouter as Router, Route ,Switch, Link, hashHistory,browserHistory } from 'react-router-dom';

@Radium
export class HomePage extends React.Component
{

    constructor(props){
        super(props);

    }

    componentWillReceiveProps(nextProps){
        console.log("nextProps.........");
        console.log(nextProps.user);

        //this.props.router.push('/');
    }

    deleteAddress(event){
        console.log("delete addresss");
        console.log(event.target.parentNode);
    }

    updateAddress(event){
        console.log("update addresss");
        console.log(event.target.parentNode);
    }



    render()
    {
        return (

            <div>
                <h1> {this.props.user.name} Address Book</h1>
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <ul class="nav nav-tabs">
                                <li><Link to="/Home/View">View Address</Link></li>
                                <li><Link to="/Home/Add">Add address </Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
        </div>
        );
    }


}

var styles = {
    panelHeading: {
        padding: "5px 5px 0 5px"
    }



};







