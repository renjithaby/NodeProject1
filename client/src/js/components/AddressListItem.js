/**
 * Created by rabby on 22/08/17.
 */
import React from "react";
import Radium from "radium";
@Radium
export class AddressListItem extends React.Component
{

    constructor(props){

        super(props);
        this.state = {};
        this.state.showDetails = false;

    }

    componentWillReceiveProps(nextProps){
        console.log("nextProps.........");
        console.log(nextProps.user);

        //this.props.router.push('/');
    }

    deleteAddress(event){
        console.log("delete addresss");
        console.log(event.target.parentNode);
        this.props.handleDeleteAddress(this.props.item.id);
    }


    updateAddress(event){
        console.log("update addresss");
        console.log(event.target.parentNode);
        this.props.handleUpdateAddress(this.props.item.id);
    }

    updateShowDetails(event){
        console.log("!this.state.showDetails");
        console.log(!this.state.showDetails);
        this.setState({showDetails : !this.state.showDetails});

    }


    render()
    {
        return (

            <div>

                <li  >
                    <span> {this.props.item.name}  </span>
                    <button  type ="button" value ={this.props.item.id} class = "btn-primary" onClick = {this.deleteAddress.bind(this)}> delete </button>
                    <button  type ="button" value ={this.props.item.id} class = "btn-primary" onClick = {this.updateAddress.bind(this)}> update </button>
                    <button  type ="button" value ={this.props.item.id} class = "btn-primary" onClick = {this.updateShowDetails.bind(this)}> {this.state.showDetails?"hide details":"show details"}  </button>
                    <div class ={this.state.showDetails?"show":"hide"}>
                        <h4> name : {this.props.item.name}</h4>
                        <h4> currentAddress : {this.props.item.currentAddress}</h4>
                    </div>
                </li>

            </div>
        );
    }


}

var styles = {
    panelHeading: {
        padding: "5px 5px 0 5px"
    }
};

