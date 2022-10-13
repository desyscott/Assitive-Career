import Axios from "axios"
import { orderTypes } from "./orderTypes"
import cartTypes from "../cartReducer/cartTypes"


export const createOrder = (order) =>async(dispatch,getState)=>{
   dispatch({type:orderTypes.CREATE_ORDER_REQUEST,payLoad:order});
   
   try{
       const {userData:{currentUser}}= getState();
       
       const {data} = await Axios.post("/api/orders", order ,{
           headers:{
               Authorization:`Bearer ${currentUser.token}`,
           },
       });
       
    dispatch({type:orderTypes.CREATE_ORDER_SUCCESS,payLoad:data.order});
    dispatch({type:cartTypes.CART_EMPTY});
    localStorage.removeItem("cartItems");
    
   }catch(err){
       dispatch({type:orderTypes.CREATE_ORDER_FAIL,
                payLoad:err.response && err.response.data.message 
                 ? err.response.data.message:err.message })
   }
}

export const detailsOrder=(orderId)=>async(dispatch,getState)=>{
    dispatch({type:orderTypes.ORDER_DETAILS_REQUEST,payLoad:orderId});
    const {userData:{currentUser}} = getState();
    try{
        const {data} =await Axios.get(`/api/orders/${orderId}`,{
            headers:{
                Authorization:`Bearer ${currentUser.token}`
            }
        });
        dispatch({type:orderTypes.ORDER_DETAILS_SUCCESS,payLoad:data})
        
    }catch(err){
        dispatch({type:orderTypes.ORDER_DETAILS_FAIL,
                payLoad:err.response && err.response.data.message 
                ? err.response.data.message:err.message}) 
    }
}