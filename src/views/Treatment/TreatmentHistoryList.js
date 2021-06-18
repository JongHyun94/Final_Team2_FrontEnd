import { useState } from "react";
import { AutoSizer, List } from "react-virtualized";


function getBoards() {
    const boards = [];
    for(var i = 10; i >=1; i--){
        boards.push({b1: i, b2:"aed158"+i,b3:"aed158", b4:"나의사"+i, b5:"메모"+i});
    }
    return boards;

    // return(
    //     [
    //         {bno:1, btitle:"제목1", bcontent:"내용1"},
    //         {bno:2, btitle:"제목2", bcontent:"내용2"},
    //         {bno:3, btitle:"제목3", bcontent:"내용3"},

    //     ]
    // );
}

function TreatmentHistoryList(props) {
    const [boards, setBoards] = useState(getBoards);

    // const rowRenderer = ({index, key, style}) => {
    //     return(
    //     <tr key={key} style={style}>
    //         <td key={boards.b1}>
    //           <input type="checkbox" />
    //         </td>
    //         <td>{boards[index].b1}</td>
    //         <td>{boards[index].b2}</td>
    //         <td>{boards[index].b3}</td>
    //         <td>{boards[index].b4}</td>
    //         <td>{boards[index].b5}</td>
    //     </tr>
    //     );
    // }

    return(

       <div>
           <div className="TreatmentHistoryList_title">
           진료기록
           </div>
           <div className="TreatmentHistoryList_border border">
            <div className="TreatmentHistoryList_Totaltable">
            <table className="table table-bordered TreatmentHistoryList_table">
                <thead className="TreatmentHistoryList_table_thead">
                    <tr>
                        <th></th>
                        <th>진료 번호</th>
                        <th>진료 날짜</th>
                        <th>담당의</th>
                        <th>의사소통 메모</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr>   
                        <td><input type="checkbox"/></td>
                        <td>aed1586</td>
                        <td>2021-06-01</td>
                        <td>나의사</td>
                        <td>당일 검사 요청</td>
                    </tr> */}
                    {boards.map(board=>{
                        return(
                    <tr key={board.b1}>   
                         <td><input type="checkbox"/></td>
                         <th>{board.b2}</th>
                         <th>{board.b3}</th>
                         <th>{board.b4}</th>
                         <th>{board.b5}</th>
                     </tr>
                     );
                })}
                {/* <AutoSizer disableHeight>
                    {({ width, height}) => {
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
export default TreatmentHistoryList;
