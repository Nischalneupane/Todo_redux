import todoReducer from "./todoReducer";
import { combineReducers } from "redux";

const reducer = combineReducers({
    todo: todoReducer
})

export default reducer