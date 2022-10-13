import cartTypes from "./cartTypes"

import {handleAddToCart,handleRemoveFromCart} from "./cartHandler"

const INITIAL_STATE={
    cartItems:[],
    shippingAddress:{},
    paymentMethod:"PayPal"    
}

const addToCartReducer=(state=INITIAL_STATE,action)=>{
    
    switch(action.type){
    case cartTypes.ADD_TO_CART: 
     return{
         ...state,
           cartItems:handleAddToCart({
               prevCartItem:state.cartItems,
               nextCartItem:action.payLoad,
           })
        }
     
     case cartTypes.REMOVE_CART_ITEM:
     return{
         ...state,
         cartItems:handleRemoveFromCart({
             prevCartItem:state.cartItems,
             cartItemToRemove:action.payLoad
         })
     };
     
     
     case cartTypes.SAVE_CART_SHIPPING_ADDRESS:
     return{
         ...state,
         shippingAddress:action.payLoad,
     }
     
     case cartTypes.SAVE_CART_PAYMENT_METHOD:
     return{
         ...state,
         paymentMethod:action.payLoad
     }
     
     case cartTypes.CART_EMPTY:
     return{
         ...state,
         cartItems:[]
     }
     
    default: return state
    }
    
}

export default addToCartReducer;