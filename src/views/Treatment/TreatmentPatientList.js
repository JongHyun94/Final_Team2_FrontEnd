function TreatmentPatientList(props) {
    return(

       <div className="TreatmentPatientList">
           <div>
           접수완료환자
           </div>
        <div className="row">
            <div className="col-2">
                <input type="text"/>
                <button className="btn btn-primary">이동</button>
            </div>
    
            <div className="row_1">
                대기:2명
            </div>
            <div className="row_2">
                완료:3명
            </div>
 
          
        </div>
        
        <table border="1" width="500" height="200" >
            <thead>
                <tr className="text-center" bgcolor="lightgrey" bordercolor="white">
                    <th>check</th>
                    <th>접수 번호</th>
                    <th>환자명</th>
                    <th>생년월일</th>
                    <th>성별</th>
                    <th>의사소통 메모</th>
                    <th>진료 상태</th>
                </tr>
            </thead>
            <tbody>
                <tr>   
                <td><input type="checkbox"/></td>
                    <td>11111</td>
                    <td>민지현</td>
                    <td>910111</td>
                    <td>M</td>
                    <td></td>
                    <td>대기</td>
                </tr>
                <tr>   
                <td><input type="checkbox"/></td>
                    <td>11111</td>
                    <td>윤서영</td>
                    <td>910111</td>
                    <td>M</td>
                    <td></td>
                    <td>대기</td>
                </tr>
                <tr>   
                <td><input type="checkbox"/></td>
                    <td>11111</td>
                    <td>박빛나</td>
                    <td>910111</td>
                    <td>F</td>
                    <td></td>
                    <td>대기</td>
                </tr>
                <tr>   
                <td><input type="checkbox"/></td>
                    <td>22222</td>
                    <td>이종현</td>
                    <td>910111</td>
                    <td>F</td>
                    <td></td>
                    <td>대기</td>
                </tr>
                <tr>   
                <td><input type="checkbox"/></td>
                    <td></td>
                    <td></td>
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
                    <td></td>
                    <td></td>
                </tr>
                <tr>   
                <td><input type="checkbox"/></td>
                    <td></td>
                    <td></td>
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
                    <td></td>
                    <td></td>
                </tr>
                <tr>   
                <td><input type="checkbox"/></td>
                    <td></td>
                    <td></td>
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
export default TreatmentPatientList;
