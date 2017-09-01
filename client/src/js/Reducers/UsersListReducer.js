/**
 * Created by rabby on 13/08/17.
 */
const UsersListReducer = (state = [], action = {}) => {

    switch (action.type){

        case "REGISTER_USER" :
            return registerUser(state,action);

        case "LOGIN_USER" :
            return loginUser(state,action);

        default:
            return state;
            break;
    }

    function registerUser(state,action){
        console.log("action...");
        console.log(state);
        console.log(action.user.username +":"+action.user.password);
        return [...state , { id: Date.now(),username : action.user.username, password :action.user.password }];
    }

    function loginUser(state,action){
        console.log("log in action...");
        console.log(action.login.username);
        let index = state.findIndex( usr => usr.username  == action.login.username && usr.password  == action.login.password );
        console.log("index...");
        console.log(index);
        return [state[index] ];
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




export default UsersListReducer;


