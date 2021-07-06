import axios from "axios";

export function readPatient(treatmentDate) {
  const promise = axios.get("/inspection", {params:{treatmentDate}});
  return promise;
}

export function updateIstateI(treatmentId) {
  const promise = axios.post("/inspection/istateI", null, {params:{treatmentId}});
  return promise;
}

export function updateIstateC(treatmentId) {
  const promise = axios.post("/inspection/istateC", null, {params:{treatmentId}});
  return promise;
}

export function readInspection(treatmentId) {
  const promise = axios.get("/inspection/inspections", {params:{treatmentId}});
  return promise;
}