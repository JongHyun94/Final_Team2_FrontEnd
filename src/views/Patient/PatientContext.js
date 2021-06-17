import React, { useState } from "react";

const PatientContext = React.createContext({
  patientId: "",
  setPatientId: function(patientId) {}
});

export function PatientContextProvider(props) {
  const [patientId, setPatientId] = useState("011");
  const value = {
    patientId: patientId,
    setPatientId: setPatientId
  };
  return (
    <PatientContext.Provider value={value}>
      {props.children}
    </PatientContext.Provider>
  );
};

export default PatientContext;