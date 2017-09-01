
/**
 * Created by rabby on 20/08/17.
 */
import React from "react";
import Radium from "radium";
import {AddressListItem} from "./AddressListItem";
import {UpdateAddressLayout} from "./UpdateAddressLayout";
import { BrowserRouter as Router, Route ,Switch, Link, hashHistory,browserHistory } from 'react-router-dom';
@Radium
export class AddressViewLayout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.state.currentSelectionId =null;
        console.log("construtore...... is calleeed....");
    }

    componentWillReceiveProps(nextProps) {
        console.log("nextProps... address view layout");
        console.log(nextProps.user);

        //this.props.router.push('/');
    }

    handleDeleteAddress(id) {
        console.log("delete addresss");
        var address = {loginId :this.props.user._id, addressId :id };
        this.props.deleteAddress(address);
    }

    handleUpdateAddress(id) {
        console.log("update addresss");
        this.setState({currentSelectionId: id});
    }

    getUpdateAddress(){
        let index = this.props.user.addressList.findIndex(item => item.id  ==  this.state.currentSelectionId);
        return(this.props.user.addressList[index]);
    }

    updateAddress(data){
        data.loginId = this.props.user._id;
        console.log("data from the address viw layout...");
        console.log(data);
        return this.props.updateAddress(data);
    }


    render() {
        {this.props.user.addressList}
        return (
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="panel with-nav-tabs panel-primary">
                            <div class="panel-body">
                                <ul>
                                        {
                                            this.props.user.addressList.map((item) =>
                                                    <AddressListItem key = {item.id} item = {item} handleUpdateAddress = {this.handleUpdateAddress.bind(this)} handleDeleteAddress = {this.handleDeleteAddress.bind(this)}/>
                                            )
                                        }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            {this.state.currentSelectionId?< UpdateAddressLayout address = {this.getUpdateAddress()} updateAddress = {this.updateAddress.bind(this)}/> :null}
            </div>
        );
    }

}


var styles = {
    panelHeading: {
        padding: "5px 5px 0 5px"
    }



};

