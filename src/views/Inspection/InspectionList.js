function InspectionList(props) {
  return (
    <div className="InspectionList">
      <div className="InspectionList_title">
        검사 상세 내역
      </div>
      <div className="InspectionList_1 border">
        <div className="InspectionList_1_1">
          <button className="button_team2_fill InspectionList_1_2">바코드 출력</button>
          <button className="button_team2_empty InspectionList_1_2">접수 취소</button>
          <button className="button_team2_fill InspectionList_1_2">엑셀 저장</button>
          <button className="button_team2_empty InspectionList_1_2">검사 완료</button>
        </div>

        <div className="dd">
          <table className="table InspectionList_2_1">
            <thead className="InspectionList_2_2">
              <th style={{width: "1%"}}></th>
              <th style={{width: "9%"}}>진단검사명</th>
              <th style={{width: "5%"}}>검체명</th>
              <th style={{width: "20%"}}>검사명</th>
              <th style={{width: "8%"}}>결과</th>
              <th>참고치</th>
              <th style={{width: "9%"}}>검사 시간</th>
              <th style={{width: "7%"}}>용기</th>
              <th style={{width: "7%"}}>담당의</th>
              <th style={{width: "7%"}}>검사자</th>
              <th style={{width: "8%"}}>검사실</th>
              <th style={{width: "7%"}}>상태</th>
            </thead>
            <tbody>
              <tr>
                <td><input type="checkbox"/></td>
                <td>Whole Blood</td>
                <td>EDTA BLood</td>
                <td>백혈구 백분율</td>
                <td></td>
                <td>4000~10000/µL</td>
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
                <td>리튬 치료적 약물농도 감시(Lithium therapeutic drug monitoring)</td>
                <td></td>
                <td>남성 10~71U/L/<br></br>여성 6~42U/L</td>
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default InspectionList;