import style from "./style.module.css";

function PatientList(props) {
  return (
    <div className={style.PatientList}>
      <div className={`${style.title}`}>환자 목록</div>
      <div className={`${style.PatientList_content} border`}>
        <div className="mb-2">
          <input type="text" className="col-3" name="" placeholder="이름/생년월일을 입력하세요."></input>
          <button className="button_team2_fill">검색</button>
        </div>
        <table className="table text-center">
          <thead>
            <tr className={`${style.PatientList_Table}`}>
              <th style={{width: "5%"}}></th>
              <th style={{width: "9%"}}>환자 코드</th>
              <th style={{width: "10%"}}>환자명</th>
              <th style={{width: "9%"}}>생년월일</th>
              <th style={{width: "6%"}}>성별</th>
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