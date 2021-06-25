import { InspectionBarcodePop } from "./InspectionBarcodePop";
import React, { useEffect, useState } from "react";
import InspectionListItem from "./InspectionListItem";

function getInspections() {
  const inspections = [];
  for(var i=1; i<=3; i++){
    inspections.push({inspectionId:i, inspectionListCategory:"혈액검사", inspectionListSpecimen:"EDTA Blood", inspectionListName:"백혈구 백분율", inspectionResult: "4500", inspectionListReference: "4000~10000ul", inspectionDate: "16:00", inspectionListContainer: "EDTA", inspectionDoctorName: "김더존", inspectionInspectorName: "박더존", inspectionListLab: "검사실1", inspectionState: "검사중"});
  }
  for(var i=4; i<=6; i++){
    inspections.push({inspectionId:i, inspectionListCategory:"혈액검사", inspectionListSpecimen:"EDTA Blood", inspectionListName:"백혈구 백분율", inspectionResult: "", inspectionListReference: "4000~10000ul", inspectionDate: "16:00", inspectionListContainer: "EDTA", inspectionDoctorName: "김더존", inspectionInspectorName: "박더존", inspectionListLab: "검사실1", inspectionState: "대기"});
  }
  for(var i=7; i<=9; i++){
    inspections.push({inspectionId:i, inspectionListCategory:"영상검사", inspectionListSpecimen:"x-ray", inspectionListName:"흉부촬영", inspectionResult: "img", inspectionListReference: "", inspectionDate: "17:00", inspectionListContainer: "", inspectionDoctorName: "김더존", inspectionInspectorName: "이더존", inspectionListLab: "검사실2", inspectionState: "완료"});
  }
  for(var i=10; i<=12; i++){
    inspections.push({inspectionId:i, inspectionListCategory:"영상검사", inspectionListSpecimen:"x-ray", inspectionListName:"흉부촬영", inspectionResult: "", inspectionListReference: "", inspectionDate: "17:00", inspectionListContainer: "", inspectionDoctorName: "김더존", inspectionInspectorName: "이더존", inspectionListLab: "검사실2", inspectionState: "대기"});
  }
  return inspections;
}

function InspectionList(props) {
  console.log("검사 상세 내역");
  console.log(props.treatmentId);

  const [inspections, setInspections] = useState(getInspections);

  //검사상태: 대기~>검사중 을 위한 state
  const [barcodeState, setBarcodeState] = useState(false);
  //검사상태: 검사중~>대기 를 위한 state
  const [cancelState, setCancelState] = useState(false);
  //검사상태: ~>완료 를 위한 state
  const [completeState, setCompleteState] = useState(false);

  //검사상태count 를 위한 state
  const [iStateCount, setIStateCount] = useState(0);

  // 모달 상태(open일 떄 true로 바뀌어 열림)
  const [modalOpen, setModalOpen] = useState(false);

  //검사번호 비교를 위한 상태
  const [id, setId] = useState("");

  useEffect(() => {
    setInspections(inspections);
  }, [inspections]);

  const cancelBtn = (event) => {
    //검사결과: 검사중 ~> 대기
    setCancelState(true);
  };

  const excelSaveBtn = (event) => {
    //엑셀 저장
    console.log("엑셀 저장 버튼 클릭");
  };

  const completeBtn = (event) => {
    //검사결과: 대기 ~> 완료
    setCompleteState(true);
    //검사상태count ++
  };

  //바코드출력 모달
  const openModal = () => {
    setModalOpen(true);
  };
  const closeCheckModal = () => {
    //모달 안에서 확인버튼
    //검사결과: 대기 ~> 검사중
    setModalOpen(false);
    setBarcodeState(true);
    props.handleBarcodeChekck();
  }
  const closeCancelModal = () => {
    setModalOpen(false);
  }

  //검사 체크(선택)
  const handleChecked = (inspectionId) => {
    setId(inspectionId);
  };
  
  //검사상태: 대기~>검사중 바꾼 후 state 원래대로
  const handleBarcode = () => {
    setBarcodeState(false);
  };

  //검사상태: 검사중~>대기 바꾼 후 state 원래대로
  const handleCancel = () => {
    setCancelState(false);
  };

  //검사상태: ~>완료 바꾼 후 state 원래대로 + 총검사상태count
  const handleComplete = () => {
    setCompleteState(false);
  };

  return (
    <div className="InspectionList">
      <div className="InspectionList_title">
        검사 상세 내역
      </div>
      <div className="InspectionList_1 border">
        <div className="InspectionList_1_1">
          <React.Fragment>
            <button className="button_team2_fill InspectionList_1_2" onClick={openModal}>바코드 출력</button>
            <InspectionBarcodePop id={id} open={modalOpen} closeCheck={closeCheckModal} closeCancel={closeCancelModal} barcodeImg="barcode01.png" inspectionListName={inspections[0].inspectionListName} patientName="김환자" inspectionInspectorName={inspections[0].inspectionInspectorName}/>
          </React.Fragment>  
          <button className="button_team2_empty InspectionList_1_2" onClick={cancelBtn}>검사 취소</button>
          <button className="button_team2_fill InspectionList_1_2" onClick={excelSaveBtn}>엑셀 저장</button>
          <button className="button_team2_empty InspectionList_1_2" onClick={completeBtn}>검사 완료</button>
        </div>

        <div className="InspectionList_list">
          <table className="table InspectionList_2_1">
            <thead className="InspectionList_2_2">
              <tr>
                <th style={{width: "1%"}}></th>
                <th style={{width: "9%"}}>진단검사명</th>
                <th style={{width: "5%"}}>검체명</th>
                <th style={{width: "20%"}}>검사명</th>
                <th style={{width: "20%"}}>결과</th>
                <th>참고치</th>
                <th style={{width: "9%"}}>검사 시간</th>
                <th style={{width: "7%"}}>용기</th>
                <th style={{width: "7%"}}>담당의</th>
                <th style={{width: "7%"}}>검사자</th>
                <th style={{width: "8%"}}>검사실</th>
                <th style={{width: "7%"}}>상태</th>
              </tr>
            </thead>
            <tbody>
              {inspections.map(inspection => {
                return(
                  <InspectionListItem key={inspection.inspectionId} inspection={inspection} id={id} handleChecked={(inspectionId) => handleChecked(inspectionId)} 
                                      barcode={barcodeState} handleBarcode={handleBarcode} cancel={cancelState} handleCancel={handleCancel} complete={completeState} handleComplete={handleComplete}/>
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