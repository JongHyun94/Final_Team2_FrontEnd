import axios from "axios";


export function getTreatmentPatientList(date) {
  const promise = axios.get("/treatment/treatmentlist", {params: {date}});
  return promise;
}



