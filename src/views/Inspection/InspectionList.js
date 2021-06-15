function InspectionList(props) {
  return (
    <div className="InspectionList">
      <div className="InspectionList_title">
        검사 상세 내역
      </div>
      <div className="InspectionList_1">
        <div className="InspectionList_1_1">
          <button className="btn btn-sm btn-primary InspectionList_1_2">바코드 출력</button>
          <button className="btn btn-sm btn-outline-primary InspectionList_1_2">접수 취소</button>
          <button className="btn btn-sm btn-primary InspectionList_1_2">엑셀 저장</button>
          <button className="btn btn-sm btn-outline-primary InspectionList_1_2">검사 완료</button>
        </div>

        <div>
        <table className="table table-bordered InspectionList_2_1">
          <thead className="InspectionList_2_2">
            <td style={{width: "1%"}}></td>
            <td style={{width: "5%"}}>진단검사명</td>
            <td style={{width: "5%"}}>검체명</td>
            <td style={{width: "10%"}}>검사명</td>
            <td style={{width: "8%"}}>결과</td>
            <td>참고치</td>
            <td style={{width: "3%"}}>검사 시간</td>
            <td style={{width: "3%"}}>검사 용기</td>
            <td style={{width: "10%"}}>담당의</td>
            <td style={{width: "10%"}}>검사자명</td>
            <td style={{width: "12%"}}>검사실</td>
            <td style={{width: "10%"}}>상태</td>
          </thead>
          <tbody>
            <tr>
              <td><input type="checkbox"/></td>
              <td>Whole Blood</td>
              <td>EDTA BLood</td>
              <td>백혈구 백분율</td>
              <td></td>
              <td>4000~1000</td>
              <td>16:00</td>
              <td>EDTA</td>
              <td>김더존</td>
              <td>박더존</td>
              <td>피검사실</td>
              <td>대기중</td>
            </tr>
            <tr>
              <td><input type="checkbox"/></td>
              <td>Whole Blood</td>
              <td>EDTA BLood</td>
              <td>백혈구 백분율</td>
              <td></td>
              <td>4000~1000</td>
              <td>16:00</td>
              <td>EDTA</td>
              <td>김더존</td>
              <td>박더존</td>
              <td>피검사실</td>
              <td>대기중</td>
            </tr>
            <tr>
              <td><input type="checkbox"/></td>
              <td>Whole Blood</td>
              <td>EDTA BLood</td>
              <td>백혈구 백분율</td>
              <td></td>
              <td>4000~1000</td>
              <td>16:00</td>
              <td>EDTA</td>
              <td>김더존</td>
              <td>박더존</td>
              <td>피검사실</td>
              <td>대기중</td>
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

export default InspectionList;