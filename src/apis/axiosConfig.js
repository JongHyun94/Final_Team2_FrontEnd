import axios from "axios";

//http://kosa3.iptime.org:50002
axios.defaults.baseURL = "http://localhost:8080";

export function addAuthHeader(authToken){
  axios.defaults.headers.common["authToken"] = authToken;
}

export function removeAuthHeader(){
  delete axios.defaults.headers.common["authToken"];
}