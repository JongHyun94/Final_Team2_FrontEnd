import axios from "axios";

export function readPatient(treatmentDate) {
  const promise = axios.get("/inspection", {params:{treatmentDate}});
  return promise;
}

export function updateIstateI(treatmentId) {
  const promise = axios.put("/inspection/istateI", null, {params:{treatmentId}});
  return promise;
}

export function updateIstateC(treatmentId) {
  const promise = axios.put("/inspection/istateC", null, {params:{treatmentId}});
  return promise;
}

export function readInspection(treatmentId) {
  const promise = axios.get("/inspection/inspections", {params:{treatmentId}});
  return promise;
}

export function updateState(inspectionId, state) {
  const promise = axios.put("/inspection/state", null, {params:{inspectionId, state}});
  return promise;
}

export function updateResult(inspectionId, inspectionResult) {
  const promise = axios.put("/inspection/result", null, {params:{inspectionId, inspectionResult}});
  return promise;
}

export function readImage(inspectionId) {
  const promise = axios.get("/inspection/images", {params:{inspectionId}});
  return promise;
}