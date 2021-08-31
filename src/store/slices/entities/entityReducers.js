import { combineReducers } from "redux";
import productSlice from "./products/slice"

export default combineReducers({
    products: productSlice
})