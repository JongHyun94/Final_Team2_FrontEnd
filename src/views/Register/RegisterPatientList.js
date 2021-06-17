function RegisterPatientList(props) {
  return (
    <div className="RegisterPatientList">
      <div className="RegisterPatientList_header">
        환자 검색
      </div>
      <div className="RegisterPatientList_content border">
        <div className="RegisterPatientList_search mt-1">
          <div className="RegisterPatientList_search_input">
            <input type="text" className="RegisterPatientList_search_input_1" placeholder="이름/생년월일을 입력해 주세요." />
          </div>
          <div className="RegisterPatientList_search_button">
            <button className="button_team2_fill">검색</button>
          </div>
        </div>
        <div className="RegisterPatientList_content_table">
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
              <tr>
                <td><input type="checkbox" /></td>
                <td>326521</td>
                <td>민지현</td>
                <td>020603</td>
                <td>F</td>
                <td>010-1111-1111</td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>326521</td>
                <td>민지현</td>
                <td>020603</td>
                <td>F</td>
                <td>010-1111-1111</td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>326521</td>
                <td>민지현</td>
                <td>020603</td>
                <td>F</td>
                <td>010-1111-1111</td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>326521</td>
                <td>민지현</td>
                <td>020603</td>
                <td>F</td>
                <td>010-1111-1111</td>
              </tr>            <tr>
                <td><input type="checkbox" /></td>
                <td>326521</td>
                <td>민지현</td>
                <td>020603</td>
                <td>F</td>
                <td>010-1111-1111</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default RegisterPatientList;
