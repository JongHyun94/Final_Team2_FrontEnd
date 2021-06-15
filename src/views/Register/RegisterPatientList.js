function RegisterPatientList(props) {
  return (
    <div className="RegisterPatientList">
      <div className="RegisterPatientList_header">
        <h3>환자 검색</h3>
      </div>
      <div className="RegisterPatientList_search">
        <div>
          <input type="text" placeholder="이름/생년월일을 입력해 주세요." width="80%"/>
        </div>
        <div>
          <button className="btn btn-primary btn-sm">환자 검색</button>
        </div>
      </div>
      <div className="RegisterPatientList_contnet">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>환자 코드</th>
              <th>환자명</th>
              <th>생년월일</th>
              <th>성별</th>
              <th>전화번호</th>
            </tr>
          </thead>
          <tbody>
            <td><input type="checkbox"/></td>
            <td>326521</td>
            <td>민지현</td>
            <td>020603</td>
            <td>F</td>
            <td>010-1111-1111</td>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default RegisterPatientList;
