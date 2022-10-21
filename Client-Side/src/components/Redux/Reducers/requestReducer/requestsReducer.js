import requestTypes from "./requestTypes"

import {handleAddToRequest,handleRemoveFromRequest} from "./requestHandler"

const INITIAL_STATE={
    requestItems:[],
}

const addToRequestReducer=(state=INITIAL_STATE,action)=>{
    
    switch(action.type){
    case requestTypes.ADD_TO_REQUEST: 
     return{
         ...state,
           requestItems:handleAddToRequest({
               prevRequestItem:state.requestItems,
               nextRequestItem:action.payLoad,
           })
        }
     
     case requestTypes.REMOVE_REQUEST_ITEM:
     return{
         ...state,
    requestItems:state.requestItems.filter(requestItem => requestItem.user !== action.payLoad)

     };
     
     
     case requestTypes.REQUEST_EMPTY:
     return{
         ...state,
         requestItems:[]
     }
     
    default: return state
    }
    
}

export default addToRequestReducer;