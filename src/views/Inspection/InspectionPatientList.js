import { useState } from "react";
import { AutoSizer, List, Table } from "react-virtualized";
import DatePicker from "react-datepicker";
import "./style.css";

let patients = [];
let countWaiting = 0;
let countInspection = 0;
let countCompletion = 0;

function getPaitents() {
  for(var i=1000; i<=1010; i++){
    patients.push({ treatment_id: i, patient_name: "환자" + i, patient_birth: "910111", patient_sex: "F", treatment_istate: "대기", treatment_communication: "의사소통메모" });
  }
  for(var i=1011; i<=1020; i++){
    patients.push({ treatment_id: i, patient_name: "환자" + i, patient_birth: "910111", patient_sex: "F", treatment_istate: "완료", treatment_communication: "의사소통메모" });
  }
  return patients;
}

function getIstateWaiting() {
  for(var i=0; i<patients.length; i++) {
    if(patients[i].treatment_istate === "대기"){
      countInspection++;
    }
  }
  return countInspection;
}

function getIstateInspection() {
  for(var i=0; i<patients.length; i++) {
    if(patients[i].treatment_istate === "검사"){
      countWaiting++;
    }
  }
  return countWaiting;
}

function getIstateCompletion() {
  for(var i=0; i<patients.length; i++) {
    if(patients[i].treatment_istate === "완료"){
      countCompletion++;
    }
  }
  return countCompletion;
}

function InspectionPatientList(props) {
  const [treatmentDate, setTreatmentDate] = useState(new Date());
  const [paitents, setPaitents] = useState(getPaitents);
  const [istateWaiting, setIstateWaiting] = useState(getIstateWaiting);
  const [istateInspection, setIstateInspection] = useState(getIstateInspection);
  const [istateCompletion, setIstateCompletion] = useState(getIstateCompletion);

  const searchDateBtn = (event) => {
    console.log(treatmentDate);
    console.log("이동 버튼 클릭");
  };

  // const rowRenderer = ({index, key, style}) => {
  //   return (
  //       <tr key={key}>
  //             <td key={paitents.treatment_id}>
  //               <input type="checkbox" />
  //             </td>
  //             <td style={{width:"10%"}}>{paitents[index].treatment_id}</td>
  //             <td>{paitents[index].patient_name}</td>
  //             <td>{paitents[index].patient_birth}</td>
  //             <td>{paitents[index].patient_sex}</td>
  //             <td>{paitents[index].treatment_istate}</td>
  //             <td>{paitents[index].treatment_communication}</td>
  //       </tr>
  //   );
  // };

  return (
    <div className="InspectionPatientList">
      <div className="InspectionPatientList_title">
        환자검색
      </div>
      <div className="InspectionPatientList_1 border">
        <div className="InspectionPatientList_1_1 mb-2">
          <div className="col-4 p-0">
            {/* <input type="date" value={date} onChange={handleChange}/> */}
            <DatePicker dateFormat="yyyy.MM.dd" selected={treatmentDate} onChange={(date) => setTreatmentDate(date)} />
          </div>
          <div className="col-3 InspectionPatientList_1_2 p-0">
            <button className="button_team2_fill" onClick={searchDateBtn}>이동</button>
          </div>
          <div className="row p-0">
            <div className="InspectionPatientList_1_3_1">대기:{istateWaiting}명</div>
            <div className="InspectionPatientList_1_3_2">검사:{istateInspection}명</div>
            <div className="InspectionPatientList_1_3_3">완료:{istateCompletion}명</div>
          </div>
        </div>
        
        <div className="InspectionPatientList_list">
          <table className="table InspectionPatientList_2_1">
            <thead className="InspectionPatientList_2_2">
              <th></th>
              <th>진료 번호</th>
              <th>환자명</th>
              <th>생년월일</th>
              <th>성별</th>
              <th>상태</th>
              <th>의사소통메모</th>
            </thead>
            <tbody>
            {/* <AutoSizer disableHeight>
              {({ width, height }) => {
                return <List width={width} height={500} list={paitents} rowCount={paitents.length} rowHeight={44} rowRenderer={rowRenderer} overscanRowCount={11} />;
              }}
            </AutoSizer> */}
            {paitents.map(paitent => {
              return(
                <tr>
                  <td key={paitent.treatment_id} style={{width:"10%"}}>
                    <input type="checkbox" />
                  </td>
                  <td>{paitent.treatment_id}</td>
                  <td>{paitent.patient_name}</td>
                  <td>{paitent.patient_birth}</td>
                  <td>{paitent.patient_sex}</td>
                  <td>{paitent.treatment_istate}</td>
                  <td>{paitent.treatment_communication}</td>
                </tr>
              );
            })}

          </tbody>
          </table>
        </div>
      </div>
      
    </div>
  );
}

export default InspectionPatientList;