import React,{useState,useEffect} from "react"
import {Link} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"
import {signOut} from "../Redux/Reducers/userReducer/userActions"
import { NavBarItems } from "./NavBarItems"
import "./NavBar.css"
import ProfilePhoto from "../Assets/images/blank-profile-picture-gdfa15e9f3_1280.png"


const NavBar =()=>{
    const dispatch=useDispatch()
    const {currentUser}=useSelector((state)=>state.userData);
    const [selected,setSelected]=useState()
    
  
    const handleSignOut=()=>{
        dispatch(signOut())
    }
    
    
 
    return(
  <div className= "nav-header flex">
  
   <div className="nav-logo">
   <Link to="/home" >Assistive Career</Link>
   </div>
   
   
   <nav>
    <ul className="primary-navigation flex mobile-view">
    {NavBarItems.map((item,index)=>{
   return (
    <li key={index} onClick={()=>setSelected(index)} className={selected===index? "navbar-list-items nav-active":"navbar-list-items"} >
    <Link to={item.path}>
        {item.title}
    </Link>
    </li>
   )
 })}
    
    </ul>
    </nav>
   
   <div className="nav-links flex">
    {/* {currentUser && */}
     
  
      <div className="dropdown">
      <img src={ProfilePhoto} alt="profile" className="profile-photo"/>
       {'  '}
        <Link to="#">Eddie
        {' '}<i className="fa fa-caret-down" />
        </Link>
        <ul className="dropdown-content">
           <li>
           <Link to="/profile">user profile</Link>
           </li>
           <li>
          <Link to="#" onClick={handleSignOut}>signOut</Link>
          </li>
        </ul>
    </div>
    {/* } */}
     
    
   
   
   {currentUser && currentUser.isAdmin &&
    <div className="dropdown">
    <Link to="#">
    Admin {' '}
    <i className="fa fa-caret-down"/>
    </Link>
    <ul className="dropdown-content">
    <li><Link to="/dashboard"> Dashboard</Link></li>
    <li><Link to="/product">Products</Link></li>
    <li><Link to="/orders"> Orders</Link></li>
    <li><Link to="/users">Users</Link></li>
    </ul>
    </div>}
   </div>
        </div>
    )
}


export default NavBar;