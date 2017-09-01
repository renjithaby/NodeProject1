/**
 * Created by rabby on 13/08/17.
 */
import { combineReducers } from 'redux';

import UsersListReducer from './UsersListReducer';
import UserDataReducer from './UserDataReducer';
import AuthDataReducer from './AuthDataReducer';

const AppReducer = combineReducers({

    usersList : UsersListReducer,
    userData  : UserDataReducer,
    authData  : AuthDataReducer
})

export default AppReducer