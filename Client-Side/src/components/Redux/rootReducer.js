import {combineReducers} from "redux"

import usersReducer, { userDetailsReducer, userProfileUpdateReducer } from "./Reducers/userReducer/userReducer"
import coursesReducer from "./Reducers/courseReducer/coursesReducer"
import addToRequestReducer from "./Reducers/requestReducer/requestsReducer";
import mentorReducer,{mentorVerificationReducer,mentorDeleteReducer} from "./Reducers/MentorReducer/mentorReducer";
import studentReducer,{studentsDeleteReducer} from "./Reducers/studentsReducer/studentReducer";
import addCareerTestScoreReducer from "./Reducers/CareerTestReducer/CareerReducer"

const rootReducer = combineReducers({
    userData:usersReducer,
    mentorData:mentorReducer,
    studentData: studentReducer,
    verifyMentorData:mentorVerificationReducer,
    coursesData:coursesReducer,
    requestData:addToRequestReducer,
    userProfileUpdatedData:userProfileUpdateReducer,
    userDetailsData:userDetailsReducer,
    mentorDeleteData:mentorDeleteReducer,
    studentDeleteData:studentsDeleteReducer,
    testData: addCareerTestScoreReducer
})

export default rootReducer;