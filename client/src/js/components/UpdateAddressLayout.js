
/**
 * Created by rabby on 20/08/17.
 */
import React from "react";
import Radium from "radium";
import {AddressListItem} from "./AddressListItem";
import {AddressForm} from "./AddressForm";

@Radium
export class UpdateAddressLayout extends React.Component
{

    constructor(props){
        super(props);

        this.state ={};
    }

    componentWillMount(nextProps){
        console.log("nextProps.........");
        this.setState(this.props.address);
    }

    componentWillReceiveProps(nextProps) {
        console.log("nextProps.........");
        console.log(nextProps.user);

        this.setState(nextProps.address);
    }


    handleNameChange(event) {
        console.log("this.state.....");
        console.log(this.state);
        this.setState({name: event.target.value});
    }

    handleAddressChange(event) {
        this.setState({currentAddress: event.target.value});
    }



    updateNewAddress(event){

        this.props.updateAddress(this.state);
    }



    render()
    {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="panel with-nav-tabs panel-primary">
                            <div class="panel-body">
                                <AddressForm address = {this.state} handleNameChange = {this.handleNameChange.bind(this)}  handleAddressChange = {this.handleAddressChange.bind(this)} />
                                <button onClick = {this.updateNewAddress.bind(this)} class="btn btn-primary">Update</button>
                            </div>
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


