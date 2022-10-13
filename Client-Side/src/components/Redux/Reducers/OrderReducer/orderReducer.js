import { orderTypes } from "./orderTypes"

const INITIAL_STATE={
    loading: false,
    success: false,
    order:null,
}



const orderReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case orderTypes.CREATE_ORDER_REQUEST:
        return{
            loading: true,
        }
        case orderTypes.CREATE_ORDER_SUCCESS:
        return{
            ...state,
            loading:false,
            success: true,
            order:action.payLoad,
        }
        case orderTypes.CREATE_ORDER_FAIL:
        return{
            ...state,
            loading: false,
            success: false,
            order:null,
            error:action.payLoad
        }
        case orderTypes.ORDER_CREATE_RESET:
        return{
            
        }
        
        
        default:return state
    }
}


export default orderReducer;



export const orderDetailsReducer=(state={loading:true,},action)=>{
    switch(action.type){
        case orderTypes.ORDER_DETAILS_REQUEST:
        return{
            loading:true,
        }
        
        case orderTypes.ORDER_DETAILS_SUCCESS:
        return{
           
            loading:false,
            orderDetails:action.payLoad,
        }
        
        case orderTypes.ORDER_DETAILS_FAIL:
        return{
          
            loading:false,
            error:action.payLoad 
        }
        
        default:return state
    }
}

