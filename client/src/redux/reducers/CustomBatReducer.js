import {CUSTOM_BAT} from "../actions/index"

const initialState={
    baseModel:"",
    sweetSpot:"",
    size:"",
    weight:"",
    spineProfile:"",
    edgeWidth:"",
    handleType:"",
    gripColour:"",
    toeGuard:"",
    finishing:"",
    notes:"",
    email:"",
    err:"",
    price:""
    
}
export const custombatReducer=(state=initialState,action)=>{
    switch(action.type){
        case CUSTOM_BAT:
            return {
                ...state,
                ...action.payload
            }

        
            default: 
            return {
                ...state
            }
    }
}
