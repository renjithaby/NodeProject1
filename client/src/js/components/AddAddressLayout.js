
/**
 * Created by rabby on 20/08/17.
 */
import React from "react";
import Radium from "radium";
import {AddressListItem} from "./AddressListItem";
import {AddressForm} from "./AddressForm";

@Radium
export class AddAddressLayout extends React.Component
{

    constructor(props){
        super(props);
        this.state = {
            name :"name",
            currentAddress:"address",
            loginId :this.props.user._id
        }

    }

    componentWillReceiveProps(nextProps){
        console.log("nextProps.........");
        console.log(nextProps.user);
    }


     handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleAddressChange(event) {
        this.setState({currentAddress: event.target.value});
    }



    addNewAddress(event){

        this.props.addAddress(this.state);
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
                                <button onClick = {this.addNewAddress.bind(this)} class="btn btn-primary">Add</button>
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

