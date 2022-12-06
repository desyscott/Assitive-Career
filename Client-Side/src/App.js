
import {useRef} from "react"
import {Routes,Route} from "react-router-dom";
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
import CareerRoadmap from "./Pages/CareerRoadmap";
import Profile from "./Pages/Profile"
import MentorList from "./Pages/MentorsList"
import CareerTest2 from "../src/components/CareerTest/Text2"
import CareerTest3 from "../src/components/CareerTest/Test3"
import TestResults from "../src/components/CareerTest/TestResults"
import Users from "./Pages/Users"
import Mentor from "./Pages/Mentor"
import Events from "./Pages/Events"
import User from "./Pages/user"
import Help from "./Pages/Help"
import PrivateRoute from "./components/PrivateRoute/index"
import PrivateOutlet from "./components/privateOutlet/index"


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
       <Routes>
          <Route path="/" exact={true} element={
            <LandingMainLayout  {...configScrollRef}>
            <Landing  {...configScrollRef}/>
            </LandingMainLayout>
          }/>
          
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
         
          <Route path="/home" element={
            <PrivateRoute>
              <MainLayout>
               <Home/>
              </MainLayout>
            </PrivateRoute>
            } exact/>
          
          <Route path="/*" element={<PrivateOutlet/>} />
     
          <Route path="/profile" element={
            <PrivateRoute>
              <MainLayout>
               <Profile/>
              </MainLayout>
            </PrivateRoute>
            } />
          
          <Route path="/careers" element={
            <PrivateRoute>
              <MainLayout>
               <Dashboard/>
              </MainLayout>
            </PrivateRoute>
            } />
        
        <Route path="/request-mentor" element={
          <PrivateRoute>
            <MainLayout>        
             <MentorRequest/>
            </MainLayout>
          </PrivateRoute>
          } />
        
          <Route path="/career-test" element={
            <PrivateRoute>
              <MainLayout>
               <CareerTest/>
              </MainLayout>           
            </PrivateRoute>
            } />
          
          <Route path="/mentors" element={
            <PrivateRoute>
              <MainLayout>
               <Mentors/>
              </MainLayout>           
            </PrivateRoute>
            } />
        
          <Route path="/mentor/:mentorId" element={
            <PrivateRoute>
              <MainLayout>
               <Mentor/>
              </MainLayout>           
            </PrivateRoute>
            } />
          
          <Route path="/mentor-list" element={
            <PrivateRoute>
              <MainLayout>
               <MentorList/>
              </MainLayout>       
             </PrivateRoute>
            } />
          
          <Route path="/users" element={
            <PrivateRoute>
              <MainLayout>
               <Users/>
              </MainLayout>           
             </PrivateRoute>
            } />
          
          <Route path="/user/:userId" element={
            <PrivateRoute>
              <MainLayout>
                <User/>
              </MainLayout>           
           </PrivateRoute>
            } />
          
          <Route path="/course/:courseId" element={
            <PrivateRoute>
              <MainLayout>
               <CourseDetails/>
              </MainLayout>
            </PrivateRoute>
            } />
          
          <Route path="/roadmap/:courseId" element={
            <PrivateRoute>
              <MainLayout>
               <CareerRoadmap/>
              </MainLayout>
            </PrivateRoute>
            } />
          
          <Route path="/events" element={
            <PrivateRoute>
              <MainLayout>
               <Events/>
              </MainLayout>           
            </PrivateRoute>
            } />
          
          <Route path="/help" element={
            <PrivateRoute>
              <MainLayout>
               <Help/>
              </MainLayout>           
           </PrivateRoute>
            } />
          
          <Route path="/career-test2" element={
            <PrivateRoute>
              <MainLayout>
               <CareerTest2/>
              </MainLayout>
            </PrivateRoute>
            } />
          
          <Route path="/career-test3" element={
            <PrivateRoute>
              <MainLayout>
               <CareerTest3/>
              </MainLayout>
            </PrivateRoute>
            } />
          
          <Route path="/test-results" element={
            <PrivateRoute>
              <MainLayout>
               <TestResults/>
              </MainLayout>
            </PrivateRoute>
            } />
         
          <Route exact path="/user-role" element={ <UserRole/>}/>
          
          <Route path="/signIn" element={<Login/>}/>
        
          <Route path="/signUp/:signUpRole"  element={<SignUp/>}/>
          
          <Route path="/email-verification" element={<EmailVerified/>}/>
          
          <Route path="/forgot-password" element={<ForgotPassword/>}/>
          
          <Route path="/reset-password" element={<ResetPassword/>}/>
       </Routes>
     </SkeletonTheme>
    </>
  );
}

export default App;
