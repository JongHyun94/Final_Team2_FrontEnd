import "./style.css";

function InspectionPatientList(props) {
  return (
    <div className="InspectionPatientList">
      <div className="InspectionPatientList_title">
        환자검색
      </div>
      <div className="InspectionPatientList_1">
        <div className="row mb-2 pl-2">
        <div className="col-4 InspectionPatientList_1_1">
          <input type="date"/>
        </div>
        <div className="col-3 InspectionPatientList_1_2">
          <button className="btn btn-sm btn-outline-primary">이동</button>
        </div>
        <div className="row">
          <div className="InspectionPatientList_1_3_1">대기:1명</div>
          <div className="InspectionPatientList_1_3_2">검사중:1명</div>
          <div className="InspectionPatientList_1_3_3">완료:3명</div>
        </div>
        </div>
        
        <div>
          <table className="table table-bordered InspectionPatientList_2_1">
            <thead className="InspectionPatientList_2_2">
              <td></td>
              <td>진료 번호</td>
              <td>환자명</td>
              <td>생년월일</td>
              <td>성별</td>
              <td>검사실</td>
              <td>상태</td>
              <td>의사소통메모</td>
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