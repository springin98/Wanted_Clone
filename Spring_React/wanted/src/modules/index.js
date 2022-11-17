import { combineReducers } from "redux";
import bookmark from "./bookmark";
import search from "./search";

const rootReducer = combineReducers({
  bookmark,
  search,
});

export default rootReducer;
