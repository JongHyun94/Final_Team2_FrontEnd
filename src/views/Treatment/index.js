import { useState } from "react";
import "./Treatment.css";
import TreatmentCreateForm from "./TreatmentCreateForm";
import TreatmentHistoryList from "./TreatmentHistoryList";
import TreatmentHistoryRead from "./TreatmentHistoryRead";
import TreatmentPatientList from "./TreatmentPatientList";


function getPatientlists() {
  const patientlists = [];
  for (var i = 10; i >= 1; i--) {
    patientlists.push({ registerId: "aed158" + i, patientId: i , registerPatientName: "환자" + i, patientSsn: "910111", patientSex: "F", registerMemo: "의사 소통 메모" + i, registerState: "대기" });
  }
  for (var i = 30; i >= 1; i--) {
    patientlists.push({ registerId: "aed258" + i,  patientId: "10"+i ,registerPatientName: "환자" + i, patientSsn: "910111", patientSex: "F", registerMemo: "의사 소통 메모" + i, registerState: "완료" });
  }
 
  return patientlists;
  
}





function Treatment(props) {
  const [patientlists, setPatientlists] = useState(getPatientlists);

  const [patientId, setPatientId] = useState("");

  const [historyList, setHistoryList] = useState("");

  return (
    <div className="Treatment">
        <div className="TreatmentLeft">
              {/* 접수 완료 환자 */}
              <div className="TreatmentPatientList">
             
                <TreatmentPatientList patientlists={patientlists} setPatientId={setPatientId} setHistoryList={setHistoryList} />
              
              </div>
              {/* 진료 기록 */}
              <div className="TreatmentHistoryList">
                <TreatmentHistoryList patientlist={patientId} historyList={historyList}/>
              </div>
        </div>
        <div className="TreatmentRight">
              {/* 진료 등록*/}
              <div className="TreatmentCreateForm">
                <TreatmentCreateForm />
              </div>
        </div>
    </div>
  );
}
export default Treatment;
