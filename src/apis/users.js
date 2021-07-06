import axios from "axios";
import qs from "qs";

export function getAllUserList(){
  const promise = axios.get("/user");
  return promise;
}

export function getUserList(keyword="", authority=""){
  console.log(authority);
  const promise = axios.get("/user/select", {params: {keyword, authority}});
  return promise;
}

export function updateUser(user) {
  console.log("@@" , user);
  const promise = axios.put("/user", user);
  return promise;
}

export function createUser(user) {
  const promise = axios.post("/user", user);
  // const promise = axios.post("/user", qs.stringify(user));
  return promise;
}