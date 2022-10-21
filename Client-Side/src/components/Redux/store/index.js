import {createStore,applyMiddleware,compose} from "redux"
import thunk from "redux-thunk"
import logger from "redux-logger"

import rootReducer from '../rootReducer'

export const middlewares = [thunk,logger]

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//we get the requestItem from the localStorage and convert it to an array containing the items
const  initialState={
    userData:{
        currentUser:localStorage.getItem("currentUser")
        ? JSON.parse(localStorage.getItem("currentUser"))
        : null
    }, 
    
    requestData:{
        requestItems:localStorage.getItem('requestItems') 
        ? JSON.parse(localStorage.getItem('requestItems'))
        : [],
        
    }
    

}
const store= createStore(rootReducer,
                         initialState,
                         composeEnhancer(applyMiddleware(...middlewares)))

export {store}