import { TreatmentImgRead } from "./TreatmentImgRead";
import React, { useState } from "react";
import "./TreatmentHistorymodal.css";

function getSOAP() {
  const soap = [{ treatmentId: "1", Subjective: "목 아픔", Objective: "인후염", Assessment: "온열찜질기 실행", Plan: "다음 내원시 Lab test" }];

  return soap;
}

function getInspectionList() {
  const inspectionlists = [
    { inspectionId: "1", inspectionCategory: "혈액검사", inspectionDate: "2021-06-01", inspector: "김검사", inspectionName: "백혈구 백분율", inspectionRef: "4000~10000μL", inspectionResult: "8000" },
    {
      inspectionId: "2",
      inspectionCategory: "혈액검사",
      inspectionDate: "2021-06-01",
      inspector: "김검사",
      inspectionName: "순환기능검사-적혈구량측",
      inspectionRef: "3000~7500/mm3",
      inspectionResult: "6000",
    },
    { inspectionId: "3", inspectionCategory: "혈액검사", inspectionDate: "2021-06-01", inspector: "김검사", inspectionName: "백혈구 백분율", inspectionRef: "12.0~16.0g/dL", inspectionResult: "14" },
    { inspectionId: "4", inspectionCategory: "혈액검사", inspectionDate: "2021-06-01", inspector: "김검사", inspectionName: "백혈구 백분율", inspectionRef: "", inspectionResult: "" },
    { inspectionId: "5", inspectionCategory: "유리검사", inspectionDate: "2021-06-01", inspector: "나꼼꼼", inspectionName: "백혈구 백분율", inspectionRef: "", inspectionResult: "" },
    { inspectionId: "6", inspectionCategory: "영상촬영", inspectionDate: "2021-06-01", inspector: "박사능", inspectionName: "흉부", inspectionRef: "", inspectionResult: "" },
  ];
  return inspectionlists;
}

function getDrugList() {
  const druglists = [
    { drugInjectionDate: "2021-06-01", treatmentDname: "나의사", drugInjectionId: "NIZA15", drugInjectionName: "AXID Cap 150mg", drugInjectionState: "약품" },
    { drugInjectionDate: "2021-06-01", treatmentDname: "나의사", drugInjectionId: "IRES", drugInjectionName: "IRESSA Tab 250mg", drugInjectionState: "약품" },
    { drugInjectionDate: "2021-06-01", treatmentDname: "나의사", drugInjectionId: "ROPIN1", drugInjectionName: "ONIROL Tab 1mg", drugInjectionState: "약품" },
    { drugInjectionDate: "2021-06-01", treatmentDname: "나의사", drugInjectionId: "ROXN", drugInjectionName: "ROXAN Cap 75mg", drugInjectionState: "주사" },
    { drugInjectionDate: "2021-06-01", treatmentDname: "나의사", drugInjectionId: "NIZA16", drugInjectionName: "AXID Cap 150mg", drugInjectionState: "약품" },
    { drugInjectionDate: "2021-06-01", treatmentDname: "나의사", drugInjectionId: "NIZA17", drugInjectionName: "AXID Cap 150mg", drugInjectionState: "약품" },
  ];
  return druglists;
}

function TreatmentHistoryRead(props) {
  //historylist에서 클릭한 진료 번호 가져오기
  const { open, close, selectedTreatmentId } = props;

  const [soap, setSoap] = useState(getSOAP);
  const [inspectionlists, setInspectionlists] = useState(getInspectionList);
  const [img, setImg] = useState("");
  const [druglists, setDrugLists] = useState(getDrugList);

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

  return (
    <div className="TreatmentHistorymodal">
      <div className={open ? "openModal modal" : "modal"}>
        {open ? (
          <section>
            <div className="TreatmentHistoryRead">
              <div className="TreatmentHistoryRead_title"> 진료번호 : {readTreatmentId} . 진료상세 </div>
              <div className="TreatmentHistoryRead_border border">
                <div className="TreatmentHistoryRead_1">
                  <table className="table table-bordered TreatmentHistoryRead_1_table">
                    <tbody>
                      {soap.map((soap) => {
                        return (
                          <tr key={soap.treatmentId}>
                            <th className="text-center border" bgcolor="lightgrey">
                              Subjective
                            </th>
                            {/* <td width="80%">목 아픔</td> */}
                            <td className="text-left" width="80%">
                              {soap.Subjective}
                            </td>
                          </tr>
                        );
                      })}
                      {soap.map((soap) => {
                        return (
                          <tr key={soap.treatmentId}>
                            <th className="text-center border" bgcolor="lightgrey">
                              Objective
                            </th>
                            {/* <td width="80%">인후염</td> */}
                            <td className="text-left" width="80%">
                              {soap.Objective}
                            </td>
                          </tr>
                        );
                      })}
                      {soap.map((soap) => {
                        return (
                          <tr key={soap.treatmentId}>
                            <th className="text-center border" bgcolor="lightgrey">
                              Assessment
                            </th>
                            {/* <td width="80%">온열찜질기 실행</td> */}
                            <td className="text-left" width="80%">
                              {soap.Assessment}
                            </td>
                          </tr>
                        );
                      })}
                      {soap.map((soap) => {
                        return (
                          <tr key={soap.treatmentId}>
                            <th className="text-center border" bgcolor="lightgrey">
                              {" "}
                              Plan
                            </th>
                            {/* <td width="80%">다음 내원시 Lab test</td> */}
                            <td className="text-left" width="80%">
                              {soap.Plan}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="TreatmentHistoryRead_2">
                  <div className="TreatmentHistoryRead_2_title">검사목록</div>

                  <div className="TreatmentHistoryRead_2_Totaltable border">
                    <table className="table TreatmentHistoryRead_2_table">
                      <thead className="TreatmentHistoryRead_2_table_thead">
                        <tr className="TreatmentHistoryRead_2_table_tbody">
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
                            <tr key={inspectionlist.inspectionId}>
                              <td>{inspectionlist.inspectionCategory}</td>
                              <td>{inspectionlist.inspectionDate}</td>
                              <td>{inspectionlist.inspector}</td>
                              <td>{inspectionlist.inspectionName}</td>
                              <td>{inspectionlist.inspectionRef}</td>
                              {inspectionlist.inspectionCategory === "영상촬영" ? (
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
                                      inspectionlistName={inspectionlists[5].inspectionName}
                                      inspectionlistCategory={inspectionlists[5].inspectionCategory}
                                      inspectionTreatmentId="50546"
                                      inspectionDate={inspectionlists[5].inspectionDate}
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
                <div className="TreatmentHistoryRead_3">
                  <div className="TreatmentHistoryRead_3_title">처방목록</div>
                  <div className="TreatmentHistoryRead_3_Totaltable border">
                    <table className="table TreatmentHistoryRead_3_table">
                      <thead className="TreatmentHistoryRead_3_table_thead">
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
                            <tr key={druglist.drugInjectionId}>
                              <th>{druglist.drugInjectionDate}</th>
                              <th>{druglist.treatmentDname}</th>
                              <th>{druglist.drugInjectionId}</th>
                              <th>{druglist.drugInjectionName}</th>
                              <th>{druglist.drugInjectionState}</th>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="TreatmentHistoryReadClose">
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
