import { PatientContextProvider } from "./PatientContext";
import PatientCreateForm from "./PatientCreateForm";
import PatientList from "./PatientList";
import PatientUpdateForm from "./PatientUpdateForm";
import "./Patient.css";
import { useState } from "react";

function Patient(props) {
  // 환자 코드 상태
  const [patientId, setPatientId] = useState("");

  // 검색 상태
  const [keyword, setKeyword] = useState("");
  
  function changeId(id) {
    setPatientId(id);
  };

  function search(keyword) {
    setKeyword(keyword);
    console.log("keyword출력:", keyword);
  };

  return (
    <div className={`row no-gutters Patient`}>
      <PatientContextProvider>
        {/* 좌측 */}
        <div className="left">
          {/* 환자 목록 */}
          <PatientList patientId={patientId} changeId={changeId} search={search}/>
        </div>

        {/* 우측 */}
        <div className="right">
          <div className="right1">
            {/* 환자 정보 수정 */}
            <PatientUpdateForm patientId={patientId}/>
          </div>
          <div className="right2">
            {/* 환자 등록 */}
            <PatientCreateForm />
          </div>
        </div>
      </PatientContextProvider>
    </div>
  );
}

export default Patient;