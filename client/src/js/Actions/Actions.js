/**
 * Created by rabby on 09/08/17.
 */

import dataApi from '../api/dataApi'

export const registrationSuccess = (usr) => {
    return {
        type: "REGISTER_SUCCESS"
    };
}

export const registrationFailed = (usr) => {
    return {
        type: "REGISTER_FAILED"
    };
}

export const loginSuccess = (userData) => {
    return {
        type: "LOGIN_SUCCESS",
        userData : userData
    };
}

export const loginFailed = () =>{
    return {
        type: "LOGIN_FAILED"
    };
}

export const addAddressSuccess = (data) => {
    return {
        type: "ADD_ADDRESS_SUCCESS",
        data : data
    };
}

export const addAddressFailed = (address) => {
    return {
        type: "ADD_ADDRESS_FAILED"

    };
}

export const updateAddressSuccess = (data) => {
    return {
        type: "UPDATE_ADDRESS_SUCCESS",
        data : data
    };
}

export const updateAddressFailed = (data) => {
    return {
        type: "UPDATE_ADDRESS_FAILED"
    };
}


export const deleteAddressSuccess = (data) => {
    return {
        type: "DELETE_ADDRESS_SUCCESS",
        data : data
    };
}

export const deleteAddressFailed = (data) => {
    return {
        type: "DELETE_ADDRESS_FAILED"
    };
}


export function loginUser(usr) {
    return function(dispatch) {
        return dataApi.login(usr).then(data => {
            console.log("....response datat");
            console.log(data);
            if(data.result ==="failed"){
                dispatch(loginFailed());
            }else {
                dispatch(loginSuccess(data));
            }
        }).catch(error => {
            throw(error);
        });
    };
}

export function registerUser(usr) {
    return function(dispatch) {
        return dataApi.register(usr).then(data => {
            console.log("....response datat");
            console.log(data);
            if(data.result ==="registersuccess"){
                dispatch(registrationSuccess());
            }else {
                dispatch(registrationFailed());
            }
        }).catch(error => {
            throw(error);
        });
    };
}


export function addAddress(usr) {
    return function(dispatch) {
        return dataApi.addAddress(usr).then(data => {
            console.log("....response datat");
            console.log(data);
            if(data.result ==="failed"){
                dispatch(addAddressFailed());
            }else {
                dispatch(addAddressSuccess(data));
            }
        }).catch(error => {
            throw(error);
        });
    };
}


export function updateAddress(usr) {
    return function(dispatch) {
        return dataApi.updateAddress(usr).then(data => {
            console.log("....response datat");
            console.log(data);
            if(data.result ==="failed"){
                dispatch(updateAddressFailed());
            }else {
                dispatch(updateAddressSuccess(data));
            }
        }).catch(error => {
            throw(error);
        });
    };
}


export function deleteAddress(usr) {
    return function(dispatch) {
        return dataApi.deleteAddress(usr).then(data => {
            console.log("....response datat");
            console.log(data);
            if(data.result ==="failed"){
                dispatch(deleteAddressFailed());
            }else {
                dispatch(deleteAddressSuccess(data));
            }
        }).catch(error => {
            throw(error);
        });
    };
}

/*
export const addTodo = text => {
    return {
        type: 'ADD_TODO',
        id: new Date(),
        text
    };
}
export const createTodo = (text) => {
   return {
        type: "CREATE_TODO",
        text
    };
}

export const deleteTodo = (id)=>{
   return {
        type :"DELETE_TODO",
        id
    };
}

export const updateTodo = (id) => {
   return{
        type: "UPDATE_TODO",
        id
    };
}

export const updateTodoFilter = () => {
   return {
        type :"UPDATE_TODO_FILTER"
    };
}


//REGISTER_USER
//LOGIN_USER

*/