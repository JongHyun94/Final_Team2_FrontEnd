import axios from "axios";

// register 불러오기 
export function getRegisterList(date){
  const promise = axios.get("/register", {params: {date}});
  return promise;
}
// 의사 불러오기
export function getDoctorList(date){
  const promise = axios.get("/register/doctors");
  return promise;
}

// 환자 불러오기
export function getPatientList(date){
  const promise = axios.get("/register/patients");
  return promise;
}


// register 등록하기
export function createRegister(register){
  const promise = axios.put("/register", register);
  return promise;
}