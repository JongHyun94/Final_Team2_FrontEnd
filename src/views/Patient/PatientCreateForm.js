import { useState } from "react";
import style from "./style.module.css";

function PatientCreateForm(props) {
  // 환자 상태
  const [patient, setPatient] = useState({
    patientName: "", 
    patientSsn1: "", 
    patientSsn2: "",
    patientSex: "", 
    patientTel: "",
    patientTel1: "", 
    patientTel2: "", 
    patientTel3: "", 
    paritentZipcode: "", 
    paritentAddress: "", 
    paritentDetailAddress1: "", 
    paritentDetailAddress2: ""
  })

  const handleChange = (event) => {
    setPatient({
      ...patient,
      [event.target.name]: event.target.value,
      patientTel: patient.patientTel1 + "-" + patient.patientTel2 + "-" + patient.patientTel3
    });
    console.log(patient.patientTel1);
    console.log(patient.patientTel);
  };

  // 환자 등록
  const handleCreate = (event) => {
    event.preventDefault();
    const newPatient = {...patient};
    console.log(newPatient);
  }; 

  return (
    <div className="mt-4">
      <div className={`${style.title}`}>환자 등록</div>
      <div className={`border p-3 ${style.PatientCreateForm}`}>
        <form>
          <div className="row align-items-center mb-2">
            <label className="col-sm-3 m-0">환자명: </label>
            <div className="col-sm">
              <input type="text" name="patientName" placeholder="환자명" onChange={handleChange}></input>
            </div>
          </div>
          <div className="row  align-items-center mb-2">
            <label className="col-sm-3 m-0">주민등록번호: </label>
            <div className="row ml-3">
              <input type="text" className="col-sm" name="patientSsn1" onChange={handleChange}></input>
              <div className="mr-2 ml-2 d-flex align-items-center">-</div>
              <input type="text" className="col-sm" name="patientSsn2" onChange={handleChange}></input>
            </div>
          </div>
          <div className="row align-items-center mb-2">
            <label className="col-sm-3 m-0">성별: </label>
            <div className="col-sm d-flex align-items-center">
              <input type="radio" name="patientSex" value="M" onChange={handleChange}></input>
              <label className="ml-3 mb-0">남</label>
            </div>
            <div className="col-sm d-flex align-items-center">
              <input type="radio" name="patientSex" value="F" onChange={handleChange}></input>
              <label className="ml-3 mb-0">여</label>
            </div>
          </div>
          <div className="row align-items-center mb-2">
            <label className="col-sm-3 m-0">전화 번호: </label>
            <div className="row col-sm">
              <select className="col-sm-2 ml-3" name="patientTel1" onChange={handleChange}>
                <option selectd value="010">010</option>
                <option value="011">011</option>
                <option value="016">016</option>
                <option value="017">017</option>
                <option value="02">02</option>
                <option value="031">031</option>
                <option value="032">032</option>
                <option value="033">033</option>
                <option value="041">041</option>
                <option value="042">042</option>
                <option value="043">043</option>
                <option value="044">044</option>
                <option value="051">051</option>
                <option value="052">052</option>
                <option value="053">053</option>
                <option value="054">054</option>
                <option value="055">055</option>
                <option value="061">061</option>
                <option value="062">062</option>
                <option value="063">063</option>
                <option value="064">064</option>
              </select>
              <div className="mr-2 ml-2 d-flex align-items-center">-</div>
              <input type="text" className="col-sm-2" name="patientTel2" onChange={handleChange}></input>
              <div className="mr-2 ml-2 d-flex align-items-center">-</div>
              <input type="text" className="col-sm-2" name="patientTel3" onChange={handleChange}></input>
            </div>
          </div>
          <div className="row">
            <label className="col-sm-3 m-0">주소: </label>
            <div className="col-sm">
              <div className="row mb-2"> 
                <input type="text" className="col-sm-2 ml-3" name="paritentZipcode" placeholder="우편번호" onChange={handleChange}></input>
                <button className="button_team2_empty">우편번호 찾기</button>
              </div>
              <input type="text" className=" mb-2" name="paritentAddress" placeholder="주소" onChange={handleChange}></input>
              <div className="row no-gutters mb-2">
                <input type="text" className="col-sm mr-2" name="paritentDetailAddress1" placeholder="상세주소" onChange={handleChange}></input>
                <input type="text" className="col-sm" name="paritentDetailAddress2" placeholder="참고항목" onChange={handleChange}></input>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end"><button className="button_team2_fill" onClick={handleCreate}>등록</button></div>
        </form>
      </div>
    </div>
  );
}

export default PatientCreateForm;