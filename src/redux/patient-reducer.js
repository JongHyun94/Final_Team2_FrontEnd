//상태 조건값 선언
const initialState = {
  patientId: "",
  patientName: "",
  patientSsn: "",
  patientSex: "",
  patientTel1: "",
  patientTel2: "",
  patientTel3: "",
  patientAddress: "",
  patientRegDate: "",
};

//액션 타입 선언
const SET_PATIENT = "Patient/setPatient";

//액션 생성 함수 선언
export const createSetUidAction = (uid) => {
  return {
    type: SET_PATIENT,
    uid: uid,
  };
};

//리듀스 선언
const patientReducer = (state = initialState, action) => { //default값 넣어줌 initialState
  if (action.type === SET_PATIENT) {
    return { ...state, uid: action.uid };
  } else {
    return state;
  }
};

export default patientReducer;