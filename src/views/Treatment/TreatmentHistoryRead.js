import { TreatmentImgRead } from "./TreatmentImgRead";
import React, { useState } from "react";

function getSOAP() {
  const soap = [{ treatmentId: "1", Subjective: "목 아픔", Objective: "인후염", Assessment: "온열찜질기 실행", Plan: "다음 내원시 Lab test" }];

  return soap;
}

function getInspectionList() {
  const inspectionlists = [
    { inspectionId: "1", inspectioncategory: "혈액검사", inspectiondate: "2021-06-01", inspector: "김검사", inspectionname: "백혈구 백분율", inspectionref: "4000~10000μL", inspectionresult: "8000" },
    {
      inspectionId: "2",
      inspectioncategory: "혈액검사",
      inspectiondate: "2021-06-01",
      inspector: "김검사",
      inspectionname: "순환기능검사-적혈구량측",
      inspectionref: "3000~7500/mm3",
      inspectionresult: "6000",
    },
    { inspectionId: "3", inspectioncategory: "혈액검사", inspectiondate: "2021-06-01", inspector: "김검사", inspectionname: "백혈구 백분율", inspectionref: "12.0~16.0g/dL", inspectionresult: "14" },
    { inspectionId: "4", inspectioncategory: "혈액검사", inspectiondate: "2021-06-01", inspector: "김검사", inspectionname: "백혈구 백분율", inspectionref: "", inspectionresult: "" },
    { inspectionId: "5", inspectioncategory: "유리검사", inspectiondate: "2021-06-01", inspector: "나꼼꼼", inspectionname: "백혈구 백분율", inspectionref: "", inspectionresult: "" },
    { inspectionId: "6", inspectioncategory: "영상촬영", inspectiondate: "2021-06-01", inspector: "박사능", inspectionname: "백혈구 백분율", inspectionref: "", inspectionresult: "" },
  ];
  return inspectionlists;
}

function TreatmentHistoryRead(props) {
  const [soap, setSoap] = useState(getSOAP);
  const [inspectionlists, setInspectionlists] = useState(getInspectionList);
  const [img, setImg] = useState("");

  const readResultImg = (event) => {
    console.log("보기가 클릭되었습니다.");
  };

  // 모달 상태(open일 떄 true로 바뀌어 열림)
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div className="TreatmentHistoryRead_title">진료상세</div>
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
          <div className="TreatmentHistoryRead_2_title">검사 기록 상세</div>
          <table className="table table-bordered TreatmentHistoryRead_2_table border">
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
                    <td>{inspectionlist.inspectioncategory}</td>
                    <td>{inspectionlist.inspectiondate}</td>
                    <td>{inspectionlist.inspector}</td>
                    <td>{inspectionlist.inspectionname}</td>
                    <td>{inspectionlist.inspectionref}</td>
                    {inspectionlist.inspectioncategory === "영상촬영" ? (
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
                            inspection_list_name={inspectionlists[5].inspectionname}
                            inspection_list_category={inspectionlists[5].inspectioncategory}
                            inspection_treatment_id="50546"
                            inspection_date={inspectionlists[5].inspectiondate}
                          >
                            모달 내용
                          </TreatmentImgRead>
                        </React.Fragment>
                      </td>
                    ) : (
                      <td>{inspectionlists.inspectionresult}</td>
                    )}
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
export default TreatmentHistoryRead;
