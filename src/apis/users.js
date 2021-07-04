import axios from "axios";

export function getUserList(){
  const promise = axios.get("/user");
  return promise;
}