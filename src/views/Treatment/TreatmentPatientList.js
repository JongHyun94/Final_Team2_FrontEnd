import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//진료 상태를 위한 함수
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

function TreatmentPatientList(props) {
  //부모에서 생성한 환자 리스트, 체크된환자정보 담을 상태
  const { patientlists, setCheckedpatient } = props;

  // 접수아이디 선택 상태
  const [selectedRegisterId, setSelectedRegisterId] = useState("");

  const [inputdate, setInputdate] = useState(new Date());
  const [state, setState] = useState(() => getState(patientlists));
  const [ready, setReady] = useState(state[0]);
  const [done, setDone] = useState(state[1]);

  //진료대기 환자 선택함수
  const checkedtreatmentPatient = (registerId, patientlist) => {
    setSelectedRegisterId(registerId);

    //선택된 환자 정보 리스트
    setCheckedpatient(patientlist);
  };

  return (
    <div>
      <div className="TreatmentPatientList_title">진료대기환자</div>

      <div className="TreatmentPatientList_border border">
        <div className="TreatmentPatientList_search">
          {/* <input type="date" DatePicker selected={inputdate} onChange={(date) => setInputdate(date)} /> */}
          <DatePicker locale="ko" dateFormat="yyyy.MM.dd" selected={inputdate} onChange={(date) => setInputdate(date)} />
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
                  <tr className="TreatmentPatientList_table_tr" key={patientlist.registerId} onClick={(event) => checkedtreatmentPatient(patientlist.registerId, patientlist)}>
                    <td>
                      <input type="checkbox" checked={selectedRegisterId === patientlist.registerId ? true : false} readOnly />
                    </td>
                    <td>{patientlist.registerId}</td>
                    <td>{patientlist.registerPatientName}</td>
                    <td>{patientlist.patientSsn}</td>
                    <td>{patientlist.patientSex}</td>
                    <td>{patientlist.registerMemo}</td>
                    {patientlist.registerState === "대기" ? <td className="row_1">{patientlist.registerState}</td> : <td className="row_2">{patientlist.registerState}</td>}
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
