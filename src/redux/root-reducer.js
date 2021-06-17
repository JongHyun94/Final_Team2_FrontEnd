import { combineReducers } from "redux";
import authReducer from "./auth-reducer";
import colorReducer from "./color-reducer";
import patientReducer from "./patient-reducer";

const rootReducer = combineReducers({
  colorReducer: colorReducer,
  authReducer: authReducer,
  patientReducer: patientReducer
});

export default rootReducer;
