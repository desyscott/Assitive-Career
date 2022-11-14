import React,{useEffect} from 'react'
import {Link} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"
import {fetchMentorsRequest,verifyMentor,deleteMentor} from "../components/Redux/Reducers/MentorReducer/mentorActions"
import LoadingBox from '../components/LoadingBox/index'
import MessageBox from '../components/MessageBox/index'

const mapState=({mentorData})=>({
  mentors:mentorData.mentors,
  loading:mentorData.loading,
  error:mentorData.error,
       
})

function MentorsList() {
  const {mentors,loading,error} =useSelector(mapState)
  const mentorDelete = useSelector((state) => state.mentorDeleteData);
  const {
    loading: loadingDelete,
    success: successDelete,
    error: errorDelete,
  } = mentorDelete;
  
  const mentorVerify = useSelector((state) => state.verifyMentorData);
  const {
    loading: loadingVerify,
    success: successVerify,
    error: errorVerify,
  } =  mentorVerify;
  const dispatch=useDispatch()
  
  
  useEffect(()=>{
    dispatch(fetchMentorsRequest())
    return () => {
      //
    }
   },[dispatch,successVerify,successDelete])

  
  const handleVerifyMentor=(mentor)=>{
   dispatch(verifyMentor({mentorId:mentor._id,mentorVerified:mentor.mentorVerified}))
 
  }
  
  const deleteHandler=(mentor)=>{
    dispatch(deleteMentor(mentor._id));
  }
  
  return (
    <div className="content content-margined">
    {loading ? 
        <LoadingBox></LoadingBox>
        :
        error ?<MessageBox variant="danger">{error}</MessageBox>
        :
     (
       <>
        <div className="mentors-header">
        <h3>Mentors</h3>
      </div>
      <div className="order-list">

        <table className="table">
          <thead>
            <tr>
             
              <th>FIRSTNAME</th>
              <th>LASTNAME</th>
              <th>ROLE</th>
              <th>MENTOR VERIFIED</th>
              <th>EMAIL</th>
              <th>PROFESSION</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
          {mentors.map(mentor=>(
              
              <tr key={mentor._id}>
              <td>{mentor.firstName}</td>
              <td>{mentor.lastName}</td>
              <td>{mentor.role}</td>
              <td>
              {mentor.mentorVerified?
                   <span className="verify-success">true</span>
                   :
                   <span className="verify-danger">false</span>
                   
                    }
              </td>
              <td>{mentor.email}</td>
              <td>{mentor.profession}</td> 
              <td>
                <Link to={`/mentor/${mentor._id}`} className="action-btn primary">Details</Link>
                {' '}
                <button type="button"  className="action-btn primary" 
                onClick={() => handleVerifyMentor(mentor)}
                 disabled={mentor.mentorVerified}
                 >Verify</button>
                {' '}
                <button type="button"  className="action-btn danger"
                 onClick={() => deleteHandler(mentor)}
                >Delete</button>
              </td>
            </tr>
             ))}
          </tbody>
        </table>
      </div>
      </>)
    }
    </div>
  )
}

export default MentorsList
