
/**
 * Created by rabby on 20/08/17.
 */
import React from "react";

export class AddressForm extends React.Component
{

    constructor(props){
        super(props);

    }

    componentWillReceiveProps(nextProps){
        console.log("nextProps.........");
        console.log(nextProps.address);
    }

    render()
    {
        return (

            <form>
                <div class="form-group">
                    <label> Name </label>
                    <input class="form-control"  value={this.props.address.name} onChange={this.props.handleNameChange.bind(this)}/>
                </div>
                <div class="form-group">
                    <label> Address </label>
                    <input class="form-control"  value={this.props.address.currentAddress} onChange={this.props.handleAddressChange.bind(this)}/>
                </div>
            </form>

        );
    }


}


