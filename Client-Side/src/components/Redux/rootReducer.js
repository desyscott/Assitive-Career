import {combineReducers} from "redux"

import usersReducer, { userDetailsReducer, userProfileUpdateReducer } from "./Reducers/userReducer/userReducer"
import coursesReducer from "./Reducers/courseReducer/coursesReducer"
import addToRequestReducer from "./Reducers/requestReducer/requestsReducer";
import mentorReducer from "./Reducers/MentorReducer/mentorReducer";

const rootReducer = combineReducers({
    userData:usersReducer,
    mentorData:mentorReducer,
    coursesData:coursesReducer,
    requestData:addToRequestReducer,
    userProfileUpdatedData:userProfileUpdateReducer,
    userDetailsData:userDetailsReducer
})

export default rootReducer;