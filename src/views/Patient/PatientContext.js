import React, { useState } from "react";

const PatientContext = React.createContext({
  patientId: "",
  setPatientId: () => {}
});

export function PatientContextProvider(props) {
  const [patientId, setPatientId] = useState("");
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