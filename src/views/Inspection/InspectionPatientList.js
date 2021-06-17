import { useState } from "react";
import { AutoSizer, List } from "react-virtualized";
import "./style.css";

function getBoards() {
  const boards = [];
  for (var i = 50; i >= 1; i--) {
    boards.push({ b1: i, b2: "환자" + i, b3: "910111", b4: "F", b5: "메모" + i, b6: "대기", b7: "의사소통메모" });
  }
  return boards;
}

function InspectionPatientList(props) {
  const [boards, setBoards] = useState(getBoards);

  const rowRenderer = ({index, key, style}) => {
    return (
      
        <tr key={key}>
              <td key={boards.b1}>
                <input type="checkbox" />
              </td>
              <td style={{width:"5%"}}>{boards[index].b1}</td>
              <td>{boards[index].b2}</td>
              <td>{boards[index].b3}</td>
              <td>{boards[index].b4}</td>
              <td>{boards[index].b5}</td>
              <td>{boards[index].b6}</td>
              <td>{boards[index].b7}</td>
        </tr>
    );
  };

  return (
    <div className="InspectionPatientList">
      <div className="InspectionPatientList_title">
        환자검색
      </div>
      <div className="InspectionPatientList_1 border">
        <div className="InspectionPatientList_1_1 mb-2">
          <div className="col-4 p-0">
            <input type="date"/>
          </div>
          <div className="col-3 InspectionPatientList_1_2 p-0">
            <button className="button_team2_fill">이동</button>
          </div>
          <div className="row p-0">
            <div className="InspectionPatientList_1_3_1">대기:1명</div>
            <div className="InspectionPatientList_1_3_2">검사:1명</div>
            <div className="InspectionPatientList_1_3_3">완료:3명</div>
          </div>
        </div>
        
        <div>
          <table className="table InspectionPatientList_2_1">
            <thead className="InspectionPatientList_2_2">
              <th></th>
              <th>진료 번호</th>
              <th>환자명</th>
              <th>생년월일</th>
              <th>성별</th>
              <th>검사실</th>
              <th>상태</th>
              <th>의사소통메모</th>
            </thead>
            <tbody>
            <AutoSizer disableHeight>
              {({ width, height }) => {
                return <List width={width} height={500} list={boards} rowCount={boards.length} rowHeight={44} rowRenderer={rowRenderer} overscanRowCount={5} />;
              }}
            </AutoSizer>
          </tbody>
          </table>
        </div>
      </div>
      
    </div>
  );
}

export default InspectionPatientList;