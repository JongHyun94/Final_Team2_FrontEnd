import axios from "axios";

export function sendMqttMessage({topic, content}) {
  const promise = axios.get("/sendMqttMessage", {params:{topic, content}});
  // console.log("hitwo",promise);
  return promise;
}

