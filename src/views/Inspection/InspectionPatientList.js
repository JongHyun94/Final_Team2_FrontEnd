import { useCallback, useEffect, useRef, useState } from "react";
import { AutoSizer, List, Table } from "react-virtualized";
import DatePicker from "react-datepicker";
import moment from "moment";
import InspectionPatientListItem from "./InspectionPatientListItem";
import { readPatient } from "apis/inspections";

let patientsList = [];

function InspectionPatientList(props) {
  

  //DatePicker 상태
  const [treatmentDate, setTreatmentDate] = useState(new Date());
  //날짜 이동 상태
  const [treatmentDate2, setTreatmentDate2] = useState(new Date());
  const [patients, setPatients] = useState(patientsList);
  const [istateWaiting, setIstateWaiting] = useState(getIstateWaiting(patients));
  const [istateInspection, setIstateInspection] = useState(getIstateInspection(patients));
  const [istateCompletion, setIstateCompletion] = useState(getIstateCompletion(patients));

  // 진료번호 비교를 위한 상태
  const [id, setId] = useState("");

  useEffect(() => {
    console.log(props.message);
    getPatient2(treatmentDate2);
  }, [props.message]);

  useEffect(() => {
    getPatient2(treatmentDate2);
  },[treatmentDate2]);

  useEffect(() => {
    checkIState(patients);
  })

  const getPatient2 = async (treatmentDate2) => {
    try {
      const response = await readPatient(treatmentDate2);
      patientsList = response.data.treatmentList;
      setPatients(patientsList);
    } catch(error) {
      console.log(error);
    }
  };

  function getIstateWaiting(patients) {
    let countWaiting = 0;
    for (var i = 0; i < patients.length; i++) {
      if (patients[i].treatment_istate === "대기") {
        countWaiting++;
      }
    }
    return countWaiting;
  }
  
  function getIstateInspection(patients) {
    let countInspection = 0;
    for (var i = 0; i < patients.length; i++) {
      if (patients[i].treatment_istate === "검사") {
        countInspection++;
      }
    }
    return countInspection;
  }
  
  function getIstateCompletion(patients) {
    let countCompletion = 0;
    for (var i = 0; i < patients.length; i++) {
      if (patients[i].treatment_istate === "완료") {
        countCompletion++;
      }
    }
    return countCompletion;
  }

  //날짜 이동 버튼
  const searchDateBtn = (treatmentDate) => {
      setTreatmentDate2(moment(treatmentDate).format("yyyy-MM-DD HH:mm"));
      // getPatient2(treatmentDate2);
  };

  //진료 완료 환자 체크(선택)
  const handleChecked = (treatmentId) => {
    setId(treatmentId);
    props.checkedtId(treatmentId);
  };

  const checkIState = (patients) => {
    setIstateWaiting(getIstateWaiting(patients));
    setIstateInspection(getIstateInspection(patients));
    setIstateCompletion(getIstateCompletion(patients));
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
      <div className="InspectionPatientList_title">검사 대기 환자</div>
      <div className="InspectionPatientList_1 border">
        <div className="InspectionPatientList_1_1 mb-2">
          <div className="InspectionPatientList_1_2_1 p-0">
            {/* <input type="date" value={date} onChange={handleChange}/> */}
            <DatePicker locale="ko" dateFormat="yyyy.MM.dd" selected={treatmentDate} onChange={(date) => setTreatmentDate(date)}/>
          </div>
          <div className="InspectionPatientList_1_2_2">
            <button className="button_team2_fill" onClick={() => searchDateBtn(treatmentDate)}>
              이동
            </button>
          </div>
          <div className="InspectionPatientList_1_2_3 p-0">
            <div className="InspectionPatientList_1_3_0">전체:{istateWaiting+istateInspection+istateCompletion}명</div>
            <div className="InspectionPatientList_1_3_1">대기:{istateWaiting}명</div>
            <div className="InspectionPatientList_1_3_2">검사:{istateInspection}명</div>
            <div className="InspectionPatientList_1_3_3">완료:{istateCompletion}명</div>
          </div>
        </div>

        <div className="InspectionPatientList_list">
          <table className="table InspectionPatientList_2_1" style={{height:"10px"}}>
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
              {patients.map((patient) => {
                return (
                  <InspectionPatientListItem key={patient.treatment_id} patient={patient} id={id} handleChecked={(treatmentId) => handleChecked(treatmentId)} 
                                              iState={props.iState} handleBarcodeBack={props.handleBarcodeBack}
                                              iStateFinish={props.iStateFinish} handleFinishBack={props.handleFinishBack}/>
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
