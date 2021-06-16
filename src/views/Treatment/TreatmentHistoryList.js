
function TreatmentHistoryList(props) {
    return(

       <div>
           <div className="TreatmentHistoryList_title">
           진료기록
           </div>
           <div className="TreatmentHistoryList_border">

            <table className="table table-bordered TreatmentHistoryList_table">
                <thead className="TreatmentHistoryList_table_thead">
                    <tr>
                        <th>check</th>
                        <th>진료 번호</th>
                        <th>진료 날짜</th>
                        <th>담당의</th>
                        <th>의사소통 메모</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>   
                        <td><input type="checkbox"/></td>
                        <td>aed1586</td>
                        <td>2021-06-01</td>
                        <td>나의사</td>
                        <td>당일 검사 요청</td>
                    </tr>
                    <tr>   
                        <td><input type="checkbox"/></td>
                        <td>aed1402</td>
                        <td>2021-05-28</td>
                        <td>나의사</td>
                        <td></td>
                    </tr>
                    <tr>   
                    <td><input type="checkbox"/></td>
                        <td>aed1586</td>
                        <td>2021-06-01</td>
                        <td>나의사</td>
                        <td>당일 검사 요청</td>
                    </tr>
                    <tr>   
                    <td><input type="checkbox"/></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>   
                    <td><input type="checkbox"/></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>   
                    <td><input type="checkbox"/></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>   
                    <td><input type="checkbox"/></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>   
                    <td><input type="checkbox"/></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div> 
    );
}
export default TreatmentHistoryList;
