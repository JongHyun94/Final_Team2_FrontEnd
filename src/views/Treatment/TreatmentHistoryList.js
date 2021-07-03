import React, { useState, useEffect } from "react";
import TreatmentHistoryRead from "./components/modal/TreatmentHistoryReadModal";

//진료 기록 생성 하기
function getTreatmentHistory() {
  const createTreatmentHistoryList = [];
  for (var i = 10; i >= 1; i--) {
    createTreatmentHistoryList.push({ patientId: 1, treatmentId: "tt1" + i, treatmentDate: "2021-06-01", treatmentDname: "나의사" + i, treatmentMemo: "메모" + i });
  }
  for (var i = 10; i >= 1; i--) {
    createTreatmentHistoryList.push({ patientId: 2, treatmentId: "tt2" + i, treatmentDate: "2021-06-01", treatmentDname: "나의사" + i, treatmentMemo: "메모" + i });
  }
  for (var i = 10; i >= 1; i--) {
    createTreatmentHistoryList.push({ patientId: 3, treatmentId: "tt3" + i, treatmentDate: "2021-06-01", treatmentDname: "나의사" + i, treatmentMemo: "메모" + i });
  }
  return createTreatmentHistoryList;
}

function TreatmentHistoryList(props) {
  //진료 기록 생성 상태로
  const [treatmentHistoryList, setTreatmentHistoryList] = useState(getTreatmentHistory);
  const [modalOpen, setModalOpen] = useState(false);

  //임시 환자 리스트
  var tempPatientlist = {
    registerId: "",
    patientId: "",
    registerPatientName: "  ",
    patientSsn: "",
    patientSex: "",
    registerMemo: "",
    registerState: "",
  };

  //대기환자리스트에서 체크된 환자 리스트 가져오기 ->props.checkedpatient == checkedPatientlist
  var checkedPatientlist;
  if (props.checkedpatient) {
    checkedPatientlist = props.checkedpatient;
  } else {
    checkedPatientlist = tempPatientlist;
  }

  //가져온 환자 리스트와, 환자 코드가 같은 진료 기록정보리스트 가져오기 (기존 진료 기록 보기) => historyPatient
  const historyPatient = treatmentHistoryList.filter((treatmentHistoryList) => {
    if (treatmentHistoryList.patientId === checkedPatientlist.patientId) {
      return treatmentHistoryList;
    }
  });

  //선택된 진료 번호
  const [selectedTreatmentId, setSelectedTreatmentId] = useState("");

  //선택한 진료 번호를 setSelectedTreatmentId 에 저장
  // 해당 진료 번호 선택 => 해당 진료 상세 열기
  const checkedtreatment = (treatmentId) => {
    setSelectedTreatmentId(treatmentId);
    setModalOpen(true);
  };

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };


  return (
    <div>
      <div className="TreatmentHistoryList_title">
        {checkedPatientlist.registerPatientName} 님의 진료기록
        <React.Fragment>
          {/* TreatmentHistoryRead에 선택한 진료 번호 보내기 selectedTreatmentId */}
          <TreatmentHistoryRead open={modalOpen} close={closeModal} selectedTreatmentId={selectedTreatmentId}></TreatmentHistoryRead>
        </React.Fragment>
      </div>
      <div className="TreatmentHistoryList_border border">
        <div className="TreatmentHistoryList_Totaltable">
          <table className="table TreatmentHistoryList_table">
            <thead className="TreatmentHistoryList_table_thead">
              <tr>
                <th></th>
                <th>진료 번호</th>
                <th>진료 날짜</th>
                <th>담당의</th>
                <th>의사소통 메모</th>
              </tr>
            </thead>
            <tbody>
              {historyPatient.map((treatmentHistory) => {
                return (
                  <tr className="TreatmentHistoryList_table_tr" key={treatmentHistory.treatmentId} onClick={(event) => checkedtreatment(treatmentHistory.treatmentId)}>
                    <td>
                      <input type="checkbox" checked={selectedTreatmentId === treatmentHistory.treatmentId ? true : false} readOnly />
                    </td>
                    <th>{treatmentHistory.treatmentId}</th>
                    <th>{treatmentHistory.treatmentDate}</th>
                    <th>{treatmentHistory.treatmentDname}</th>
                    <th>{treatmentHistory.treatmentMemo}</th>
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
export default TreatmentHistoryList;
