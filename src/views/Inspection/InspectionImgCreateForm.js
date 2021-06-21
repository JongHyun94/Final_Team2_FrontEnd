import { useRef, useState } from "react";

function getInspectionImgResults() {
  const inspectionImgResults = {
    inspectionListCategory: "x-ray",
    inspectionListName: "흉부 촬영",
    inspectionId: "2001",
    inspectionDoctorName: "김더존",
    inspectionInspectorName: "박더존",
    inspectionListLab: "검사실1"
  };
  return inspectionImgResults;
}

function InspectionImgCreateForm(props) {
  const [inspectionImgResult, setInspecctionImgResult] = useState(getInspectionImgResults);

  const inputFile = useRef();

  const inspectionImgResultBtn = (event) => {
    console.log("등록 버튼 클릭");

    event.preventDefault();

    const formData = new FormData();
    formData.append("inspectionId", inspectionImgResult.inspectionId);
    formData.append("iattach", inputFile.current.files[0]);

    // formData 콘솔 찍는 법
    // for (let value of formData.values()) {
    //   console.log(value);
    // }
  };

  return (
    <div className="InspectionImgCreateForm">
      <div className="InspectionImgCreateForm_title">
        검사 결과 등록
      </div>
      <div className="InspectionImgCreateForm_1 border">
        <form onSubmit={inspectionImgResultBtn}>
        <div className="InspectionImgCreateForm_1_1 row">
          <div className="col-6">
            <div className="mb-1">진단검사명 :</div>
            <div className="mb-1">검사명 :</div>
            <div className="mb-1">검사번호 :</div>
            <div className="mb-1">담당의 :</div>
            <div className="mb-1">검사자 :</div>
            <div>검사실 :</div>
          </div>
          <div className="col-6">
            <div className="mb-1">{inspectionImgResult.inspectionListCategory}</div>
            <div className="mb-1">{inspectionImgResult.inspectionListName}</div>
            <div className="mb-1">{inspectionImgResult.inspectionId}</div>
            <div className="mb-1">{inspectionImgResult.inspectionDoctorName}</div>
            <div className="mb-1">{inspectionImgResult.inspectionInspectorName}</div>
            <div>{inspectionImgResult.inspectionListLab}</div>
            <div></div>
          </div>
        </div>
        <div className="InspectionImgCreateForm_1_1_1">
          <div className="col-4">첨부파일 : </div>
          <input name="iattach" type="file" style={{width:"100%"}} ref={inputFile}/>
        </div>
        <div className="InspectionImgCreateForm_1_2">
          <button className="button_team2_fill m-0">등록</button>
        </div>
        </form>
      </div>
    </div>

  );
}

export default InspectionImgCreateForm;