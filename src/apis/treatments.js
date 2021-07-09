import axios from "axios";
import qs from "qs";

export function getTreatmentPatientList(date) {
  const promise = axios.get("/treatment/treatmentlist", {params: {date}});
  return promise;
}

export function getTreatmentHistoryList(treatment_patient_id) {
  const promise = axios.get("/treatment/historyList", {params: {treatment_patient_id}});
  return promise;
}

export function getTreatmentHistoryRead(treatment_id) {
  const promise = axios.get("/treatment/historyRead", {params: {treatment_id}});
  return promise;
  
}


export function updateTreatment(treatment) {
  const promise = axios.put("/treatment",treatment);
  return promise;
  
}

export function getSearchDurg(keyword="") {
  const promise = axios.get("/treatment/keyword", {params: {keyword}});
  return promise;
}

export function getCategoryInspectionList(categoryValue) {
  const promise = axios.get("/treatment/categoryValue", {params: {categoryValue}});
  return promise;
}

// drugsInjections 등록하기
export function createDruglist(drugsInjections){
  const promise = axios.post("/treatment/drugsInjections", drugsInjections);
  return promise;
}
