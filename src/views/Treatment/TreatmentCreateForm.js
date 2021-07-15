import React, { useState, useEffect } from "react";
import { updateTreatment, getSearchDurg, getCategoryInspectionList, createDruglist } from "apis/treatments";
import Spinner from "components/common/Spinner";
import { ToastsContainer, ToastsContainerPosition, ToastsStore } from "react-toasts";

function TreatmentCreateForm(props) {

  const { publishTopic } = props;
  // spinner 
  const [loading, setLoading] = useState(false);
  //임시 환자 리스트
  var tempPatientlist = {
    treatment_register_id: "",
    treatment_patient_id: "",
    patient_name: "",
    patient_ssn: "",
    patient_sex: "",
    register_communication: "",
    treatment_state: "",
  };

  //대기환자리스트에서 체크된 환자 리스트 가져오기 ->props.checkedpatient == checkedPatientlist
  var checkedPatientlist;
  if (props.checkedpatient) {
    checkedPatientlist = props.checkedpatient;
  } else {
    checkedPatientlist = tempPatientlist;
  }
  //검사 checkbox
  const [inspectionlist, setInspectionlist] = useState([]);
  const [inspectionOption, setInspectionOption] = useState("진단 검사 선택");
  



  const [inspectionForm, setInspectionForm] = useState({
    selectedInspection: [],
    selectedInspection2: []
  });
  const [drugForm, setDrugForm] = useState({
    selectedDrug: []
  });

  const [druglists, setDrugLists] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState();
  //const [treatmentId, setTreatmentId] = useState("");
  const getCategoryInspectionLists = async (categoryValue) => {
    try {

      var list = await getCategoryInspectionList(categoryValue);
      console.log("hi",list.data.inspectionList);
      setInspectionlist(list.data.inspectionList);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getCategoryInspectionLists(inspectionOption);
  }, [inspectionOption]);


  const getSearchDurgs = async () => {
    setLoading(true);
    try {
      var list = await getSearchDurg();
      setDrugLists(list.data.druglist);
    } catch (e) {
      console.log(e);
    }finally {
      setLoading(false);
    }
  }
  // 마운트될때 전체 출력이 된다
  useEffect(() => {
    getSearchDurgs();
  }, []);

  const handleChange = (event) => {
    setInspectionOption(event.target.value);
  };
  // console.log(inspectionOption);

  const changeKeyword = (event) => {
    setSearchKeyword(event.target.value);
  };

  const searchClick = async () => {
    setLoading(true);
    try {
      var list = await getSearchDurg(searchKeyword);
      setDrugLists(list.data.druglist);
    } catch (error) {
      console.log(error);
    }finally {
      setLoading(false);
    }
  };

  //soap 입력폼
  const [smemo, setSmemo] = useState("");
  const [omemo, setOmemo] = useState("");
  const [amemo, setAmemo] = useState("");
  const [pmemo, setPmemo] = useState("");
  const [cmemo, setCmemo] = useState("");

  const handleChangeSmemo = (event) => {
    setSmemo(event.target.value);
  };
  const handleChangeOmemo = (event) => {
    setOmemo(event.target.value);
  };
  const handleChangeAmemo = (event) => {
    setAmemo(event.target.value);
  };
  const handleChangePmemo = (event) => {
    setPmemo(event.target.value);
  };

  const handleChangeCmemo = (event) => {
    setCmemo(event.target.value);
  };

  const updateTreatmentBtn = async (event) => {
    //publishTopic();
    // event.preventDefault();
    try {
      let newTreatment = {
        treatment_id: checkedPatientlist.treatment_id,
        treatment_user_id : checkedPatientlist.treatment_user_id,
        treatment_patient_id: checkedPatientlist.treatment_patient_id,
        treatment_smemo: smemo,
        treatment_omemo: omemo,
        treatment_amemo: amemo,
        treatment_pmemo: pmemo,
        treatment_communication: cmemo,
        selectedInspection : inspectionForm.selectedInspection,
        selectedInspection2 : inspectionForm.selectedInspection2,
        selectedDrug : drugForm.selectedDrug,
   
      };
 

      console.log("sseeCATEGORY: ",newTreatment.selectedInspection);
      console.log("sseeCATEGORY selectedInspection2: ",newTreatment.selectedInspection2);
      console.log("newtt", newTreatment);
      var list = await updateTreatment(newTreatment);
      if(list.data){
        ToastsStore.success("진료 등록 완료");
        publishTopic(0);
        publishTopic(1);
        console.log("list", list);
        setSmemo("");
        setOmemo("");
        setAmemo("");
        setPmemo("");
        setCmemo("");

     
      setInspectionForm({selectedInspection:[""]},{selectedInspection2:[""]});
      
      }
     
      // console.log(list.data.result)

      // setInspectionlist(newTreatment);
    
   
     
    } catch (e) {
      console.log(e);
    }

  };

  const checkChange = (event) => {
    // console.log("aaaaaaaa",event.target.name);
    //     console.log("bbbbbbbb",event.target.value);
    if (event.target.checked) {//체크되었는지 유무

      setDrugForm(prevDrugForm => {
        return {
          ...prevDrugForm,
          selectedDrug: prevDrugForm.selectedDrug.concat(event.target.value)
        };
      })

    } else {

      setDrugForm(prevDrugForm => {
        return {
          ...prevDrugForm,
          selectedDrug: prevDrugForm.selectedDrug.filter(item => item !== event.target.value)
        };
      })

    }
  };
  // Inspection
  const checkChange2 = (event) => {

    if (event.target.checked) {//체크되었는지 유무

      setInspectionForm(prevInspectionForm => {
        return {
          ...prevInspectionForm,
          selectedInspection: prevInspectionForm.selectedInspection.concat(event.target.value)
        };
      })

    } else {

      setInspectionForm(prevInspectionForm => {
        return {
          ...prevInspectionForm,
          selectedInspection: prevInspectionForm.selectedInspection.filter(item => item !== event.target.value)
        };
      })

    }
  };
  const checkChange3 = (event) => {

    if (event.target.checked) {//체크되었는지 유무

      setInspectionForm(prevInspectionForm => {
        return {
          ...prevInspectionForm,
          selectedInspection2: prevInspectionForm.selectedInspection2.concat(event.target.value)
        };
      })

    } else {

      setInspectionForm(prevInspectionForm => {
        return {
          ...prevInspectionForm,
          selectedInspection2: prevInspectionForm.selectedInspection2.filter(item => item !== event.target.value)
        };
      })

    }
  };
  const onReset = () => {
    // setUser({ username: "", age: "" });
    setDrugForm({selectedDrug:""});
    setInspectionForm({selectedInspection:""});
  };


  // //진료대기 환자 선택함수
  // const checkedInspectionlists = (inspection_list_id) => {
  //   // setSelectedRegisterId(treatment_register_id);
  //   setInspectionForm(inspection_list_id);
   
  //   setCheckedpatient(patientlist);
  // };

  return (
    <div>
      <div className="TreatmentCreateForm_title">
        {/* 진료 등록<button type="submit" className="button_team2_fill">진료완료</button> */}
        <div className="TreatmentCreateForm_title_1"> {checkedPatientlist.patient_name} 님 진료 등록 </div>
        <div className="TreatmentCreateForm_title_2">
          <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_CENTER} lightBackground/> 
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
                    <div key={inspection.inspection_list_id}  >
                      {inspection.inspection_list_category === inspectionOption ? (
                        inspection.inspection_list_category ==="혈액검사"?
                        <div className="TreatmentCreateForm_checkbox_1" >
                          <input type="checkbox" name="selectedInspection" value={inspection.inspection_list_id} onChange={checkChange2}/> {inspection.inspection_list_name}
                        </div>
                        :
                        <div className="TreatmentCreateForm_checkbox_1" >
                          <input type="checkbox" name="selectedInspection2" value={inspection.inspection_list_id} onChange={checkChange3}/> {inspection.inspection_list_name}
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
                <input type="text" className="TreatmentSearch_1_1" placeholder="약품/주사명을 입력하세요." onChange={changeKeyword} value={searchKeyword} />
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
                  {loading ? <Spinner /> : <>
                    {druglists.map((druglist) => {
                      return (
                        <tr className="TreatmentSearch_2_2_tr" key={druglist.drug_injection_list_id}>
                          <td>
                            <input type="checkbox" name="selectedDrug" value={druglist.drug_injection_list_id} onChange={checkChange} />
                          </td>
                          <th>{druglist.drug_injection_list_id}</th>
                          <th>{druglist.drug_injection_list_name}</th>
                          <th>{druglist.drug_injection_list_category}</th>
                        </tr>
                      );
                    })}
                     </>}
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
    </div>
  );
}
export default TreatmentCreateForm;