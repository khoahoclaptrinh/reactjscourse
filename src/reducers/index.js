import { combineReducers } from "redux";
import postReducer from "./postReducer";
const rootReducer = combineReducers({
  postReducer,
});
export default rootReducer;
