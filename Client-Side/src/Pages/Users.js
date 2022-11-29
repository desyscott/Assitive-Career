import React,{useEffect} from 'react'
import {Link} from "react-router-dom"
import {fetchStudentsRequest,deleteStudent} from "../components/Redux/Reducers/studentsReducer/studentActions"
import {useDispatch,useSelector} from "react-redux"
import LoadingBox from '../components/LoadingBox/index'
import MessageBox from '../components/MessageBox/index'


const mapState=({studentData})=>({
  students:studentData.students,
  loading:studentData.loading,
  error:studentData.error,
       
})

function Users() {
  const {students,loading,error} =useSelector(mapState)
  const dispatch=useDispatch()
  const studentDelete = useSelector((state) => state.studentDeleteData);
  const {
    loading: loadingDelete,
    success: successDelete,
    error: errorDelete,
  } = studentDelete;
  

  useEffect(()=>{
    dispatch(fetchStudentsRequest())
    return () => {
      //
    }
  },[dispatch,successDelete])
  
  
  const deleteHandler=(student)=>{
    dispatch(deleteStudent(student._id));
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
        <h3>Students</h3>
      </div>
      <div className="order-list">

        <table className="table">
          <thead>
            <tr>
             
             
              <th>FIRSTNAME</th>
              <th>LASTNAME</th>
              <th>ROLE</th>
              <th>ISVERIFIED</th>
              <th>EMAIL</th>
             
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
          {students.map(student=>(
              
              <tr key={student._id}>
              
            
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.role}</td>
              <td>
              {student.verified?
                   <span className="verify-success">true</span>
                   :
                   <span className="verify-danger">false</span>
                   
                    }
              </td>
              <td>{student.email}</td>
      
              <td>
                <Link to={`/user/${student._id}`} className="action-btn primary" >Details</Link>
                {' '}
                <button type="button"  className="action-btn danger"
                 onClick={() => deleteHandler(student)}>Delete</button>
              </td>
            </tr>
             ))}
          </tbody>
        </table>

      </div>
      </>
     )}
    </div>
  )
}

export default Users