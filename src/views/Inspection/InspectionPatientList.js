import { useState } from "react";
import { AutoSizer, List, Table } from "react-virtualized";
import DatePicker from "react-datepicker";

function getPatient() {
  const patients = [];
  for (var i = 1000; i <= 1010; i++) {
    patients.push({ treatmentId: i, patientName: "환자" + i, patientBirth: "910111", patientSex: "F", treatmentIstate: "대기", treatmentCommunication: "의사소통메모" });
  }
  for (var i = 1011; i <= 1020; i++) {
    patients.push({ treatmentId: i, patientName: "환자" + i, patientBirth: "910111", patientSex: "F", treatmentIstate: "완료", treatmentCommunication: "의사소통메모" });
  }
  return patients;
}

function getIstateWaiting(patients) {
  let countWaiting = 0;
  for (var i = 0; i < patients.length; i++) {
    if (patients[i].treatmentIstate === "대기") {
      countWaiting++;
    }
  }
  return countWaiting;
}

function getIstateInspection(patients) {
  let countInspection = 0;
  for (var i = 0; i < patients.length; i++) {
    if (patients[i].treatmentIstate === "검사") {
      countInspection++;
    }
  }
  return countInspection;
}

function getIstateCompletion(patients) {
  let countCompletion = 0;
  for (var i = 0; i < patients.length; i++) {
    if (patients[i].treatmentIstate === "완료") {
      countCompletion++;
    }
  }
  return countCompletion;
}

function InspectionPatientList(props) {
  const [treatmentDate, setTreatmentDate] = useState(new Date());
  const [patients, setPatients] = useState(getPatient);
  const [istateWaiting, setIstateWaiting] = useState(getIstateWaiting(patients));
  const [istateInspection, setIstateInspection] = useState(getIstateInspection(patients));
  const [istateCompletion, setIstateCompletion] = useState(getIstateCompletion(patients));

  const searchDateBtn = (event) => {
    console.log(treatmentDate);
    console.log("이동 버튼 클릭");
  };

  // const rowRenderer = ({index, key, style}) => {
  //   return (
  //       <tr key={key}>
  //             <td key={patient.treatment_id}>
  //               <input type="checkbox" />
  //             </td>
  //             <td style={{width:"10%"}}>{patient[index].treatment_id}</td>
  //             <td>{patient[index].patient_name}</td>
  //             <td>{patient[index].patient_birth}</td>
  //             <td>{patient[index].patient_sex}</td>
  //             <td>{patient[index].treatment_istate}</td>
  //             <td>{patient[index].treatment_communication}</td>
  //       </tr>
  //   );
  // };

  return (
    <div className="InspectionPatientList">
      <div className="InspectionPatientList_title">환자검색</div>
      <div className="InspectionPatientList_1 border">
        <div className="InspectionPatientList_1_1 mb-2">
          <div className="InspectionPatientList_1_2_1 p-0">
            {/* <input type="date" value={date} onChange={handleChange}/> */}
            <DatePicker dateFormat="yyyy.MM.dd" selected={treatmentDate} onChange={(date) => setTreatmentDate(date)}/>
          </div>
          <div className="col-3 InspectionPatientList_1_2_2 p-0">
            <button className="button_team2_fill" onClick={searchDateBtn}>
              이동
            </button>
          </div>
          <div className="InspectionPatientList_1_2_3 row p-0">
            <div className="InspectionPatientList_1_3_1">대기:{istateWaiting}명</div>
            <div className="InspectionPatientList_1_3_2">검사:{istateInspection}명</div>
            <div className="InspectionPatientList_1_3_3">완료:{istateCompletion}명</div>
          </div>
        </div>

        <div className="InspectionPatientList_list">
          <table className="table InspectionPatientList_2_1">
            <thead className="InspectionPatientList_2_2">
              <tr>
                <th></th>
                <th>진료 번호</th>
                <th>환자명</th>
                <th>생년월일</th>
                <th>성별</th>
                <th>상태</th>
                <th>의사소통메모</th>
              </tr>
            </thead>
            <tbody>
              {/* <AutoSizer disableHeight>
              {({ width, height }) => {
                return <List width={width} height={500} list={patient} rowCount={patient.length} rowHeight={44} rowRenderer={rowRenderer} overscanRowCount={11} />;
              }}
            </AutoSizer> */}
              {patients.map((paitent) => {
                return (
                  <tr key={paitent.treatmentId}>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>{paitent.treatmentId}</td>
                    <td>{paitent.patientName}</td>
                    <td>{paitent.patientBirth}</td>
                    <td>{paitent.patientSex}</td>
                    <td>{paitent.treatmentIstate}</td>
                    <td>{paitent.treatmentCommunication}</td>
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
