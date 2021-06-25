import PatientCreateForm from "./PatientCreateForm";
import PatientList from "./PatientList";
import PatientUpdateForm from "./PatientUpdateForm";
import "./Patient.css";
import { useEffect, useState } from "react";

function Patient(props) {
  // 환자 상태
  const [patient, setPatient] = useState({
    // patientId: "",
    // patientName: "",
    // patientSsn: "",
    // patientSex: "",
    // patientTel1: "",
    // patientTel2: "",
    // patientTel3: "", 
    // patientZipcode: "", 
    // patientAddress: "", 
    // patientDetailAddress1:  "", 
    // patientDetailAddress2: "",
    // patientRegDate: ""
  });

  // 검색 상태
  const [keyword, setKeyword] = useState("");

  function changePatient(patient) {
    setPatient({
      patientId: patient.patientId,
      patientName: patient.patientName,
      patientSsn: patient.patientSsn,
      patientSex: patient.patientSex,
      patientTel1: patient.patientTel1,
      patientTel2: patient.patientTel2,
      patientTel3: patient.patientTel3, 
      patientZipcode: patient.patientZipcode, 
      patientAddress: patient.patientAddress, 
      patientDetailAddress1: patient.patientDetailAddress1, 
      patientDetailAddress2: patient.patientDetailAddress2,
      patientRegDate: patient.patientRegDate
    })
  };

  // useEffect(() => {
  //   setPatient(patient);
  // }, [patient]);

  function search(keyword) {
    setKeyword(keyword);
    console.log("keyword출력:", keyword);
  };

  return (
    <div className={`row no-gutters Patient`}>
      {/* 좌측 */}
      <div className="Patient_left">
        {/* 환자 목록 */}
        <PatientList patient={patient} changePatient={changePatient} search={search}/>
      </div>

      {/* 우측 */}
      <div className="Patient_right">
        <div>
          {/* 환자 정보 수정 */}
          <PatientUpdateForm patient={patient} changePatient={changePatient}/>
        </div>
        <div>
          {/* 환자 등록 */}
          <PatientCreateForm />
        </div>
      </div>
    </div>
  );
}

export default Patient;