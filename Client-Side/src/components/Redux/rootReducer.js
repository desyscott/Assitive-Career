import {combineReducers} from "redux"

import usersReducer, { userDetailsReducer, userProfileUpdateReducer } from "./Reducers/userReducer/userReducer"
import productsReducer from "./Reducers/productReducer/productsReducer"
import addToCartReducer from "./Reducers/cartReducer/cartsReducer";
import orderReducer from "./Reducers/OrderReducer/orderReducer";
import { orderDetailsReducer } from "./Reducers/OrderReducer/orderReducer";

const rootReducer = combineReducers({
    productsData:productsReducer,
    cartData:addToCartReducer,
    userData:usersReducer,
    orderData:orderReducer,
    orderDetailsData: orderDetailsReducer,
    userProfileUpdatedData:userProfileUpdateReducer,
    userDetailsData:userDetailsReducer
})

export default rootReducer;