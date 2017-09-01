/**
 * Created by rabby on 20/08/17.
 */
import React from "react";
import { HomePage } from "../HomePage";
import { AddressViewLayout } from "../AddressViewLayout.js";
import {AddAddressLayout} from "../AddAddressLayout.js";
import {UpdateAddressLayout} from "../UpdateAddressLayout.js";
import * as Actions from  "../../Actions/Actions";
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route ,Switch, Link, hashHistory,browserHistory } from 'react-router-dom';
class HomeLayout extends React.Component {

     render(){

         return(
             <div>
                 <h1> heloooo hoem conatiner </h1>
                 <HomePage user = {this.props.user} />
                 <Route path = "/Home/View"  component = {()=> <AddressViewLayout user ={this.props.user} updateAddress = {this.props.updateAddress.bind(this)} deleteAddress = {this.props.deleteAddress.bind(this)}/>} />
                 <Route path = "/Home/Add"  component = {()=> <AddAddressLayout user ={this.props.user} addAddress = {this.props.addAddress.bind(this)} />} />

             </div>
         );
     }
 }


const mapStateToProps = state => {
    return {
        user: state.userData
    }
}


const mapDispatchToProps = dispatch => {
    return {
        addAddress: address => {
            dispatch(Actions.addAddress(address));
        },
        deleteAddress: address => {
            dispatch(Actions.deleteAddress(address));
        },
        updateAddress:  address=> {
            dispatch(Actions.updateAddress(address));
        }


    }
}



export const  HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeLayout);