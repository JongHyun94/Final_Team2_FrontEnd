import React, { useState } from "react";

function getDrugList() {
  const druglists = [
    { drugInjectionId: "NIZA15", drugInjectionName: "AXID Cap 150mg", drugInjectionState: "약품" },
    { drugInjectionId: "IRES", drugInjectionName: "IRESSA Tab 250mg", drugInjectionState: "약품" },
    { drugInjectionId: "ROPIN1", drugInjectionName: "ONIROL Tab 1mg", drugInjectionState: "약품" },
    { drugInjectionId: "ROXN", drugInjectionName: "ROXAN Cap 75mg", drugInjectionState: "주사" },
    { drugInjectionId: "NIZA16", drugInjectionName: "AXID Cap 150mg", drugInjectionState: "약품" },
    { drugInjectionId: "NIZA17", drugInjectionName: "AXID Cap 150mg", drugInjectionState: "약품" },
    { drugInjectionId: "NIZA18", drugInjectionName: "AXID Cap 150mg", drugInjectionState: "약품" },
    { drugInjectionId: "NIZA19", drugInjectionName: "AXID Cap 150mg", drugInjectionState: "약품" },
    { drugInjectionId: "NIZA20", drugInjectionName: "AXID Cap 150mg", drugInjectionState: "약품" },
    { drugInjectionId: "NIZA21", drugInjectionName: "AXID Cap 150mg", drugInjectionState: "약품" },
    { drugInjectionId: "NIZA22", drugInjectionName: "AXID Cap 150mg", drugInjectionState: "약품" },
  ];
  return druglists;
}

function getInspectionList() {
  const inspectionLists = [
    { inspectioncategory: "영상검사", inspection: "흉부촬영" },
    { inspectioncategory: "영상검사", inspection: "고밀도 콜레스테롤" },
    { inspectioncategory: "영상검사", inspection: "당뇨 검사" },
    { inspectioncategory: "혈액검사", inspection: "빈혈 검사" },
    { inspectioncategory: "혈액검사", inspection: "신경 특이 에놀라제" },
    { inspectioncategory: "혈액검사", inspection: "빈혈 검사1" },
    { inspectioncategory: "혈액검사", inspection: "빈혈 검사2" },
    { inspectioncategory: "혈액검사", inspection: "빈혈 검사3" },
  ];
  return inspectionLists;
}

function TreatmentCreateForm(props) {
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

  //soap 입력폼
  const [smemo, setSmemo] = useState("");
  const [omemo, setOmemo] = useState("");
  const [amemo, setAmemo] = useState("");
  const [pmemo, setPmemo] = useState("");

  //의사소통메모
  const [cmemo, setCmemo] = useState("");

  //검사 checkbox
  const [inspectionlist, setInspectionlist] = useState(getInspectionList);

  const [inspectionOption, setInspectionOption] = useState("진단 검사 선택");

  const handleChangeSmemo = (event) => {
    console.log("Subjective:", event.target.value);
    setSmemo(event.target.value);
  };
  const handleChangeOmemo = (event) => {
    console.log("Objective:", event.target.value);
    setOmemo(event.target.value);
  };
  const handleChangeAmemo = (event) => {
    console.log("Assessment:", event.target.value);
    setAmemo(event.target.value);
  };
  const handleChangePmemo = (event) => {
    console.log("Plan:", event.target.value);
    setPmemo(event.target.value);
  };

  const handleChangeCmemo = (event) => {
    console.log("Memo:", event.target.value);
    setCmemo(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("접수완료 : ", inspectionlist);
  };


  const handleChange = (event) => {
    setInspectionOption(event.target.value);
  };
  // console.log(inspectionOption);

  const [druglists, setDrugLists] = useState(getDrugList);

  // 모달 상태(open일 떄 true로 바뀌어 열림)
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

const [treatment, setTreatment] = useState({
  smemo: "", 
  omemo: "", 
  amemo: "",
  pmemo: "", 
  cmemo: "",
  inspectionId: "", 
  druglists: ""
})


const handleCreate = (event) => {
  event.preventDefault();
  const newTreatment = {...treatment};
  console.log("진료 등록: ", newTreatment);
}


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="TreatmentCreateForm_title">
          {/* 진료 등록<button type="submit" className="button_team2_fill">진료완료</button> */}
          <div className="TreatmentCreateForm_title_1"> {checkedPatientlist.registerPatientName} 님 진료 등록 </div>
          <div className="TreatmentCreateForm_title_2">
            <button type="submit" className="button_team2_fill" onClick={openModal}>
              진료완료
            </button>
          </div>
        </div>
        <div className="TreatmentCreateForm_border border">
          <div className="TreatmentCreateForm_1">
            <div className="TreatmentCreateForm_1_border">
              <div className="TreatmentCreateForm_1_1_title">Subjective</div>
              <textarea className="TreatmentCreateForm_1_1_content border" rows="6" cols="40" onChange={handleChangeSmemo} value={smemo}>
                당일 검사 요청
              </textarea>
              <div className="TreatmentCreateForm_1_1_title">Objective</div>
              <textarea className="TreatmentCreateForm_1_1_content border" rows="6" cols="40" onChange={handleChangeOmemo} value={omemo}>
                당일 검사 요청
              </textarea>
              <div className="TreatmentCreateForm_1_1_title">Assessment</div>
              <textarea className="TreatmentCreateForm_1_1_content border" rows="6" cols="40" onChange={handleChangeAmemo} value={amemo}>
                당일 검사 요청
              </textarea>
              <div className="TreatmentCreateForm_1_1_title">Plan</div>
              <textarea className="TreatmentCreateForm_1_1_content border" rows="6" cols="40" onChange={handleChangePmemo} value={pmemo}>
                당일 검사 요청
              </textarea>
              <div className="TreatmentCreateForm_1_1_title">의사소통 메모</div>
              <textarea className="TreatmentCreateForm_1_1_content border" rows="6" cols="40" onChange={handleChangeCmemo} value={cmemo}>
                당일 검사 요청
              </textarea>
            </div>
          </div>
          <div className="TreatmentCreateForm_2">
            <div className="TreatmentCreateForm_2_1_border border">
              <div className="TreatmentCreateForm_2_1_title">진단 검사</div>
              <div className="TreatmentCreateForm_2_1_content">
                <div className="TreatmentCreateForm_select">
                  <select name="inspectioncategory" className="TreatmentCreateForm_select_1" onChange={handleChange} value={inspectionOption}>
                    <option disabled>진단 검사 선택</option>
                    <option value="혈액검사">혈액검사</option>
                    <option value="영상검사">영상검사</option>
                  </select>
                </div>
                {/* 검사별 상태 만들어서 전달, 조건문으로 맵 돌리기 */}

                <div className="TreatmentCreateForm_checkbox">
                  {inspectionlist.map((inspectionlist) => {
                    return (
                      <div key={inspectionlist.inspection}>
                        {inspectionlist.inspectioncategory === inspectionOption ? (
                          <div className="TreatmentCreateForm_checkbox_1" >
                            <input type="checkbox" /> {inspectionlist.inspection}
                          </div>
                        ) : (
                          false
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="TreatmentCreateForm_2_2_border border">
              <div className="TreatmentCreateForm_2_2_title">약품 목록</div>
              <div className="TreatmentCreateForm_2_2_content">
                <div className="TreatmentSearch_1">
                  <input type="text" className="TreatmentSearch_1_1" />
                  <button className="button_team2_fill">검색</button>
                </div>
                <div className="TreatmentSearch_2_Totaltable">
                <table className="table TreatmentSearch_2">
                  <thead className="TreatmentSearch_2_2">
                    <tr>
                      <th></th>
                      <th>약품/주사코드</th>
                      <th>약품/주사명</th>
                      <th>구분</th>
                    </tr>
                  </thead>
                  <tbody>
                    {druglists.map((druglist) => {
                      return (
                        <tr className="TreatmentSearch_2_2_tr" key={druglist.drugInjectionId}>
                          <td>
                            <input type="checkbox" />
                          </td>
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
              {/* <div className="TreatmentSearch_3">
                                              <button className="button_team2_fill" >확인</button>
                                          </div> */}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default TreatmentCreateForm;
 