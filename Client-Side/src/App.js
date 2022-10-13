
import {useRef} from "react"
import {Route} from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import  { SkeletonTheme} from 'react-loading-skeleton'
import MainLayout from "./components/MainLayout/index"
import LandingMainLayout from "./components/LandingMainLayout/index"
import SignUp from "./components/SignUp/SignUp";
import Login from "./Pages/Login"
import EmailVerified from "./components/EmailVerified";
import ForgotPassword from "./components/Forgot-Password/ForgotPassword";
import ResetPassword from "./components/Reset-Password/ResetPassword";
import Landing from "./Pages/Landing";
import UserRole from "./Pages/userRole"
import Home from "./Pages/Home"
import Dashboard from "./Pages/Dashboard"
import MentorRequest from "./Pages/MentorRequest"
import Mentors from "./Pages/Mentors"
import CareerTest from "./Pages/CareerTest"
import CourseDetails from "./Pages/CourseDetails";
import ShippingAddress from "./Pages/ShippingAddress"
import PaymentMethod from "./Pages/PaymentMethod";
import PlaceOrder from "./Pages/PlaceOrder"
import Order from "./Pages/Order"
import Profile from "./Pages/Profile"
import PrivateRoute from "./components/PrivateRoute/index"




const  App=()=> {
  
  const home=useRef(null)
  const event=useRef(null)
  const mentor=useRef(null)
  const testimonal=useRef(null)
  const aboutUs=useRef(null)
  
  const configScrollRef ={
    home,
    event,
   mentor,
   testimonal,
   aboutUs,
  }
  
  
  
  return (
    <>
     <SkeletonTheme baseColor="hsl(200,30%,80%)" highlightColor="hsl(500, 50%, 95%)">
      
          <Route path="/" exact render={()=>(
            <LandingMainLayout  {...configScrollRef}>
            <Landing  {...configScrollRef}/>
            </LandingMainLayout>
          )}/>
       
          <Route path="/home" render={()=>(
            <MainLayout>
            <Home/>
            </MainLayout>
          )}/>
          <Route path="/profile" render={()=>(
            <MainLayout>
            <Profile/>
            </MainLayout>
          )}/>
          
          <Route path="/course/:courseId" render={()=>(
            <MainLayout>
              <CourseDetails/>
            </MainLayout>
          )}/>
          
          {/* <PrivateRoute path="/home" component={Home} /> */}
          {/* <PrivateRoute path="/profile" component={Profile} /> */}
          
          <Route path="/dashboard" render={()=>(
            <MainLayout>
            <Dashboard/>
            </MainLayout>
          )}/>
          
          <Route exact path="/request-mentor" render={()=>(
            <MainLayout>
            <MentorRequest/>
            </MainLayout>
          )}/>
          
          <Route exact path="/mentors" render={()=>(
            <MainLayout>
            <Mentors/>
            </MainLayout>
          )}/>
          
          <Route exact path="/career-test" render={()=>(
            <MainLayout>
            <CareerTest/>
            </MainLayout>
          )}/>
          
          <Route exact path="/user-role" render={()=>(
            <UserRole/>
          )}/>
  
          <Route path="/signIn" component={Login} />
          <Route path="/signUp/:signUpRole"  component={SignUp} />
          
          <Route path="/shipping" render={()=>(
              <MainLayout>
            <ShippingAddress/>
            </MainLayout>
          )}/>
          <Route path="/payment" render={()=>(
              <MainLayout>
            <PaymentMethod/>
            </MainLayout>
            )}/>
          <Route path="/place-order" render={()=>(
            <MainLayout>
            <PlaceOrder/>
            </MainLayout>
            )}/>
          <Route path="/order/:orderId" render={()=>(
            <MainLayout>
              <Order/>
            </MainLayout>
          )}/>
          
          <Route path="/email-verification/:userId/:verificationString"
           component={EmailVerified}
          />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/reset-password" component={ResetPassword} /> 
     </SkeletonTheme>
    </>
  );
}

export default App;
