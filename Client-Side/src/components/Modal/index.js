import React from 'react'
import {addRequestItem,removeRequestItem} from "../Redux/Reducers/requestReducer/requestActions"
import {useDispatch} from "react-redux"
import "./index.css"

function Modal({closeModal,mentor}) {
  
  const dispatch=useDispatch()
  
  const removeFromRequestHandler=(mentorId)=>{
  closeModal(false)
  dispatch(removeRequestItem(mentorId))
  
  }
  
  const AddRequestHandler=()=>{
    closeModal(false)
    dispatch(addRequestItem(mentor._id))
 
  }
  
  return (
    <div className="modal-background">
    <div className="modal-container">
    <div className="titleCloseBtn">
    <button onClick={()=>removeFromRequestHandler(mentor._id)} >X</button>
    </div>
    <div className="title">
    <h3>Are You Sure You Want to Select this user?</h3>
    </div>
    <div className="body">
    <p>The user will receive a notification and the process will start after the user approves the request
    Request can only be cancel by the program administrator</p>
    </div>
    <div className="footer">
    <button id="cancelBtn" onClick={()=>closeModal(false)}>Cancel</button>
    <button onClick={AddRequestHandler}>Continue</button>
    </div>
    </div>
    </div>
  )
}

export default Modal;