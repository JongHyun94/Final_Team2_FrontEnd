import React, { useState, useEffect } from "react";
import TreatmentHistoryRead from "./components/modal/TreatmentHistoryReadModal";
import { getTreatmentHistoryList } from "apis/treatments";
import moment from "moment";
import Spinner from "components/common/Spinner";
import Nodata from "components/common/NoData";

function TreatmentHistoryList(props) {
  //진료 기록 생성 상태로
  const [treatmentHistoryList, setTreatmentHistoryList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  // spinner 
  const [loading, setLoading] = useState(false);
  //임시 환자 리스트
  var tempPatientlist = {
    treatment_register_id :"",
    treatment_state: "",
    treatment_patient_id: "",
    patient_name: "  ",
    patient_ssn: "",
    patient_sex: "",
    register_communication: "",
    register_starttime: "",
  };

  //대기환자리스트에서 체크된 환자 리스트 가져오기 ->props.checkedpatient == checkedPatientlist
  var checkedPatientlist;
  if (props.checkedpatient) {
    checkedPatientlist = props.checkedpatient;
  } else {
    checkedPatientlist = tempPatientlist;
  }

  //선택된 진료 번호
  const [selectedTreatmentId, setSelectedTreatmentId] = useState("");

  //선택한 진료 번호를 setSelectedTreatmentId 에 저장
  // 해당 진료 번호 선택 => 해당 진료 상세 열기
  const checkedtreatment = (treatment_id) => {
    setSelectedTreatmentId(treatment_id);
    setModalOpen(true);
  };
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };


  const getTreatmentHistoryLists = async (treatment_patient_id) => {
    setLoading(true);
    try{
      var list = await getTreatmentHistoryList(treatment_patient_id);
      // console.log(list.data.historylist);
      setTreatmentHistoryList(list.data.historylist);
    }catch (e){
      console.log(e);
    }finally {
      setLoading(false);
    }

  };
  
  useEffect(() => {
    getTreatmentHistoryLists(checkedPatientlist.treatment_patient_id);
  }, [checkedPatientlist.treatment_patient_id, props]);
  return (
    <div>
      <div className="TreatmentHistoryList_title">
        {checkedPatientlist.patient_name} 님의 진료기록
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
            {loading ? <Spinner /> 
            :
              treatmentHistoryList.length === 0 ?
              <td colSpan="5">
              <React.Fragment>
                <Nodata />
              </React.Fragment>
              </td>
            :
            <>
              {treatmentHistoryList.map((treatmentHistory) => {
                return (
                  <tr className="TreatmentHistoryList_table_tr" key={treatmentHistory.treatment_id} onClick={(event) => checkedtreatment(treatmentHistory.treatment_id)}>
                    <td>
                      <input type="checkbox" checked={selectedTreatmentId === treatmentHistory.treatment_id ? true : false} readOnly />
                    </td>
                    <th>{treatmentHistory.treatment_id}</th>
                    <th>{treatmentHistory.treatment_date}</th>
                    <th>{treatmentHistory.user_name}</th>
                    <th>{treatmentHistory.treatment_communication}</th>
                  </tr>
                );
              })}
               </>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default TreatmentHistoryList;