import { combineReducers } from "redux";
// import LoginReducer from "./LoginReducer";
// import UserReducer from "./UserReducer";
import LayoutReducer from "./LayoutReducer";

const RootReducer = combineReducers({
  // login: LoginReducer,
  // user: UserReducer,
  layout: LayoutReducer,
});

export default RootReducer;
