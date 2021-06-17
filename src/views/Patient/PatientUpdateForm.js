import { useContext, useState } from "react";
import PatientContext from "./PatientContext";
import style from "./style.module.css";

function PatientUpdateForm(props) {
  const patientContext = useContext(PatientContext);

  // 환자 d상태
  const [patientId, setPatientId] = useState(patientContext.patientId);
  console.log(patientContext);

  // 환자 상태
  const [patient, setPatient] = useState({
    patientId: "",
    patientName: "",
    patientSsn: "",
    patientSex: "",
    patientTel: "",
    patientAddress: "",
    patientRegDate: ""
  });

  const handleChange = (event) => {
    // setPatientId({
    //   ...patient,
    //   [event.target.name]: event.target.value
    // });
  };

  // 환자 정보 수정
  const handleUpdate = (event) => {
    event.preventDefault();
    const updatePatient = {...patient};
    console.log(updatePatient);
  }; 

  return (
    <div>
      <div className={`${style.title}`}>환자 정보 수정</div>
      <div className={`border p-3 ${style.PatientUpdateForm}`}>
        <form>
          <div className="row align-items-center mb-2">
            <label className="col-sm-3 pl-3 p-0 m-0">환자 코드: </label>
            <div className="col-sm d-flex ">{patient.patientId}</div>
          </div>
          <div className="row align-items-center mb-2">
            <label className="col-sm-3 pl-3 p-0 m-0">환자명: </label>
            <div className="col-sm">{patient.patientName}</div>
          </div>
          <div className="row align-items-center mb-2">
            <label className="col-sm-3 pl-3 p-0 m-0">생년 월일: </label>
            <div className="col-sm">{patient.patientSsn}</div>
          </div>
          <div className="row align-items-center mb-2">
            <label className="col-sm-3 pl-3 p-0 m-0">성별: </label>
            <div className="col-sm">{patient.patientSex}</div>
          </div>
          <div className="row align-items-center mb-2">
            <label className="col-sm-3 m-0">전화 번호: </label>
            <div className="row col-sm">
              <select className="col-sm-2 ml-3" name="patientTel1" value={patient.patientTel1} onChange={handleChange}>
                <option value="010">010</option>
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
              <input type="text" className="col-sm-2" name="patientTel2" value={patient.patientTel2} onChange={handleChange}></input>
              <div className="mr-2 ml-2 d-flex align-items-center">-</div>
              <input type="text" className="col-sm-2" name="patientTel3" value={patient.patientTel3} onChange={handleChange}></input>
            </div>
          </div>
          <div className="row">
            <label className="col-sm-3 m-0">주소: </label>
            <div className="col-sm">
              <div className="row mb-2"> 
                <input type="text" className="col-sm-2 ml-3" name="paritentZipcode" value={patient.paritentZipcode} placeholder="우편번호" onChange={handleChange}></input>
                <button className="button_team2_empty">우편번호 찾기</button>
              </div>
              <input type="text" className=" mb-2" name="paritentAddress" value={patient.paritentAddress} placeholder="주소" onChange={handleChange}></input>
              <div className="row no-gutters mb-2">
                <input type="text" className="col-sm mr-2" name="paritentDetailAddress1" value={patient.paritentDetailAddress1} placeholder="상세주소" onChange={handleChange}></input>
                <input type="text" className="col-sm" name="paritentDetailAddress2" value={patient.paritentDetailAddress2} placeholder="참고항목" onChange={handleChange}></input>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label pl-3 p-0">등록 날짜: </label>
            <div className="col-sm d-flex align-items-center">{patient.patientRegDate}</div>
          </div>
          <div className="d-flex justify-content-end"><button className="button_team2_fill" onClick={handleUpdate}>수정</button></div>
        </form>
      </div>
    </div>
  );
}

export default PatientUpdateForm;