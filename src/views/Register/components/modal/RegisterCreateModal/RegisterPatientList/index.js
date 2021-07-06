import { getPatientList } from "apis/register";
import { useEffect, useState } from "react";
import style from "./RegisterPatientList.module.css";



function RegisterPatientList(props) {
  const noneRegister = {
    register_id: "",
    register_patient_id: "",
    register_user_id: "",
    register_regdate: "",
    register_date: "",
    register_starttime: "",
    register_memo: "",
    register_communication: "",
    register_state: "",

    // Add Data
    patient_name: "",
    patient_ssn: "",
    patient_sex: "",
    patient_tel: "",

    user_name: "",
  };
  var register
  if(props.register){
    register = props.register;
  } else {
    register = noneRegister;
  }
  const [patientList, setPatientList] = useState([]);

  // 환자 검색창 상태 
  const [searchContent, setSearchContent] = useState("");

  const changeSearchContent = (event) => {
    setSearchContent(
      event.target.value
    );
  };

  // 선택된 환자 상태
  const [selectedPatient, setSelectedPatient] = useState();

  const handlePatient = (patient_id) => {
    if(patient_id === selectedPatient){
      setSelectedPatient("");
    } else {
      setSelectedPatient(patient_id);
      console.log(patient_id);
      props.setNewRegister({...props.newRegister,register_patient_id:patient_id});
    }
  };

  const handleSearch = () => {
    console.log("입력된 내용:" + searchContent);
  };
  const getPatientsLists = async () => {
    try {
      var list = await getPatientList();
      console.log(list.data.patientList);
      setPatientList(list.data.patientList);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(()=>{
    getPatientsLists();
  },[]);
  return (
    <div className={style.RegisterPatientList}>
      <div className={`${style.RegisterPatientList_content} border`}>
        <div className={`${style.RegisterPatientList_search} mt-1`}>
          <div className={style.RegisterPatientList_search_input}>
            <input type="text" className={style.RegisterPatientList_search_input_1} placeholder="이름/생년월일을 입력해 주세요." value={register.patient_name} onChange={changeSearchContent} />
          </div>
          <div className={style.RegisterPatientList_search_button}>
            <button className="button_team2_fill" onClick={handleSearch}>환자 검색</button>
          </div>
        </div>
        <div className={style.RegisterPatientList_content_table}>
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>환자 코드</th>
                <th>환자명</th>
                <th>생년월일</th>
                <th>성별</th>
                <th>전화번호</th>
              </tr>
            </thead>
            <tbody>
              {/* 임의의 데이터 넣어서 출력 해보기 */}
              {patientList.map(patient => {
                return (
                  <tr key={patient.patient_id} className={style.RegisterPatientList_content_table_tr} onClick={()=>handlePatient(patient.patient_id)}>
                    <td><input type="checkbox" name="chk" checked={selectedPatient === patient.patient_id? true : false} readOnly/></td>
                    <td>{patient.patient_id}</td>
                    <td>{patient.patient_name}</td>
                    <td>{patient.patient_ssn}</td>
                    <td>{patient.patient_sex}</td>
                    <td>{patient.patient_tel}</td>
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
export default RegisterPatientList;
