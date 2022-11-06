import {combineReducers} from "redux"

import usersReducer, { userDetailsReducer, userProfileUpdateReducer } from "./Reducers/userReducer/userReducer"
import coursesReducer from "./Reducers/courseReducer/coursesReducer"
import addToRequestReducer from "./Reducers/requestReducer/requestsReducer";
import mentorReducer,{mentorVerificationReducer,mentorDeleteReducer} from "./Reducers/MentorReducer/mentorReducer";
import addCareerTestScoreReducer from "./Reducers/CareerTestReducer/CareerReducer"

const rootReducer = combineReducers({
    userData:usersReducer,
    mentorData:mentorReducer,
    verifyMentorData:mentorVerificationReducer,
    coursesData:coursesReducer,
    requestData:addToRequestReducer,
    userProfileUpdatedData:userProfileUpdateReducer,
    userDetailsData:userDetailsReducer,
    mentorDeleteData:mentorDeleteReducer,
    testData: addCareerTestScoreReducer
})

export default rootReducer;