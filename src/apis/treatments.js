import axios from "axios";

export function test(){
  const promise = axios.get("/test");
  return promise;
}