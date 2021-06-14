import { combineReducers } from "redux";
import authReducer from "./auth-reducer";
import colorReducer from "./color-reducer";

const rootReducer = combineReducers({
  colorReducer: colorReducer,
  authReducer: authReducer,
});

export default rootReducer;
