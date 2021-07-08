import { useEffect, useState } from "react";
import "./Treatment.css";
import TreatmentCreateForm from "./TreatmentCreateForm";
import TreatmentHistoryList from "./TreatmentHistoryList";
import TreatmentPatientList from "./TreatmentPatientList";
import { getTreatmentPatientList } from "apis/treatments";

let treatmentList = [];

function getPatientlists() {
  const createpatientlists = [];
  for (var i = 10; i >= 1; i--) {
    createpatientlists.push({
      registerId: "aed158" + i,
      patientId: i,
      registerPatientName: "김영자" + i,
      patientSsn: "910111",
      patientSex: "F",
      registerMemo: "의사 소통 메모" + i,
      registerState: "대기",
    });
  }
  for (var i = 30; i >= 1; i--) {
    createpatientlists.push({
      registerId: "aed258" + i,
      patientId: "10" + i,
      registerPatientName: "이상현" + i,
      patientSsn: "910111",
      patientSex: "F",
      registerMemo: "의사 소통 메모" + i,
      registerState: "완료",
    });
  }
  return createpatientlists;
}

function Treatment(props) {
  // 위에 생성한 환자 리스트
  const [patientlists, setPatientlists] = useState([]);

  //진료 대기리스트에서 체크된 환자 정보
  const [checkedpatient, setCheckedpatient] = useState("");

  return (
    <div className="Treatment">
      <div className="TreatmentLeft">
        {/* 진료 대기 환자 */}
        <div className="TreatmentPatientList">
          <TreatmentPatientList patientlists={patientlists} setCheckedpatient={setCheckedpatient} />
        </div>
        {/* 진료 기록 */}
        <div className="TreatmentHistoryList">
          <TreatmentHistoryList checkedpatient={checkedpatient} />
        </div>
      </div>
      <div className="TreatmentRight">
        {/* 진료 등록*/}
        <div className="TreatmentCreateForm">
          <TreatmentCreateForm checkedpatient={checkedpatient} />
        </div>
      </div>
    </div>
  );
}
export default Treatment;
