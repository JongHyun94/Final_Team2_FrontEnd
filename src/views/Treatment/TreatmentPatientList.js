import { useState } from "react";
// import { AutoSizer, List } from "react-virtualized";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// function getPatientlists() {
//   const patientlists = [];
//   for (var i = 10; i >= 1; i--) {
//     patientlists.push({ registerId: "aed158" + i, patientId: i , registerPatientName: "환자" + i, patientSsn: "910111", patientSex: "F", registerMemo: "의사 소통 메모" + i, registerState: "대기" });
//   }
//   for (var i = 20; i >= 1; i--) {
//     patientlists.push({ registerId: "aed258" + i,  patientId: i ,registerPatientName: "환자" + i, patientSsn: "910111", patientSex: "F", registerMemo: "의사 소통 메모" + i, registerState: "완료" });
//   }
 
//   return patientlists;
  
// }

function getState(patientlists) {
  const state = [];
  
  var ready = 0;
  var done = 0;

  for (var i = 0; i < patientlists.length; i++) {
    if (patientlists[i].registerState == "대기") {
      ready++;
    } else {
      done++;
    }
  }
  state.push(ready);
  state.push(done);
  return state;
}

function getTreatmentHistory() {
  const treatmentHistory = [];
  for(var i = 10; i >=1; i--){
    treatmentHistory.push({patientId: 1, treatmentId:i,treatmentDate:"2021-06-01", treatmentDname:"나의사"+i, treatmentMemo:"메모"+i});
  }
  for(var i = 10; i >=1; i--){
    treatmentHistory.push({patientId: 2, treatmentId:i,treatmentDate:"2021-06-01", treatmentDname:"나의사"+i, treatmentMemo:"메모"+i});
  }
  for(var i = 10; i >=1; i--){
    treatmentHistory.push({patientId: 3, treatmentId:i,treatmentDate:"2021-06-01", treatmentDname:"나의사"+i, treatmentMemo:"메모"+i});
  }
  return treatmentHistory;
}




function TreatmentPatientList(props) {
  const { patientlists, setPatientId, setHistoryList } = props;
  // const [patientlists, setPatientlists] = useState(getPatientlists);
  const [inputdate, setInputdate] = useState(new Date());
  const [state, setState] = useState(() => getState(patientlists));
  const [ready, setReady] = useState(state[0]);
  const [done, setDone] = useState(state[1]);

  const [selectedTreatmentId , setSelectedTreatmentId] = useState("");


  const [treatmentHistoryList, setTreatmentHistoryList] = useState(getTreatmentHistory);
  const [treatmentHList, setTreatmentHList] = useState();

  const checkedtreatment = (registerId,patientlist) => {
    console.log(registerId);
    console.log(patientlist);

    setSelectedTreatmentId(registerId);
    setPatientId(patientlist);
  }

  const opentreatmentHistory = (patientId) => {
    console.log("환자 아이디는 -> "+patientId);
    const selectPatient = treatmentHistoryList.find(treatmentHistory => {
      if(patientId == treatmentHistory.patientId){
        console.log("@@@");
        
        return setHistoryList(selectPatient);
      }
    });

   

  }


  return (
    <div>
      <div className="TreatmentPatientList_title">진료대기환자</div>

              <div className="TreatmentPatientList_border border">
                        <div className="TreatmentPatientList_search">
                              {/* <input type="date" DatePicker selected={inputdate} onChange={(date) => setInputdate(date)} /> */}
                              <DatePicker selected={inputdate} onChange={(date) => setInputdate(date)} />
                              <button className="button_team2_fill">이동</button>
                              <div className="row_1">대기:{ready}명</div>
                              <div className="row_2">완료:{done}명</div>
                        </div>
                        <div className="TreatmentPatientList_Totaltable">
                              <table className="table TreatmentPatientList_table">
                                      <thead className="TreatmentPatientList_table_thead">
                                        <tr>
                                          <th width="5%"></th>
                                          <th width="10%">접수 번호</th>
                                          <th width="10%">환자명</th>
                                          <th width="10%">생년월일</th>
                                          <th width="10%">성별</th>
                                          <th width="25%">의사소통 메모</th>
                                          <th width="10%">상태</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {patientlists.map((patientlist) => {
                                          return (
                                            <tr className="TreatmentPatientList_table_tr" key={patientlist.registerId} onClick={(event) => checkedtreatment(patientlist.registerId,patientlist),(event)=> opentreatmentHistory(patientlist.patientId)}>
                                              <td>
                                                <input type="checkbox" checked={selectedTreatmentId === patientlist.registerId ? true : false} readOnly />
                                              </td>
                                              <td>{patientlist.registerId}</td>
                                              <td>{patientlist.registerPatientName}</td>
                                              <td>{patientlist.patientSsn}</td>
                                              <td>{patientlist.patientSex}</td>
                                              <td>{patientlist.registerMemo}</td>
                                              {patientlist.registerState === "대기" ? 
                                                <td className="row_1">{patientlist.registerState}</td>
                                              : 
                                                <td className="row_2">{patientlist.registerState}</td>
                                              }

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
export default TreatmentPatientList;
