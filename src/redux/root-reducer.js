import { combineReducers } from "redux";
import authReducer from "./auth-reducer";
import hospitalReducer from "./hospital-reducer";
import patientReducer from "./patient-reducer";

const rootReducer = combineReducers({
  authReducer: authReducer,
  patientReducer: patientReducer,
  hospitalReducer: hospitalReducer,
});

export default rootReducer;
