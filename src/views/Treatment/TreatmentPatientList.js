import { useState } from "react";
import { AutoSizer, List } from "react-virtualized";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function getBoards() {
  const boards = [];
  for (var i = 50; i >= 1; i--) {
    boards.push({ b1: i, b2: "환자" + i, b3: "910111", b4: "F", b5: "의사 소통 메모" + i, b6: "대기" });
  }
  return boards;
}



function TreatmentPatientList(props) {
  const [boards, setBoards] = useState(getBoards);

  const [inputdate, setInputdate] = useState("");

  // const changeDate = (event) => {
  //   console.log("날짜",event.target.value);
  //   setInputdate({inputdate: event.target.value});
  // };

  const rowRenderer = ({index, key, style}) => {
    return (
      
        <tr key={key} style={style} width="100%">
              <td key={boards.b1}>
                <input type="checkbox" />
              </td>
              <td>{boards[index].b1}</td>
              <td>{boards[index].b2}</td>
              <td>{boards[index].b3}</td>
              <td>{boards[index].b4}</td>
              <td>{boards[index].b5}</td>
              <td>{boards[index].b6}</td>
        </tr>
    );
  };

  return (
    <div>
      <div className="TreatmentPatientList_title">접수완료환자</div>

      <div className="TreatmentPatientList_border border">
        <div className="TreatmentPatientList_search">
          <div className="row">
            {/* {subscribeOptioln !== "" && ( */}
              <input type="date" DatePicker selected={inputdate} onChange={(date) => setInputdate(date)} />
            {/* )}
            */}
            <button className="button_team2_fill">이동</button>

            <div className="row_1">대기:2명</div>
            <div className="row_2">완료:3명</div>
          </div>
        </div>

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
            <AutoSizer disableHeight>
              {({ width, height }) => {
                return <List width={width} height={360} list={boards} rowCount={boards.length} rowHeight={44} rowRenderer={rowRenderer} overscanRowCount={5} />;
              }}
            </AutoSizer>
          </tbody>
        </table>
      </div>
    </div>
  );
       
}
export default TreatmentPatientList;
