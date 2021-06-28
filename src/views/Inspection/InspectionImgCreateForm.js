import { useRef, useState } from "react";
import "./InspectionImgCreateModal.css";

function getInspectionImgResults() {
  const inspectionImgResults = {
    inspectionListCategory: "영상검사",
    inspectionListSpecimen: "x-ray",
    inspectionListName: "흉부촬영",
    inspectionId: "2001",
    inspectionDoctorName: "김더존",
    inspectionInspectorName: "박더존",
    inspectionListLab: "검사실1",
  };
  return inspectionImgResults;
}

function InspectionImgCreateForm(props) {
  const [inspectionImgResult, setInspecctionImgResult] = useState(getInspectionImgResults);

  const { open, closeR, close } = props;

  const inputFile = useRef();
  // const inputFile2 = useRef();
  // const inputFile3 = useRef();

  const inspectionImgResultBtn = (event) => {
    event.preventDefault();

    // console.log(inputFile.current.files.length);

    const formData = new FormData();
    formData.append("inspectionId", inspectionImgResult.inspectionId);
    for(var i=0; i<=inputFile.current.files.length-1; i++){
      formData.append("iattach", inputFile.current.files[i]);
    }

    // formData 콘솔 찍는 법
    // for (let value of formData.values()) {
    //   console.log(value);
    // }

    closeR();
  };

  return (
    <div className="InspectionImgCreateModal">
      <div className={open ? "openModal modal" : "modal"}>
        {open ? (
          <section>
            <div className="InspectionImgCreateForm">
              <div className="InspectionImgCreateForm_title m-2">검사 결과 등록</div>
              <div className="InspectionImgCreateForm_1 border">
                <form>
                  <div className="InspectionImgCreateForm_1_1 mt-3 mb-3">
                    <div className="InspectionImgCreateForm_1_1_1 mr-3">
                      <div className="mb-1">진단검사명 :</div>
                      <div className="mb-1">검체명 :</div>
                      <div className="mb-1">검사명 :</div>
                      <div className="mb-1">검사번호 :</div>
                      <div className="mb-1">담당의 :</div>
                      <div className="mb-1">검사자 :</div>
                      <div className="mb-1">검사실 :</div>
                      <div>첨부파일 : </div>
                      <div></div>
                      <div></div>
                    </div>
                    <div className="InspectionImgCreateForm_1_1_2">
                      <div className="mb-1">{inspectionImgResult.inspectionListCategory}</div>
                      <div className="mb-1">{inspectionImgResult.inspectionListSpecimen}</div>
                      <div className="mb-1">{inspectionImgResult.inspectionListName}</div>
                      {/* <div className="mb-1">{inspectionImgResult.inspectionId}</div> */}
                      <div className="mb-1">{props.id}</div>
                      <div className="mb-1">{inspectionImgResult.inspectionDoctorName}</div>
                      <div className="mb-1">{inspectionImgResult.inspectionInspectorName}</div>
                      <div className="mb-1">{inspectionImgResult.inspectionListLab}</div>
                      <div className="mb-1"><input name="iattach" type="file" multiple style={{ width: "100%" }} ref={inputFile} /></div>
                      {/* <div className="mb-1"><input name="iattach2" type="file" style={{ width: "100%" }} ref={inputFile2} /></div> */}
                      {/* <div className="mb-1"><input name="iattach3" type="file" style={{ width: "100%" }} ref={inputFile3} /></div> */}
                    </div>
                  </div>
                  <div className="InspectionImgCreateForm_1_2 mb-3">
                    <button type="submit" className="button_team2_fill m-0" onClick={inspectionImgResultBtn}>등록</button>
                    <button className="button_team2_empty" onClick={close}>닫기</button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
}

export default InspectionImgCreateForm;
