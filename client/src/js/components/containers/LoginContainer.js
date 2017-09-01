/**
 * Created by rabby on 20/08/17.
 */
import React from "react";
import { LoginPage } from "../LoginPage";
import * as Actions from  "../../Actions/Actions";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'



const mapStateToProps = state => {
    return {
        usersList: state.usersList,
        authData:state.authData
    }
}


const mapDispatchToProps = dispatch => {
    return {
        registerUser: usr => {
            dispatch(Actions.registerUser(usr));
        },
      loginUser: login =>{
         dispatch(Actions.loginUser(login));

        }
    }
}

export const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(LoginPage))