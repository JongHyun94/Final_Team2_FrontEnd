import style from "./style.module.css";

function PatientList(props) {
  return (
    <div>
      <div className={`${style.title}`}>환자 목록</div>
      <div className={`${style.PatientList} border p-3`}>
        <div>환자 검색</div>
        <div className="mb-2 row p-2">
          <div className="col-sm-6">
            <input type="text" className="form-control" name="" placeholder="이름/생년월일을 입력하세요"></input>
          </div>
          <button className="btn btn-sm btn-info ml-3">검색</button>
        </div>
        <table className="table table-bordered text-center">
          <thead>
            <tr className={`${style.PatientList_Table}`}>
              <th style={{width: "5%"}}></th>
              <th style={{width: "9%"}}>환자 코드</th>
              <th style={{width: "10%"}}>환자명</th>
              <th style={{width: "9%"}}>생년월일</th>
              <th style={{width: "5%"}}>성별</th>
              <th style={{width: "15%"}}>전화번호</th>
              <th>주소</th>
              <th style={{width: "13%"}}>등록 날짜</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="checkbox"></input></td>
              <td>3125322</td>
              <td>홍길동</td>
              <td>910625</td>
              <td>M</td>
              <td>010-1234-5678</td>
              <td>서울시 송파구 아이티벤처타워 12층 1강의실</td>
              <td>2021-06-01</td>
            </tr>
            <tr>
              <td><input type="checkbox"></input></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td><input type="checkbox"></input></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td><input type="checkbox"></input></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td><input type="checkbox"></input></td>
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
  );
}

export default PatientList;