import "./style.css";

function InspectionPatientList(props) {
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
              <tr>
                <td><input type="checkbox"/></td>
                <td>1312</td>
                <td>김환자</td>
                <td>940606</td>
                <td>M</td>
                <td>검사실1</td>
                <td>대기</td>
                <td>당일검사요청</td>
              </tr>
              <tr>
                <td><input type="checkbox"/></td>
                <td>1312</td>
                <td>김환자</td>
                <td>940606</td>
                <td>M</td>
                <td>검사실1</td>
                <td>대기</td>
                <td>당일검사요청</td>
              </tr>
              <tr>
                <td><input type="checkbox"/></td>
                <td>1312</td>
                <td>김환자</td>
                <td>940606</td>
                <td>M</td>
                <td>검사실1</td>
                <td>대기</td>
                <td>당일검사요청</td>
              </tr>
              <tr>
                <td><input type="checkbox"/></td>
                <td>1312</td>
                <td>김환자</td>
                <td>940606</td>
                <td>M</td>
                <td>검사실1</td>
                <td>대기</td>
                <td>당일검사요청</td>
              </tr>
              <tr>
                <td><input type="checkbox"/></td>
                <td></td>
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
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  );
}

export default InspectionPatientList;