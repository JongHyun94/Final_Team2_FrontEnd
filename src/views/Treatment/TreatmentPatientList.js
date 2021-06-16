import { useState } from "react";
import { AutoSizer, List } from "react-virtualized";

function getBoards() {
  const boards = [];
  for (var i = 50; i >= 1; i--) {
    boards.push({ b1: i, b2: "환자" + i, b3: "910111", b4: "F", b5: "메모" + i, b6: "대기" });
  }
  return boards;
}

function TreatmentPatientList(props) {
  const [boards, setBoards] = useState(getBoards);

  const rowRenderer = ({index, key, style}) => {
    return (
      
        <tr key={key} style={style}>
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
            <input type="date" />
            <button className="button_team2_fill">이동</button>

            <div className="row_1">대기:2명</div>
            <div className="row_2">완료:3명</div>
          </div>
        </div>

        <table className="table table-bordered TreatmentPatientList_table">
          <thead className="TreatmentPatientList_table_thead">
            <tr>
              <th></th>
              <th>접수 번호</th>
              <th>환자명</th>
              <th>생년월일</th>
              <th>성별</th>
              <th>의사소통 메모</th>
              <th>진료 상태</th>
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
