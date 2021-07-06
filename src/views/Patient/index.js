import PatientCreateForm from "./PatientCreateForm";
import PatientList from "./PatientList";
import PatientUpdateForm from "./PatientUpdateForm";
import "./Patient.css";
import { useEffect, useState } from "react";

function Patient(props) {
  // 환자 상태
  const [patient, setPatient] = useState({});

  function changePatient(patient) {
    setPatient({
      patient_id: patient.patient_id,
      patient_name: patient.patient_name,
      patient_ssn1: patient.patient_ssn1,
      patient_ssn2: patient.patient_ssn2,
      patient_sex: patient.patient_sex,
      patient_tel1: patient.patient_tel1,
      patient_tel2: patient.patient_tel2,
      patient_tel3: patient.patient_tel3, 
      patient_zipcode: patient.patient_zipcode, 
      patient_address: patient.patient_address, 
      patient_detailaddress1: patient.patient_detailaddress1, 
      patient_detailaddress2: patient.patient_detailaddress2,
      patient_regdate: patient.patient_regdate
    })
  };

  console.log(patient);

  // useEffect(() => {
  //   setPatient(patient);
  // }, [patient]);

  return (
    <div className={`row no-gutters Patient`}>
      {/* 좌측 */}
      <div className="Patient_left">
        {/* 환자 목록 */}
        <PatientList patient={patient} changePatient={changePatient}/>
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