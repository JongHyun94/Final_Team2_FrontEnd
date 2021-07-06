import InspectionBarcodeModal from "./components/modal/InspectionBarcodeModal";
import React, { useEffect, useState } from "react";
import ReactExport from "react-export-excel";
import InspectionListItem from "./InspectionListItem";
import { readInspection } from "apis/inspections";

// const inspections = [];
function getInspections() {
  const inspections = [];
  for (var i = 1; i <= 2; i++) {
    inspections.push({
      inspectionId: i,
      inspectionListCategory: "혈액검사",
      inspectionListSpecimen: "EDTA Blood",
      inspectionListName: "백혈구 백분율",
      inspectionResult: "4500",
      inspectionListReference: "4000~10000ul",
      inspectionDate: "16:00",
      inspectionListContainer: "EDTA",
      inspectionDoctorName: "김더존",
      inspectionInspectorName: "",
      inspectionListLab: "검사실1",
      inspectionState: "검사",
    });
  }
  for (var i = 3; i <= 4; i++) {
    inspections.push({
      inspectionId: i,
      inspectionListCategory: "혈액검사",
      inspectionListSpecimen: "EDTA Blood",
      inspectionListName: "백혈구 백분율",
      inspectionResult: "",
      inspectionListReference: "4000~10000ul",
      inspectionDate: "16:00",
      inspectionListContainer: "EDTA",
      inspectionDoctorName: "김더존",
      inspectionInspectorName: "이검사",
      inspectionListLab: "검사실1",
      inspectionState: "대기",
    });
  }
  for (var i = 5; i <= 6; i++) {
    inspections.push({
      inspectionId: i,
      inspectionListCategory: "영상검사",
      inspectionListSpecimen: "x-ray",
      inspectionListName: "흉부촬영",
      inspectionResult: "img",
      inspectionListReference: "",
      inspectionDate: "17:00",
      inspectionListContainer: "",
      inspectionDoctorName: "김더존",
      inspectionInspectorName: "이검사",
      inspectionListLab: "검사실2",
      inspectionState: "완료",
    });
  }
  for (var i = 7; i <= 8; i++) {
    inspections.push({
      inspectionId: i,
      inspectionListCategory: "영상검사",
      inspectionListSpecimen: "x-ray",
      inspectionListName: "흉부촬영",
      inspectionResult: "",
      inspectionListReference: "",
      inspectionDate: "17:00",
      inspectionListContainer: "",
      inspectionDoctorName: "김더존",
      inspectionInspectorName: "이검사",
      inspectionListLab: "검사실2",
      inspectionState: "대기",
    });
  }
  return inspections;
}

let inspectionsList = [];

function InspectionList(props) {
  console.log("검사 상세 내역");
  console.log(props.treatmentId);
  
  const [inspections, setInspections] = useState(inspectionsList);

  //검사상태: 대기~>검사 을 위한 state
  const [barcodeState, setBarcodeState] = useState(false);
  //검사상태: 검사~>대기 를 위한 state
  const [cancelState, setCancelState] = useState(false);
  //검사상태: ~>완료 를 위한 state
  const [completeState, setCompleteState] = useState(false);

  //검사상태count 를 위한 state (검사상태가 완료인 것 초기값)
  const [iStateCount, setIStateCount] = useState(getCompleteCount);

  // 모달 상태(open일 떄 true로 바뀌어 열림)
  const [modalOpen, setModalOpen] = useState(false);

  //검사번호 비교를 위한 상태
  const [id, setId] = useState("");

  function getCompleteCount() {
    let completeCount = 0;
    for (var i = 0; i <= inspections.length - 1; i++) {
      if (inspections[i].inspection_state === "완료") {
        completeCount++;
      }
    }
    return completeCount;
  }
  
  const ExcelFile = ReactExport.ExcelFile;
  const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
  const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
  let dataSet = [];
  function getDataSet() {
    for(var i=0; i<= inspections.length-1; i++){
      dataSet.push({
        category: inspections[i].inspection_list_category,
        specimen: inspections[i].inspection_list_specimen,
        name: inspections[i].inspection_list_name,
        result: inspections[i].inspection_result,
        reference: inspections[i].inspection_list_reference,
        date: inspections[i].inspection_date,
        container: inspections[i].inspection_list_container,
        doctor: inspections[i].inspection_doctor_name,
        inspector: inspections[i].inspction_inspector_name,
        lab: inspections[i].inspection_lab,
      });
    }
    return dataSet;
  }

  useEffect(() => {
    getInspections2(props.treatmentId)
    if (inspections.length === iStateCount) {
      props.handleFinish();
    }
  });

  const getInspections2 = async (treatmentId) => {
    try {
      const response = await readInspection(treatmentId);
      inspectionsList = response.data.insepctionList;
      setInspections(inspectionsList);
    } catch(error) {
      console.log(error);
    }
  };

  const cancelBtn = () => {
    //검사결과: 검사 ~> 대기
    setCancelState(true);
  };

  const completeBtn = () => {
    //검사결과: 대기 ~> 완료
    setCompleteState(true);
  };
  //검사상태count++
  const countIState = () => {
    setIStateCount(iStateCount + 1);
  };

  //바코드출력 모달
  const openModal = () => {
    if(inspections[id-1].inspectionListCategory === "혈액검사"){
      setModalOpen(true);
    } else {
      setBarcodeState(true);
      props.handleBarcodeCheck();
    }
  };
  const closeCheckModal = () => {
    //모달 안에서 확인버튼
    //검사결과: 대기 ~> 검사
    setModalOpen(false);
    setBarcodeState(true);
    props.handleBarcodeCheck();
  };
  const closeCancelModal = () => {
    setModalOpen(false);
  };

  //검사 체크(선택)
  const handleChecked = (inspectionId) => {
    setId(inspectionId);
  };

  //검사상태: 대기~>검사 바꾼 후 state 원래대로
  const handleBarcode = () => {
    setBarcodeState(false);
  };

  //검사상태: 검사~>대기 바꾼 후 state 원래대로
  const handleCancel = () => {
    setCancelState(false);
  };

  //검사상태: ~>완료 바꾼 후 state 원래대로 + 총검사상태count
  const handleComplete = () => {
    setCompleteState(false);
  };

  const handleExcel = () => {
    dataSet = [];
  };

  return (
    <div className="InspectionList">
      <div className="InspectionList_title">검사 상세 내역</div>
      <div className="InspectionList_1 border">
        <div className="InspectionList_1_1">
          <React.Fragment>
            <button className="button_team2_fill InspectionList_1_2" onClick={openModal}>
              검사 시작
            </button>
            <InspectionBarcodeModal
              id={id}
              tid={props.treatmentId}
              open={modalOpen}
              closeCheck={closeCheckModal}
              closeCancel={closeCancelModal}
              barcodeImg="barcode01.png"
              inspectionListSpecimen="EDTA Blood"
              inspectionListContainer="EDTA"
              inspectionListName="백혈구 백분율"
              patientName="김환자"
              inspectionInspectorName="이검사"
            />
          </React.Fragment>
          <button className="button_team2_empty InspectionList_1_2" onClick={cancelBtn}>
            검사 취소
          </button>
          
          <ExcelFile element={<button className="button_team2_fill InspectionList_1_2" onClick={handleExcel}>엑셀 저장</button>}>
            <ExcelSheet data={getDataSet} name="inspectionsExcel">
              <ExcelColumn label="진단검사명" value="category" />
              <ExcelColumn label="검체명" value="specimen" />
              <ExcelColumn label="검사명" value="name" />
              <ExcelColumn label="결과" value="result" />
              <ExcelColumn label="참고치" value="reference" />
              <ExcelColumn label="검사시간" value="date" />
              <ExcelColumn label="용기" value="container" />
              <ExcelColumn label="담당의" value="doctor" />
              <ExcelColumn label="검사자" value="inspector" />
              <ExcelColumn label="검사실" value="lab" />
            </ExcelSheet>
          </ExcelFile>
          
          <button className="button_team2_empty InspectionList_1_2" onClick={completeBtn}>
            검사 완료
          </button>
        </div>

        <div className="InspectionList_list ">
          <table className="table InspectionList_2_1" style={{height:"10px"}}>
            <thead className="InspectionList_2_2">
              <tr>
                <th style={{ width: "1%" }}></th>
                <th style={{ width: "9%" }}>진단검사명</th>
                <th style={{ width: "10%" }}>검체명</th>
                <th style={{ width: "20%" }}>검사명</th>
                <th style={{ width: "15%" }}>결과</th>
                <th>참고치</th>
                <th style={{ width: "9%" }}>검사 시간</th>
                <th style={{ width: "7%" }}>용기</th>
                <th style={{ width: "7%" }}>담당의</th>
                <th style={{ width: "7%" }}>검사자</th>
                <th style={{ width: "8%" }}>검사실</th>
                <th style={{ width: "7%" }}>상태</th>
              </tr>
            </thead>
            <tbody>
              {inspections.map((inspection) => {
                return (
                  <InspectionListItem
                    key={inspection.inspection_id}
                    inspection={inspection}
                    id={id}
                    handleChecked={(inspectionId) => handleChecked(inspectionId)}
                    barcode={barcodeState}
                    handleBarcode={handleBarcode}
                    cancel={cancelState}
                    handleCancel={handleCancel}
                    complete={completeState}
                    handleComplete={handleComplete}
                    countIState={countIState}
                  />
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
