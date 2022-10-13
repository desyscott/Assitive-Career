import React,{useState,useEffect} from 'react'
import {Link, useParams} from 'react-router-dom';
import {useSelector,useDispatch} from "react-redux"
import {detailsOrder} from "../Redux/Reducers/OrderReducer/orderActions"
import {PayPalButton} from "react-paypal-button-v2"
import LoadingBox from './../LoadingBox/index';
import MessageBox from './../MessageBox/index';
import  Axios  from 'axios';


const mapState=({orderDetailsData})=>({
  orderDetails:orderDetailsData.orderDetails,
  loading:orderDetailsData.loading,
  error:orderDetailsData.error,
})

const OrderSummary=()=>{
  const {orderId}= useParams();
  const {orderDetails,loading,error} = useSelector(mapState);
  const [sdkReady,setSdkReady]=useState(false);
  
  const  dispatch=useDispatch()

  useEffect(()=>{
    const addPaypalScript=async()=>{
      const {data} = await Axios.get("/api/paypal/config");
      const script =document.createElement("script");
      script.type="text/javascript";
      script.src=`https://www.paypal.com/sdk/js?client-id=${data}`;
      script.async=true;
      script.onload=()=>{
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    
    if(!orderDetails){
      dispatch(detailsOrder(orderId));
    }else{
      if(!orderDetails.isPaid){
        if(!window.paypal){
          addPaypalScript();
        }else{
          setSdkReady(true);
        }
      }
    }

  },[dispatch, orderDetails, orderId,sdkReady]);
  
  const successPaymentHandler=()=>{
    
  }
  
  return loading ? <LoadingBox/> :
  error ? (<MessageBox variant="danger">{error}</MessageBox>)
  :
  (
    <div className="main">
    <h2>Order ${orderDetails._id}</h2>

      <div className="row top">
      <div className="col-2">
       <ul>
        <li>
          <div className="card card-body">
             <h2>Shipping</h2>
            <p>
              <strong>Name:</strong>{orderDetails.shippingAddress.fullName} <br/>
              <strong>Address:</strong>{orderDetails.shippingAddress.city},{orderDetails.shippingAddress.address}, 
              {orderDetails.shippingAddress.postalCode}, { orderDetails.shippingAddress.country}
             </p>
             {orderDetails.isDelivered ? <MessageBox variant="success">Delivered at {orderDetails.deliveredDate}</MessageBox>
              : <MessageBox variant="danger">Not Delivered</MessageBox>}
          </div>
        </li>
        <li>
          <div className="card card-body"> 
            <h2>Payment Method</h2>
            <p>
            <strong>Method:</strong> {orderDetails.paymentMethod}
            </p>
          {orderDetails.isPaid? <MessageBox variant="success">Paid at ${orderDetails.paidDate}</MessageBox>
           : <MessageBox variant="danger">Not paid</MessageBox>}
          </div>
        </li>
        <li>
          <div className="card card-body">
           <h2>Order Items</h2>
           <ul>
        {orderDetails.orderItems.map(item=>(
          
           
          <li key={item.product}>
          <div className="row">
          
            <div>
              <img src={item.image} alt={item.name} className="small"/>
            </div>
            
            <div className="min-30">
              <Link to={`/product/${item.product}`}>{item.name}</Link>
            </div>
            
            <div>
            ${item.qty} x ${item.price} = ${item.qty * item.price}
            </div>
            </div>
          </li>
        ))}
         </ul>
          </div>
        </li>
       </ul>
      </div>
      <div className="col-1">
      <div className="card card-body">
        <ul>
           <li>
             <h2>Order summary</h2>
           </li>   
           <li>
             <div className="row">
               <div>items</div>
               <div>${orderDetails.itemsPrice}</div>
             </div>
           </li>   
           <li>
             <div className="row">
               <div>shipping</div>
               <div>${orderDetails.shippingPrice.toFixed(2)}</div>
             </div>
           </li>   
           <li>
             <div className="row">
               <div>Tax</div>
               <div>${ orderDetails.taxPrice.toFixed(2)}</div>
             </div>
           </li>   
           <li>
             <div className="row">
               <strong>Total Order</strong>
               <strong>${ orderDetails.totalOrderPrice.toFixed(2)}</strong>
             </div>
           </li>   
           {!orderDetails.isPaid &&
            (
             <li>
             {!sdkReady ? <LoadingBox/>
              :(
                <PayPalButton 
                amount={orderDetails.totalOrderPrice} 
                onSuccess={successPaymentHandler}>
                </PayPalButton>
              )  }
             </li>  
           )}
        </ul>
        </div>
      </div>
      </div>
    </div>
  )
}

export default  OrderSummary;