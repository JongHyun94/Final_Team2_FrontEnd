import axios from "axios";

export function login(user){
  //공통경로 생략
  const promise = axios.post("/auth/login", user);
  return promise;
}

export function downloadFile() {
  return axios.get("/download", {responseType: "blob"});
}