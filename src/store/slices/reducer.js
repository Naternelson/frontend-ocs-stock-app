import { combineReducers } from "redux";
import entities from "./entities/entityReducers"
import pages from "./pages/pageReducers"

export default combineReducers({
    entities,
    pages
})