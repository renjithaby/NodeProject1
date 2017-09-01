
/**
 * Created by rabby on 20/08/17.
 */
import React from "react";
import Radium from "radium";
@Radium
export class SampleLayout extends React.Component
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
               <h1> helloooio  sample</h1>
           </div>
        );
    }


}

var styles = {
    panelHeading: {
        padding: "5px 5px 0 5px"
    }



};

/**
 * Created by rabby on 23/08/17.
 */
