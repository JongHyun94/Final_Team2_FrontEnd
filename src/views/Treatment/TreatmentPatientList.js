import { useState } from "react";
// import { AutoSizer, List } from "react-virtualized";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function getBoards() {
  const boards = [];
  for (var i = 10; i >= 1; i--) {
    boards.push({ b1:"aed158"+i, b2: "환자" + i, b3: "910111", b4: "F", b5: "의사 소통 메모" + i, b6: "대기" });
  }
  for (var i = 20; i >= 1; i--) {
    boards.push({ b1:"aed158"+i, b2: "환자" + i, b3: "910111", b4: "F", b5: "의사 소통 메모" + i, b6: "완료" });
  }

  
  return boards;
}

function getState(boards) {
  const state = [];
  var ready = 0;
  var done = 0;

  for(var i=0; i < boards.length; i++ ){
    if(boards[i].b6 == "대기"){
      ready++;
    } else{
      done++;
    }
  }
  state.push(ready); 
  state.push(done); 

  return state;

}



function TreatmentPatientList(props) {
  const [boards, setBoards] = useState(getBoards);

  const [inputdate, setInputdate] = useState(new Date());

  const [state, setState] = useState(() => getState(boards));

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
  //             <td>{boards[index].b2}</td>
  //             <td>{boards[index].b3}</td>
  //             <td>{boards[index].b4}</td>
  //             <td>{boards[index].b5}</td>
  //             <td>{boards[index].b6}</td>
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
        <table className="table table-bordered TreatmentPatientList_table" >
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
              {boards.map(board=>{
                        return(
                    <tr key={board.b1}>   
                         <td><input type="checkbox"/></td>
                         <th>{board.b1}</th>
                         <th>{board.b2}</th>
                         <th>{board.b3}</th>
                         <th>{board.b4}</th>
                         <th>{board.b5}</th>
                         <th>{board.b6}</th>
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
