import InspectionBarcodeModal from "./components/modal/InspectionBarcodeModal";
import React, { useEffect, useState } from "react";
import ReactExport from "react-export-excel";
import InspectionListItem from "./InspectionListItem";
import { readInspection } from "apis/inspections";

let inspectionsList = [];

function InspectionList(props) {
  //console.log("검사 상세 내역");
  //console.log(props.treatmentId);
  
  const [inspections, setInspections] = useState(inspectionsList);

  //검사상태: 대기~>검사 을 위한 state
  const [barcodeState, setBarcodeState] = useState(false);
  //검사상태: 검사~>대기 를 위한 state
  const [cancelState, setCancelState] = useState(false);
  //검사상태: ~>완료 를 위한 state
  const [completeState, setCompleteState] = useState(false);

  //검사상태count 를 위한 state (검사상태가 완료인 것 초기값)
  const [iStateCount, setIStateCount] = useState(0);

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

    setIStateCount(completeCount);

    //count 확인 후, 총검사결과: 검사~>완료 바꿀 istate true로 바꿈
    if(inspections.length === iStateCount) {
      props.handleFinish();
      props.publishTopic();
    } else {
      props.handleFinishBack();
    }
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
        container: inspections[i].inspeciton_list_container,
        doctor: inspections[i].inspection_doctor_name,
        inspector: inspections[i].inspeciton_list_container,
        lab: inspections[i].inspection_lab,
      });
    }
    return dataSet;
  }

  useEffect(() => {
    if(props.treatmentId){
      getInspections2(props.treatmentId);
    }
  }, [props]);

  useEffect(() => {
    checkInspections(inspectionsList);
    getCompleteCount();
  }, []);

  const getInspections2 = async (treatmentId) => {
    try {
      const response = await readInspection(treatmentId);
      inspectionsList = response.data.inspectionList;
      setInspections(inspectionsList);
    } catch(error) {
      console.log(error);
    }

    checkInspections(inspectionsList);
  };

  const checkInspections = (inspectionsList) => {
    setInspections(inspectionsList);
  };

  const cancelBtn = () => {
    //검사결과: 검사 ~> 대기
    setCancelState(true);
    props.publishTopic();
  };

  const completeBtn = () => {
    //검사결과: 대기 ~> 완료
    setCompleteState(true);
    props.publishTopic();
  };
  //검사상태count++
  const countIState = () => {
    setIStateCount(iStateCount + 1);
  };

  //바코드출력 모달
  const openModal = () => {
    inspections.find((ins) => {
      if(ins.inspection_id === id){
        if(ins.inspection_list_category === "혈액검사"){
          setModalOpen(true);
          return ins;
        } else {
          setBarcodeState(true);
          props.handleBarcodeCheck();
          props.publishTopic();
          return false;
        }
      }
    })
  };
  const closeCheckModal = () => {
    //모달 안에서 확인버튼
    //검사결과: 대기 ~> 검사
    setModalOpen(false);
    setBarcodeState(true);
    props.handleBarcodeCheck();
    props.publishTopic();
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

  var inspection_list_specimen = " ";
  var inspeciton_list_container = " ";
  var inspection_list_name = " ";
  var patient_name = " ";
  var inspection_inspector_name = " ";
  inspections.find((ins) => {
    if(ins.inspection_id === id){
      inspection_list_specimen = ins.inspection_list_specimen;
      inspeciton_list_container = ins.inspeciton_list_container;
      inspection_list_name = ins.inspection_list_name;
      patient_name = ins.patient_name;
      inspection_inspector_name = ins.inspection_inspector_name;
    }
  })

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
              inspectionListSpecimen={inspection_list_specimen}
              inspectionListContainer={inspeciton_list_container}
              inspectionListName={inspection_list_name}
              patientName={patient_name}
              inspectionInspectorName={inspection_inspector_name}
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
                <th style={{ width: "10%" }}>검사명</th>
                <th style={{ width: "15%" }}>결과</th>
                <th style={{ width: "10" }}>참고치</th>
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