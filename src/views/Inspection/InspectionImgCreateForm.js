import { useRef, useState } from "react";

function getInspectionImgResults() {
  const inspectionImgResults = {
    inspection_list_category: "x-ray",
    inspection_list_name: "흉부 촬영",
    inspection_id: "2001",
    inspection_doctor_name: "김더존",
    inspection_inspector_name: "박더존",
    inspection_list_lab: "검사실1"
  };
  return inspectionImgResults;
}

function InspectionImgCreateForm(props) {
  const [inspectionImgResult, setInspecctionImgResult] = useState(getInspectionImgResults);
  const [inspectionImg, setInspectionImg] = useState();

  const inputFile = useRef();

  const inspectionImgResultBtn = (event) => {
    console.log("등록 버튼 클릭");

    event.preventDefault();

    const formData = new FormData();
    formData.append("inspection_id", inspectionImgResult.inspection_id);
    formData.append("battach", inputFile.current.files[0]);

    console.log(formData);
  };

  return (
    <div className="InspectionImgCreateForm">
      <div className="InspectionImgCreateForm_title">
        검사 결과 등록
      </div>
      <form onSubmit={inspectionImgResultBtn}>
      <div className="InspectionImgCreateForm_1 border">
        <div className="InspectionImgCreateForm_1_1 row">
          <div className="col-6">
            <div className="mb-1">진단검사명 :</div>
            <div className="mb-1">검사명 :</div>
            <div className="mb-1">검사번호 :</div>
            <div className="mb-1">담당의 :</div>
            <div className="mb-1">검사자 :</div>
            <div className="mb-1">검사실 :</div>
            <div>첨부파일 :</div>
          </div>
          <div className="col-6">
            <div className="mb-1">{inspectionImgResult.inspection_list_category}</div>
            <div className="mb-1">{inspectionImgResult.inspection_list_name}</div>
            <div className="mb-1">{inspectionImgResult.inspection_id}</div>
            <div className="mb-1">{inspectionImgResult.inspection_doctor_name}</div>
            <div className="mb-1">{inspectionImgResult.inspection_inspector_name}</div>
            <div className="mb-1">{inspectionImgResult.inspection_list_lab}</div>
            <div></div>
          </div>
        </div>
        <div className="InspectionImgCreateForm_1_1_1">
          <input name="battach" type="file" style={{width:"100%"}} ref={inputFile}/>
        </div>
        <div className="InspectionImgCreateForm_1_2">
          <button className="button_team2_fill">등록</button>
        </div>
      </div>
      </form>
    </div>
  );
}

export default InspectionImgCreateForm;