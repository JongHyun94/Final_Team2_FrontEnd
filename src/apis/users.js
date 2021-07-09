import axios from "axios";
import qs from "qs";

export function getAllUserList(){
  const promise = axios.get("/user");
  return promise;
}

export function getUserList(keyword="", condition=""){
  const promise = axios.get("/user/select", {params: {keyword, condition}});
  return promise;
}

export function updateUser(user) {
  const promise = axios.put("/user", user);
  return promise;
}

export function updateUserEnabled(user) {
  return axios.put("/user/enabled", user);
}

export function createUser(user) {
  const promise = axios.post("/user", user);
  // const promise = axios.post("/user", qs.stringify(user));
  return promise;
}

export function getUser(user_id) {
  const promise = axios.get("/user/read", {params: {user_id}});
  return promise;
}

export function updateUserInfo(user) {
  const promise = axios.put("/user/update", user);
  return promise;
}