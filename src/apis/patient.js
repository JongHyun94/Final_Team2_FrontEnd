import axios from "axios";

export function getPatientList(){
  const promise = axios.get("/patient");
  return promise;
}