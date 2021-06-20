import { useState } from "react";
// import { AutoSizer, List } from "react-virtualized";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function getPatientlists() {
  const patientlists = [];
  for (var i = 10; i >= 1; i--) {
    patientlists.push({ registerId: "aed158" + i, registerPatientName: "환자" + i, patientSsn: "910111", patientSex: "F", registerMemo: "의사 소통 메모" + i, registerState: "대기" });
  }
  for (var i = 20; i >= 1; i--) {
    patientlists.push({ registerId: "aed258" + i, registerPatientName: "환자" + i, patientSsn: "910111", patientSex: "F", registerMemo: "의사 소통 메모" + i, registerState: "완료" });
  }

  return patientlists;
}

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
  const [patientlists, setPatientlists] = useState(getPatientlists);

  const [inputdate, setInputdate] = useState(new Date());

  const [state, setState] = useState(() => getState(patientlists));

  const [ready, setReady] = useState(state[0]);
  const [done, setDone] = useState(state[1]);

  // const changeDate = (event) => {
  //   console.log("날짜",event.target.value);
  //   setInputdate({inputdate: event.target.value});
  // };

  // const rowRenderer = ({index, key, style}) => {
  //   return (

  //       <tr key={key} style={style} width="100%">
  //             <td key={boards.b1}>
  //               <input type="checkbox" />
  //             </td>
  //             <td>{boards[index].b1}</td>
  //             <td>{boards[index].registerPatientName}</td>
  //             <td>{boards[index].patientSsn}</td>
  //             <td>{boards[index].patientSex}</td>
  //             <td>{boards[index].registerMemo}</td>
  //             <td>{boards[index].registerState}</td>
  //       </tr>
  //   );
  // };

  return (
    <div>
      <div className="TreatmentPatientList_title">접수완료환자</div>

      <div className="TreatmentPatientList_border border">
        <div className="TreatmentPatientList_search">
          <div className="row">
            {/* <input type="date" DatePicker selected={inputdate} onChange={(date) => setInputdate(date)} /> */}
            <DatePicker selected={inputdate} onChange={(date) => setInputdate(date)} />
            <button className="button_team2_fill">이동</button>

            <div className="row_1">대기:{ready}명</div>
            <div className="row_2">완료:{done}명</div>
          </div>
        </div>
        <div className="TreatmentPatientList_Totaltable">
          <table className="table table-bordered TreatmentPatientList_table">
            <thead className="TreatmentPatientList_table_thead">
              <tr>
                <th width="10%"></th>
                <th width="10%">접수 번호</th>
                <th width="15%">환자명</th>
                <th width="20%">생년월일</th>
                <th width="10%">성별</th>
                <th width="25%">의사소통 메모</th>
                <th width="10%">진료 상태</th>
              </tr>
            </thead>
            <tbody>
              {patientlists.map((patientlist) => {
                return (
                  <tr key={patientlist.registerId}>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>{patientlist.registerId}</td>
                    <td>{patientlist.registerPatientName}</td>
                    <td>{patientlist.patientSsn}</td>
                    <td>{patientlist.patientSex}</td>
                    <td>{patientlist.registerMemo}</td>
                    <td>{patientlist.registerState}</td>
                  </tr>
                );
              })}
              {/* <AutoSizer disableHeight>
              {({ width, height }) => {
                return <List width={width} height={360} list={boards} rowCount={boards.length} rowHeight={44} rowRenderer={rowRenderer} overscanRowCount={5} />;
              }}
            </AutoSizer> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default TreatmentPatientList;
