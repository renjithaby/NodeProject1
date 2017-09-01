/**
 * Created by rabby on 21/08/2017.
 */
/**
 * Created by rabby on 13/08/17.
 */
const UserDataReducer = (state = { addressList:[]}, action = {}) => {

    switch (action.type){

        case "ADD_ADDRESS_SUCCESS" :
            return addAddressSuccess(state,action);

        case "ADD_ADDRESS_FAILED" :
            return addAddressFailed(state,action);

        case "UPDATE_ADDRESS_SUCCESS" :
            return updateAddressSuccess(state,action);

        case "UPDATE_ADDRESS_FAILED" :
            return updateAddressFailed(state,action);

        case "DELETE_ADDRESS_SUCCESS" :
            return deleteAddressSuccess(state,action);

        case "DELETE_ADDRESS_FAILED" :
            return deleteAddressFailed(state,action);

	    case "LOGIN_SUCCESS" :
            return  getUserData(state,action);

        case "UPDATE_ADDRESS" :
            return updateAddressData(state,action);

        case "DELETE_ADDRESS" :
            return deleteAddressData(state,action);
		default:
			return state;
		break;
    }

    function addAddressSuccess(state,action){

       console.log("mmmmm state.......");
       console.log(state);
       //var newAddressList = state.addressList.concat({ id: Date.now(),name : action.address.name, currentAddress :action.address.currentAddress });
        var newAddressList = action.data.addressList;
        return {...state , addressList:newAddressList};
    }

    function addAddressFailed(state,action){

        alert ("adding address failed , please try again ");
        return{...state};
    }

    function updateAddressSuccess(state,action){

        console.log("mmmmm state.......");
        console.log(state);
        //var newAddressList = state.addressList.concat({ id: Date.now(),name : action.address.name, currentAddress :action.address.currentAddress });
        var newAddressList = action.data.addressList;
        return {...state , addressList:newAddressList};
    }

    function  updateAddressFailed(state,action){

        alert ("updating address failed , please try again ");
        return{...state};
    }

    function deleteAddressSuccess(state,action){

        var newAddressList = action.data.addressList;
        return {...state , addressList:newAddressList};
    }

    function  deleteAddressFailed(state,action){

        alert ("deleting address failed , please try again ");
        return{...state};
    }
    function getUserData(state,action){
         console.log("action.userData..........");
        console.log(action.userData);
         return action.userData ;
    }
/*
    function deleteAddressData(state,action){
        let index = state.addressList.findIndex(item => item.id  == action.id);
        let newAddressList =[...state.addressList.slice(0,index), ...state.addressList.slice(index+1)];
        return{...state,addressList :newAddressList};
    }

    function updateAddressData(state,action){
        let index = state.addressList.findIndex(item => item.id  == action.address.id);
        let updatedAddressList = [...state.addressList.slice(0,index), action.address , ...state.addressList.slice(index+1)];
        console.log(index);
        console.log(state);
        return {...state , addressList:updatedAddressList };

    }

*/
   /* function updateTodo(state,action){
        let index = state.findIndex(item => item.id  == action.id);
        console.log(index);
        console.log(state);
        return [...state.slice(0,index), {id : state[index].id, title : state[index].title, status : "completed"}, ...state.slice(index+1) ];
    }

    function deleteTodo(state,action) {
        let index = state.findIndex(item => item.id  == action.id);
        return [...state.slice(0,index), ...state.slice(index+1) ];
    }*/
}




export default UserDataReducer;


/*usersList = [{

id: Date.now(),
username : action.user.username,
password :action.user.password,
addressList:[{
}]

}]*/