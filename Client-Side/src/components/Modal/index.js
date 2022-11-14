import React from 'react'
import {addRequestItem,removeRequestItem} from "../Redux/Reducers/requestReducer/requestActions"
import {useDispatch} from "react-redux"
import "./index.css"

function Modal({closeModal,toggleModal,mentor}) {
  
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
    <div className="overlay" onClick={toggleModal}></div>
    
    <div className="modal-container">
    <div className="titleCloseBtn">
    <button onClick={()=>removeFromRequestHandler(mentor._id)} >X</button>
    </div>
    <div className="title">
    <h3>Are You Sure You Want to Select this Mentor?</h3>
    </div>
    <div className="body">
    <p>The mentor will receive a notification and the process will start after the mentor approves the request.
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