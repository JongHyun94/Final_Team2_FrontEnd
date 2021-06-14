//상태 조건값 선언
const initialState = {
  uid: "",
  authToken: ""
};

//액션 타입 선언
const SET_UID = "auth/setUid";
const SET_AUTH_TOKEN = "auth/setAuthToken";

//액션 생성 함수 선언
export const createSetUidAction = (uid) => {
  return {
    type: SET_UID,
    uid: uid,
  };
};

export const createSetAuthTokenAction = (authToken) => {
  return {
    type: SET_AUTH_TOKEN,
    authToken: authToken,
  };
};

//리듀스 선언
const authReducer = (state = initialState, action) => { //default값 넣어줌 initialState
  if (action.type === SET_UID) {
    return { ...state, uid: action.uid };
  } else if(action.type === SET_AUTH_TOKEN){
    return { ...state, authToken: action.authToken };
  } else {
    return state;
  }
};

export default authReducer;