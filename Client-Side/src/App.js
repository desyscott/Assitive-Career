
import {useRef} from "react"
import {Route} from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import  { SkeletonTheme} from 'react-loading-skeleton'
import MainLayout from "./components/MainLayout/index"
import LandingMainLayout from "./components/LandingMainLayout/index"
import SignUp from "./components/SignUp/SignUp";
import Login from "./Pages/Login"
import EmailVerified from "./components/EmailVerfication/EmailVerified";
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
import Profile from "./Pages/Profile"
import MentorList from "./Pages/MentorsList"
import CareerTest2 from "../src/components/CareerTest/Text2"
import CareerTest3 from "../src/components/CareerTest/Test3"
import TestResults from "../src/components/CareerTest/TestResults"
import Users from "./Pages/Users"
import Mentor from "./Pages/Mentor"
import Events from "./Pages/Events"
import user from "./Pages/user"
import Help from "./Pages/Help"
import PrivateRoute from "./components/PrivateRoute/index"




const  App=()=> {
  
  const home=useRef(null)
  const event=useRef(null)
  const mentor=useRef(null)
  const testimonal=useRef(null)
  const aboutUs=useRef(null)
  const contactUs=useRef(null)
  
  const configScrollRef ={
    home,
    event,
   mentor,
   testimonal,
   aboutUs,
   contactUs,
  }
  
  
  
  return (
    <>
     <SkeletonTheme baseColor="hsl(200,30%,80%)" highlightColor="hsl(500, 50%, 95%)">
      
          <Route path="/" exact={true} render={()=>(
            <LandingMainLayout  {...configScrollRef}>
            <Landing  {...configScrollRef}/>
            </LandingMainLayout>
          )}/>
       
          {/* <Route path="/home" render={()=>(
            <MainLayout>
            <Home/>
            </MainLayout>
          )}/>
          
          
          <Route path="/course/:courseId" render={()=>(
            <MainLayout>
              <CourseDetails/>
            </MainLayout>
          )}/>
          
          <Route path="/careers" render={()=>(
            <MainLayout>
            <Dashboard/>
            </MainLayout>
          )}/>
          <Route path="/events" render={()=>(
            <MainLayout>
            <Events/>
            </MainLayout>
          )}/>
          <Route path="/profile" render={()=>(
            <MainLayout>
            <Profile/>
            </MainLayout>
          )}/>
          <Route path="/mentor-list" render={()=>(
            <MainLayout>
            <MentorList/>
            </MainLayout>
          )}/>
          <Route path="/users" render={()=>(
            <MainLayout>
            <Users/>
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
          <Route exact path="/career-test2" render={()=>(
            <MainLayout>
            <CareerTest2/>
            </MainLayout>
          )}/>
          <Route exact path="/career-test3" render={()=>(
            <MainLayout>
            <CareerTest3/>
            </MainLayout>
          )}/>
          <Route exact path="/help" render={()=>(
            <MainLayout>
            <Help/>
            </MainLayout>
          )}/>
          <Route exact path="/mentor/:mentorId" render={()=>(
            <MainLayout>
            <Mentor/>
            </MainLayout>
          )}/>
          <Route exact path="/test-results" render={()=>(
            <MainLayout>
            <TestResults/>
            </MainLayout>
          )}/>
           */}
          
          <PrivateRoute path="/home" component={Home} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/careers" component={Dashboard} />
          <PrivateRoute path="/request-mentor" component={MentorRequest} />
          <PrivateRoute path="/career-test" component={CareerTest} />
          <PrivateRoute path="/mentors" component={Mentors} />
          <PrivateRoute path="/mentor/:mentorId" component={Mentor} />
          <PrivateRoute path="/mentor-list" component={MentorList} />
          <PrivateRoute path="/users" component={Users} />
          <PrivateRoute path="/user/:userId" component={user} />
          <PrivateRoute path="/course/:courseId" component={CourseDetails} />
          <PrivateRoute path="/events" component={Events} />
          <PrivateRoute path="/help" component={Help} />
          <PrivateRoute path="/career-test2" component={CareerTest2} />
          <PrivateRoute path="/career-test3" component={CareerTest3} />
          <PrivateRoute path="/test-results" component={TestResults} />
          
          <Route exact path="/user-role" render={()=>(
            <UserRole/>
          )}/>
  
          <Route path="/signIn" component={Login} />
          <Route path="/signUp/:signUpRole"  component={SignUp} />
          
          <Route path="/email-verification"
           component={EmailVerified}
          />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/reset-password" component={ResetPassword} /> 
     </SkeletonTheme>
    </>
  );
}

export default App;
