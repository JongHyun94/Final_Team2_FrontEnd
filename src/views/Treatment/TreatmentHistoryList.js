function TreatmentHistoryList(props) {
    return(

       <div className="TreatmentHistoryList">
           <div>
           진료기록
           </div>
        <table border="1" width="500" height="200" >
            <thead>
                <tr className="text-center" bgcolor="lightgrey" bordercolor="white">
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
    );
}
export default TreatmentHistoryList;
