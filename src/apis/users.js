import axios from "axios";

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
  const promise = axios.put("/user", user);
  return promise;
}

export function createUser(user) {
  console.log(user);
  const promise = axios.post("/user", user);
  return promise;
}