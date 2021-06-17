import { useState } from "react";

function getInspectionResults() {
  const inspectionResults = {
    inspection_list_category: "x-ray",
    inspection_list_name: "흉부 촬영",
    inspection_id: "2001",
    inspection_doctor_name: "김더존",
    inspection_inspector_name: "박더존",
    inspection_list_lab: "검사실1"
  };
  return inspectionResults;
}

function InspectionCreateForm(props) {
  const [inspectionResult, setInspecctionResult] = useState(getInspectionResults);

  const handleResultChange = (event) => {
    setInspecctionResult({
      ...inspectionResult,
      inspection_result: event.target.value
    });
  };

  const inspectionResultBtn = (event) => {
    console.log("등록 버튼 클릭");
  };

  return (
    <div className="InspectionCreateForm">
      <div className="InspectionCreateForm_title">
        검사 결과 등록
      </div>
      <div className="InspectionCreateForm_1 border">
        <div className="InspectionCreateForm_1_1 row">
          <div className="col-6">
            <div className="mb-1">진단검사명 :</div>
            <div className="mb-1">검사명 :</div>
            <div className="mb-1">검사번호 :</div>
            <div className="mb-1">담당의 :</div>
            <div className="mb-1">검사자 :</div>
            <div className="mb-1">검사실 :</div>
            <div>결과 :</div>
          </div>
          <div className="col-6">
            <div className="mb-1">{inspectionResult.inspection_list_category}</div>
            <div className="mb-1">{inspectionResult.inspection_list_name}</div>
            <div className="mb-1">{inspectionResult.inspection_id}</div>
            <div className="mb-1">{inspectionResult.inspection_doctor_name}</div>
            <div className="mb-1">{inspectionResult.inspection_inspector_name}</div>
            <div className="mb-1">{inspectionResult.inspection_list_lab}</div>
            <div><input type="text" onChange={handleResultChange} style={{width:"100%"}}/></div>
          </div>
        </div>
        <div className="InspectionCreateForm_1_2">
          <button className="button_team2_fill" onClick={inspectionResultBtn}>등록</button>
        </div>
      </div>
      
    </div>
  );
}

export default InspectionCreateForm;