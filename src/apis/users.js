import axios from "axios";
import qs from "qs";

export function getAllUserList(){
  const promise = axios.get("/user");
  return promise;
}

export function getUserList(keyword="", authority=""){
  const promise = axios.get("/user/select", {params: {keyword, authority}});
  return promise;
}

export function updateUser(user) {
  const promise = axios.put("/user", user);
  return promise;
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

export function deleteUser(user_id) {
  console.log("탈퇴", user_id);
  return axios.delete("/user", {params: {user_id}});
}