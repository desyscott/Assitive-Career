import React,{useState} from "react"
import {Link,useHistory} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"
import {signOut} from "../Redux/Reducers/userReducer/userActions"
import { NavBarItems } from "./NavBarItems"
import logo from '../Assets/images/logo.svg'
import "./NavBar.css"
import ProfilePhoto from "../Assets/images/blank-profile-picture-gdfa15e9f3_1280.png"
import {TbLogout} from "react-icons/tb"
import {CgProfile} from "react-icons/cg"
import {FiUsers} from "react-icons/fi"
import {FaElementor} from "react-icons/fa"
import {IoNotificationsSharp} from "react-icons/io5"


const NavBar =()=>{
  const history=useHistory()
    const dispatch=useDispatch()
    const {currentUser}=useSelector((state)=>state.userData);
    const [selected,setSelected]=useState()
    const [click,setClick]=useState(false)
    
  
    const handleSignOut=()=>{
        dispatch(signOut())
        history.push("/");
    }
    
    
    const handleClick=()=>{
      setClick(!click)
    }
 
    return(
  <div className= "nav-header flex">
  
   <div className="nav-logo">
     <div>
    <img src={ logo} alt="logo" className="logo-nav"/>
    </div>
    
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
   
    <div>
   <IoNotificationsSharp className={click ? "notification-icon-light":"notification-icon"} onClick={handleClick} />
   <ul className={click ? "notification-dropdown-content ":"notification-dropdown-none"}>
   <p>You haven’t received any notifications yet</p>
   <div>
   <button>view all notifications</button>
   </div>
   </ul>
   </div>
  
    {currentUser &&
     
  
      <div className="dropdown">
      {currentUser && currentUser.profileImage ?
        (<img src={currentUser.profileImage} alt="profile" className="profile-photo"/>)
       :(<img src={ProfilePhoto} alt="profile" className="profile-photo"/>)}
      
      
       {'  '}
        <Link to="#">{currentUser.firstName}
        {' '}<i className="fa fa-caret-down"/>
        </Link>
        <ul className="dropdown-content">
           <li>
           <Link to="/profile"><CgProfile className="dropdown-icons"/>My Profile</Link>
           </li>
           <li>
          <Link to="#" onClick={handleSignOut}><TbLogout className="logout-icon"/>Logout</Link>
          </li>
        </ul>
    </div>
    }
     
    
   
   
   {currentUser && currentUser.isAdmin &&
    <div className="dropdown">
    <Link to="#">
    Admin {''}
    <i className="fa fa-caret-down"/>
    </Link>
    <ul className="dropdown-content">
    <li><Link to="/mentor-list"><FaElementor className="dropdown-icons"/>All Mentors</Link></li>
    <li><Link to="/users"><FiUsers  className="dropdown-icons"/>Users</Link></li>
    </ul>
    </div>
    }
   </div>
        </div>
    )
}


export default NavBar;