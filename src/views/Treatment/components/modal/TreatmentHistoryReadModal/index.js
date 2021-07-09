import { TreatmentImgRead } from "../TreatmentImgReadModal";
import React, { useState, useEffect  } from "react";
// import "./TreatmentHistoryReadModal.css";
import style from "./style.module.css";
import { getTreatmentHistoryRead } from "apis/treatments";

function getSOAP() {
  const soap = [{ treatment_id: "1", treatment_smemo: "목 아픔", treatment_omemo: "인후염", treatment_amemo: "온열찜질기 실행", treatment_pmemo: "다음 내원시 Lab test" }];

  return soap;
}

function getInspectionList() {
  const inspectionlists = [
    { inspection_id: "1", inspection_list_category: "혈액검사", inspection_date: "2021-06-01", user_name: "김검사", inspection_list_name: "백혈구 백분율", inspection_list_reference: "4000~10000μL", inspectionResult: "8000" },
    {
      inspection_id: "2",
      inspection_list_category: "혈액검사",
      inspection_date: "2021-06-01",
      user_name: "김검사",
      inspection_list_name: "순환기능검사-적혈구량측",
      inspection_list_reference: "3000~7500/mm3",
      inspectionResult: "6000",
    },
    { inspection_id: "3", inspection_list_category: "혈액검사", inspection_date: "2021-06-01", user_name: "김검사", inspection_list_name: "백혈구 백분율", inspection_list_reference: "12.0~16.0g/dL", inspectionResult: "14" },
    { inspection_id: "4", inspection_list_category: "혈액검사", inspection_date: "2021-06-01", user_name: "김검사", inspection_list_name: "백혈구 백분율", inspection_list_reference: "", inspectionResult: "" },
    { inspection_id: "5", inspection_list_category: "유리검사", inspection_date: "2021-06-01", user_name: "나꼼꼼", inspection_list_name: "백혈구 백분율", inspection_list_reference: "", inspectionResult: "" },
    { inspection_id: "6", inspection_list_category: "영상촬영", inspection_date: "2021-06-01", user_name: "박사능", inspection_list_name: "흉부", inspection_list_reference: "", inspectionResult: "" },
  ];
  return inspectionlists;
}

function getDrugList() {
  const druglists = [
    { treatment_date: "2021-06-01", user_name: "나의사", drug_injection_drug_injection_list_id: "NIZA15", drug_injection_list_name: "AXID Cap 150mg", drug_injection_list_category: "약품" },
    { treatment_date: "2021-06-01", user_name: "나의사", drug_injection_drug_injection_list_id: "IRES", drug_injection_list_name: "IRESSA Tab 250mg", drug_injection_list_category: "약품" },
    { treatment_date: "2021-06-01", user_name: "나의사", drug_injection_drug_injection_list_id: "ROPIN1", drug_injection_list_name: "ONIROL Tab 1mg", drug_injection_list_category: "약품" },
    { treatment_date: "2021-06-01", user_name: "나의사", drug_injection_drug_injection_list_id: "ROXN", drug_injection_list_name: "ROXAN Cap 75mg", drug_injection_list_category: "주사" },
    { treatment_date: "2021-06-01", user_name: "나의사", drug_injection_drug_injection_list_id: "NIZA16", drug_injection_list_name: "AXID Cap 150mg", drug_injection_list_category: "약품" },
    { treatment_date: "2021-06-01", user_name: "나의사", drug_injection_drug_injection_list_id: "NIZA17", drug_injection_list_name: "AXID Cap 150mg", drug_injection_list_category: "약품" },
  ];
  return druglists;
}

function TreatmentHistoryRead(props) {
  //historylist에서 클릭한 진료 번호 가져오기
  const { open, close, selectedTreatmentId } = props;

  const [soap, setSoap] = useState([]);
  const [inspectionlists, setInspectionlists] = useState([]);
  const [druglists, setDrugLists] = useState([]);
  
  const [img, setImg] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  var tempTreatmentId = "";
  var readTreatmentId;
  if (selectedTreatmentId) {
    readTreatmentId = selectedTreatmentId;
  } else {
    readTreatmentId = tempTreatmentId;
  }

  const getTreatmentHistoryReads = async (treatment_id) =>{
    try{
      var list = await getTreatmentHistoryRead(treatment_id);
      setSoap(list.data.treatmentSoaplist);
      setInspectionlists(list.data.treatmentInspectionlist);
      setDrugLists(list.data.treatmentDrugsInjectionlist);
    }catch (e){
      console.log(e);
    }
  }
  useEffect(() => {
    //console.log("asasasas",checkedPatientlist.treatment_patient_id);
    getTreatmentHistoryReads(readTreatmentId);
  }, [props, readTreatmentId]);


  return (
    <div className={style.TreatmentHistorymodal}>
      <div className={open ? `${style.openModal} ${style.modal}`:`${style.modal}`} >
        {open ? (
          <section>
            <div className={style.TreatmentHistoryRead}>
              <div className={style.TreatmentHistoryRead_title}> 진료번호 : {readTreatmentId} . 진료상세 </div>
              <div className={`${style.TreatmentHistoryRead_border} border`}>
                <div className={style.TreatmentHistoryRead_1}>
                <table className={`${style.TreatmentHistoryRead_1_table} table table-bordered`}>
                    <tbody>
                      {soap.map((soap) => {
                        return (
                          <tr key={soap.treatment_id}>
                            <th className={`text-center border`} bgcolor="lightgrey">
                            Subjective
                            </th>
                            {/* <td width="80%">목 아픔</td> */}
                            <td className={`text-left`} width="80%">
                              {soap.treatment_smemo}
                            </td>
                          </tr>
                        );
                      })}
                      {soap.map((soap) => {
                        return (
                          <tr key={soap.treatment_id}>
                            <th className={`text-center border`} bgcolor="lightgrey">
                            Objective
                            </th>
                            {/* <td width="80%">인후염</td> */}
                            <td className={`text-left`} width="80%">
                              {soap.treatment_omemo}
                            </td>
                          </tr>
                        );
                      })}
                      {soap.map((soap) => {
                        return (
                          <tr key={soap.treatment_id}>
                            <th className={`text-center border`} bgcolor="lightgrey">
                              Assessment
                            </th>
                            {/* <td width="80%">온열찜질기 실행</td> */}
                            <td className={`text-left`} width="80%">
                              {soap.treatment_amemo}
                            </td>
                          </tr>
                        );
                      })}
                      {soap.map((soap) => {
                        return (
                          <tr key={soap.treatment_id}>
                            <th className={`text-center border`} bgcolor="lightgrey">
                              {" "}
                              Plan
                            </th>
                            {/* <td width="80%">다음 내원시 Lab test</td> */}
                            <td className={`text-left`} width="80%">
                              {soap.treatment_pmemo}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div className={style.TreatmentHistoryRead_2}>
                  <div className={style.TreatmentHistoryRead_2_title}>검사목록</div>
                  <div className={`${style.TreatmentHistoryRead_2_Totaltable} border`}>
                  <table className={`${style.TreatmentHistoryRead_2_table} table table-bordered`}>
                    
                      <thead className={style.TreatmentHistoryRead_2_table_thead}>
                        <tr className={style.TreatmentHistoryRead_2_table_tbody}>
                          <th>진단검사명</th>
                          <th>검사 날짜</th>
                          <th>검사자</th>
                          <th>검사명</th>
                          <th>참고치</th>
                          <th>검사 결과</th>
                        </tr>
                      </thead>
                      <tbody>
                        {inspectionlists.map((inspectionlist) => {
                          return (
                            <tr key={inspectionlist.inspection_id}>
                              <td>{inspectionlist.inspection_list_category}</td>
                              <td>{inspectionlist.inspection_date}</td>
                              <td>{inspectionlist.user_name}</td>
                              <td>{inspectionlist.inspection_list_name}</td>
                              <td>{inspectionlist.inspection_list_reference}</td>
                              {inspectionlist.inspection_list_category === "영상촬영" ? (
                                <td>
                                  <React.Fragment>
                                    {" "}
                                    <button className="button_team2_empty" onClick={openModal}>
                                      보기
                                    </button>
                                    <TreatmentImgRead
                                      open={modalOpen}
                                      close={closeModal}
                                      inspectionImg="xray01.jpg"
                                      inspectionlistName={inspectionlists[5].inspection_list_name}
                                      inspectionlistCategory={inspectionlists[5].inspection_list_category}
                                      inspectionTreatmentId="50546"
                                      inspection_date={inspectionlists[5].inspection_date}
                                    >
                                      모달 내용
                                    </TreatmentImgRead>
                                  </React.Fragment>
                                </td>
                              ) : (
                                <td>{inspectionlist.inspectionResult}</td>
                              )}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className={style.TreatmentHistoryRead_3}>
                  <div className={style.TreatmentHistoryRead_3_title}>처방목록</div>
                  <div className={`${style.TreatmentHistoryRead_3_Totaltable} border`}>
                  <table className={`${style.TreatmentHistoryRead_3_table} table`}>
                      <thead className={style.TreatmentHistoryRead_3_table_thead}>
                        <tr>
                          <th>처방 날짜</th>
                          <th>담당의</th>
                          <th>약품/주사코드</th>
                          <th>약품/주사명</th>
                          <th>구분</th>
                        </tr>
                      </thead>
                      <tbody>
                        {druglists.map((druglist) => {
                          return (
                            <tr key={druglist.drug_injection_drug_injection_list_id}>
                              <th>{druglist.treatment_date}</th>
                              <th>{druglist.user_name}</th>
                              <th>{druglist.drug_injection_drug_injection_list_id}</th>
                              <th>{druglist.drug_injection_list_name}</th>
                              <th>{druglist.drug_injection_list_category}</th>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className={style.TreatmentHistoryReadClose}>
                <button className="button_team2_fill" onClick={close}>
                  {" "}
                  확인
                </button>
              </div>
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
}
export default TreatmentHistoryRead;
