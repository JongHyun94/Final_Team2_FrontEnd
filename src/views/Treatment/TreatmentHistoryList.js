import { useState } from "react";
import { AutoSizer, List } from "react-virtualized";


function getTreatmentHistory() {
    const treatmentHistoryList = [];
    for(var i = 10; i >=1; i--){
        treatmentHistoryList.push({index: i, treatmentId:"aed158"+i,treatmentDate:"2021-06-01", treatmentDname:"나의사"+i, treatmentMemo:"메모"+i});
    }
    return treatmentHistoryList;

 
}

function TreatmentHistoryList(props) {
    const [treatmentHistoryList, setTreatmentHistoryList] = useState(getTreatmentHistory);

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
                    {treatmentHistoryList.map(treatmentHistory=>{
                        return(
                    <tr key={treatmentHistory.index}>   
                         <td><input type="checkbox"/></td>
                         <th>{treatmentHistory.treatmentId}</th>
                         <th>{treatmentHistory.treatmentDate}</th>
                         <th>{treatmentHistory.treatmentDname}</th>
                         <th>{treatmentHistory.treatmentMemo}</th>
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
