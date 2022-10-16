import React,{useState,useEffect} from 'react'
import {useParams,useHistory,Link} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"
import {fetchProductRequest} from "../Redux/Reducers/productReducer/productActions"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import MessageBox from "../MessageBox/index"
import "./index.css"
import LoadingBox from '../LoadingBox'

const mapState=({productsData})=>({
  product:productsData.product,
  loading:productsData.loading,
  error:productsData.error
})

const Details=()=> {
  const {product,loading,error} =useSelector(mapState)
  const dispatch =useDispatch()
  const history =useHistory()
  
   const {productId}=useParams()
  
  useEffect(()=>{
    dispatch(fetchProductRequest(productId))
  },[dispatch,productId])
  
 
  
  
   
   if(!product){
     return <div>No course found</div>
   }
   
   
  
   
  return (
    
    <div>
    {/* {loading ? 
     <LoadingBox/>
     :
     error ?<MessageBox variant="danger">{error}</MessageBox>
     :(
      <>
       <Link to ="/">Back to Results</Link>
         <div className="row top">
      </div>
      </>
     )
     } */}
     <>
       <Link to ="/home">Back to Results</Link>
         <div className="column center">
         <div className="details-nav">
         <div  className="details-btn">
         <Link to="/#">Details</Link>
         </div>
         <div className="details-btn">
         <Link to ="/#">Roadmap</Link>
         </div>
         </div>
         <div className="details-modal">
         
         </div>
      </div>
      </>
 </div>
 
  )
}

export default Details