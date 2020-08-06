import { combineReducers } from "redux";
import {socketReducer} from "./SocketReducer"
import {loginReducer} from './LoginReducer'
import {custombatReducer} from './CustomBatReducer'
import cartReducer from './CartReducer'
export const rootReducer=combineReducers({
    socket:socketReducer,
    login:loginReducer,
    custombat:custombatReducer,
    cart:cartReducer
    
})