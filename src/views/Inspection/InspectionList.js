import { useState } from "react";

function getInspections() {
  const inspections = [];
  for(var i=1; i<20; i++){
    inspections.push({inspection_id:i, inspection_list_category:"Whole Blood", inspection_list_specimen:"EDTA Blood", inspection_list_name:"백혈구 백분율", inspection_result: "", inspection_list_reference: "4000~10000ul", inspection_date: "16:00", inspection_list_container: "EDTA", inspection_doctor_name: "김더존", inspection_inspector_name: "박더존", inspection_list_lab: "검사실1", inspection_state: "대기"});
  }
  return inspections;
}

function InspectionList(props) {
  const [inspections, setInspections] = useState(getInspections);
  //검사결과, 검사상태 state 추가

  const barcodBtn = (event) => {
    //검사결과: 대기 ~> 검사중
    //팝업창
    console.log("바코드 출력 버튼 클릭");
  };

  const cancelBtn = (event) => {
    //검사결과: 검사중 ~> 대기
    console.log("접수 취소 버튼 클릭");
  };

  const excelSaveBtn = (event) => {
    //엑셀 저장
    console.log("엑셀 저장 버튼 클릭");
  };

  const completeBtn = (event) => {
    //검사결과: 대기 ~> 완료
    console.log("검사 완료 버튼 클릭");
  };

  return (
    <div className="InspectionList">
      <div className="InspectionList_title">
        검사 상세 내역
      </div>
      <div className="InspectionList_1 border">
        <div className="InspectionList_1_1">
          <button className="button_team2_fill InspectionList_1_2" onClick={barcodBtn}>바코드 출력</button>
          <button className="button_team2_empty InspectionList_1_2" onClick={cancelBtn}>접수 취소</button>
          <button className="button_team2_fill InspectionList_1_2" onClick={excelSaveBtn}>엑셀 저장</button>
          <button className="button_team2_empty InspectionList_1_2" onClick={completeBtn}>검사 완료</button>
        </div>

        <div className="InspectionList_list">
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
              {inspections.map(inspection => {
                return(
                  <tr>
                    <td key={inspection.inspection_id}>
                      <input type="checkbox"/>
                    </td>
                    <td>{inspection.inspection_list_category}</td>
                    <td>{inspection.inspection_list_specimen}</td>
                    <td>{inspection.inspection_list_name}</td>
                    <td>{inspection.inspection_result}</td>
                    <td>{inspection.inspection_list_reference}</td>
                    <td>{inspection.inspection_date}</td>
                    <td>{inspection.inspection_list_container}</td>
                    <td>{inspection.inspection_doctor_name}</td>
                    <td>{inspection.inspection_inspector_name}</td>
                    <td>{inspection.inspection_list_lab}</td>
                    <td>{inspection.inspection_state}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default InspectionList;