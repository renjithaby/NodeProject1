
/**
 * Created by rabby on 21/08/2017.
 */
/**
 * Created by rabby on 13/08/17.
 */
const AuthDataReducer = (state = {userLogin:false}, action = {}) => {

    switch (action.type){

	    case "LOGIN_SUCCESS" :
	     return  getUserData(state,action);
        case "LOGIN_FAILED" :
            return  displayLoginFailed(state);
        case "REGISTER_SUCCESS" :
            return  displayRegistrationSuccess(state);
        case "REGISTER_FAILED" :
            return  displayRegistrationFailed(state);

		default:
			return state;
		break;
    }

    function getUserData(state,action){
         return {...state, userLogin:true};
    }

    function displayLoginFailed(state){
        alert("Login Failed, Please Retry");
        return {...state, userLogin:false};
    }

    function displayRegistrationSuccess(){
        alert ("Registration Success , please login ")
        return{...state};
    }

    function displayRegistrationFailed(){
        alert ("Registration Failed , please try again ")
        return{...state};
    }



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




export default AuthDataReducer;


/*usersList = [{

id: Date.now(),
username : action.user.username,
password :action.user.password,
addressList:[{
}]

}]*/