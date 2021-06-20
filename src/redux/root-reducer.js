import { combineReducers } from "redux";
import authReducer from "./auth-reducer";
import patientReducer from "./patient-reducer";

const rootReducer = combineReducers({
  authReducer: authReducer,
  patientReducer: patientReducer
});

export default rootReducer;
