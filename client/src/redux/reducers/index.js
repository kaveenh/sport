import { combineReducers } from "redux";
import {socketReducer} from "./SocketReducer"
import {loginReducer} from './LoginReducer'

export const rootReducer=combineReducers({
    socket:socketReducer,
    login:loginReducer
})