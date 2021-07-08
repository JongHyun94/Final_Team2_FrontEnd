import React, { useState, useEffect   } from "react";
import { updateTreatment, getSearchDurg, getCategoryInspectionList  } from "apis/treatments";

function getDrugList() {
  const druglists = [
    { drug_injection_list_id: "NIZA15", drug_injection_list_name: "AXID Cap 150mg", drug_injection_list_category: "약품" },
    { drug_injection_list_id: "IRES", drug_injection_list_name: "IRESSA Tab 250mg", drug_injection_list_category: "약품" },
    { drug_injection_list_id: "ROPIN1", drug_injection_list_name: "ONIROL Tab 1mg", drug_injection_list_category: "약품" },
    { drug_injection_list_id: "ROXN", drug_injection_list_name: "ROXAN Cap 75mg", drug_injection_list_category: "주사" },
    { drug_injection_list_id: "NIZA16", drug_injection_list_name: "AXID Cap 150mg", drug_injection_list_category: "약품" },
    { drug_injection_list_id: "NIZA17", drug_injection_list_name: "AXID Cap 150mg", drug_injection_list_category: "약품" },
    { drug_injection_list_id: "NIZA18", drug_injection_list_name: "AXID Cap 150mg", drug_injection_list_category: "약품" },
    { drug_injection_list_id: "NIZA19", drug_injection_list_name: "AXID Cap 150mg", drug_injection_list_category: "약품" },
    { drug_injection_list_id: "NIZA20", drug_injection_list_name: "AXID Cap 150mg", drug_injection_list_category: "약품" },
    { drug_injection_list_id: "NIZA21", drug_injection_list_name: "AXID Cap 150mg", drug_injection_list_category: "약품" },
    { drug_injection_list_id: "NIZA22", drug_injection_list_name: "AXID Cap 150mg", drug_injection_list_category: "약품" },
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

  const {publishTopic} = props;

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
  const [inspectionlist, setInspectionlist] = useState([]);
  const [inspectionOption, setInspectionOption] = useState("진단 검사 선택");
  // const [inspectionOption, setInspectionOption] = useState(["진단 검사 선택"]);
  const [druglists, setDrugLists] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState();

  const getCategoryInspectionLists = async (categoryValue) => {
    try{
 
      var list = await getCategoryInspectionList(categoryValue);
      console.log("hi",list);
      setInspectionlist(list.data.inspectionList);
    }catch (e){
      console.log(e);
    }
  }
  useEffect(() => {
    getCategoryInspectionLists(inspectionOption);
  }, [inspectionOption]);


  const getSearchDurgs = async () => {
    try{
      var list = await getSearchDurg();
      setDrugLists(list.data.druglist);
    }catch (e){
      console.log(e);
    }
  }
  // 마운트될때 전체 출력이 된다
  useEffect(() => {
    getSearchDurgs();
  }, []);



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

 const changeKeyword = (event) => {
    setSearchKeyword(event.target.value);
 };

 const searchClick = async () =>{
  try{
    var list = await getSearchDurg(searchKeyword);
    setDrugLists(list.data.druglist);
  }catch (e){

  }
 };

  // 모달 상태(open일 떄 true로 바뀌어 열림)
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };


// const handleCreate = (event) => {
//   event.preventDefault();
//   const newTreatment = {...treatment};
//   console.log("진료 등록: ", newTreatment);
// };

const updateTreatmentBtn = (event) => {
  publishTopic();
  event.preventDefault();
  let newTreatment = {
    treatment_smemo: smemo, 
    treatment_omemo: omemo, 
    treatment_amemo: amemo,
    treatment_pmemo: pmemo, 
    treatment_communication: cmemo
  };
};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="TreatmentCreateForm_title">
          {/* 진료 등록<button type="submit" className="button_team2_fill">진료완료</button> */}
          <div className="TreatmentCreateForm_title_1"> {checkedPatientlist.patient_name} 님 진료 등록 </div>
          <div className="TreatmentCreateForm_title_2">
            <button type="submit" className="button_team2_fill" onClick={updateTreatmentBtn}>
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
                  {inspectionlist.map((inspection) => {
                    return (
                      <div key={inspection.inspection_list_name}>
                        {inspection.inspection_list_category === inspectionOption ? (
                          <div className="TreatmentCreateForm_checkbox_1" >
                            <input type="checkbox" /> {inspection.inspection_list_name}
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
                  <input type="text" className="TreatmentSearch_1_1" onChange={changeKeyword} value={searchKeyword}/>
                  <button className="button_team2_fill" onClick={searchClick}>검색</button>
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
                        <tr className="TreatmentSearch_2_2_tr" key={druglist.drug_injection_list_id}>
                          <td>
                            <input type="checkbox" />
                          </td>
                          <th>{druglist.drug_injection_list_id}</th>
                          <th>{druglist.drug_injection_list_name}</th>
                          <th>{druglist.drug_injection_list_category}</th>
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
 