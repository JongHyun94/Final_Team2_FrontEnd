import { Modal } from "../../components/common/Address";
import React, { useState } from "react";
import { createPatient } from "apis/patient";
import { useForm } from "react-hook-form";

function PatientCreateForm(props) {
  // 환자 상태
  const [patient, setPatient] = useState({
    patient_name: "", 
    patient_ssn1: "", 
    patient_ssn2: "",
    patient_sex: "", 
    patient_tel1: "010", 
    patient_tel2: "", 
    patient_tel3: "", 
    patient_zipcode: "", 
    patient_address: "", 
    patient_detailaddress1: "", 
    patient_detailaddress2: ""
  })
  
  // 마스킹 상태
  const [masking, setMasking] = useState("");

  // 유효성 검사를 위한 함수 사용
  const { handleSubmit, register, errors } = useForm({ mode: "onChange" });

  const handleChange = (event) => {
    setPatient({
      ...patient,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeSSn = (event) => {
    setPatient({
      ...patient,
      patient_ssn2 : event.target.value
    });
    setMasking(event.target.value);
  };

  // 환자 등록
  const handleCreate = async (event) => {
    try {
      // event.preventDefault();
      console.log("환자 등록: ", patient);
      const response = await createPatient(patient);
      if (response.data) {        
        setPatient({
          patient_name: "", 
          patient_ssn1: "", 
          patient_ssn2: "",
          patient_sex: "", 
          patient_tel1: "010", 
          patient_tel2: "", 
          patient_tel3: "", 
          patient_zipcode: "", 
          patient_address: "", 
          patient_detailaddress1: "", 
          patient_detailaddress2: ""
        });
        setMasking("");
        alert("환자를 등록했습니다.");
        props.publishTopic(1);
      }
    } catch(error) {
      console.log(error);
    }    
  }; 

  // 모달 상태(open일 떄 true로 바뀌어 열림)
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (event) => {
    event.preventDefault();
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const sendModal = (data) => {
    setModalOpen(false);
    console.log("send 실행", data);
    setPatient({
      ...patient,
      patient_zipcode: data.zonecode, 
      patient_address: data.address
    })
    if (data.buildingName === "") {
      setPatient(prevPatient => {
        return {
          ...prevPatient,
          patient_detailaddress2: data.bname          
        };
      });
    } else {
      setPatient(prevPatient => {
        return {
          ...prevPatient,
          patient_detailaddress2: data.bname + ", " + data.buildingName   
        };
      });
    }
  };
  
  return (
    <div className="mt-4">
      <div className={`Patient_title`}>환자 등록</div>
      <div className={`border p-3`}>
        <form onSubmit={handleSubmit(handleCreate)}>
          <div className="Patient_item">
            <label className="col-sm-3 m-0">환자명: </label>
            <div className="col-sm">
              <input type="text" name="patient_name" placeholder="환자명" value={patient.patient_name} onChange={handleChange} ref={register({required: true, minLength: 2})}></input>
            </div>
          </div>
          <div className="Patient_item">
            <label className="col-sm-3 m-0">주민등록번호: </label>
            <div className="row ml-3">
              <input type="text" className="col-sm" name="patient_ssn1" value={patient.patient_ssn1} placeholder="999999" onChange={handleChange} ref={register({required: true, minLength: 6, maxLength: 6})}></input>
              <div className="mr-2 ml-2 d-flex align-items-center">-</div>
              {/* <input type="text" className="col-sm" name="patientSsn2" placeholder="1234567" onChange={handleChange}></input> */}
              <input type="text" className="col-sm" name="user_ssn2" value={masking} placeholder="1234567" 
              onChange={handleChangeSSn} onBlur={() => {setMasking(masking?.replace(/(?<=.{1})./gi, '*'));}}
              ref={register({required: true, minLength: 7, maxLength: 7})}></input>
            </div>
          </div>
          <div className="Patient_item">
            <label className="col-sm-3 m-0">성별: </label>
            <div className="col-sm d-flex align-items-center">
              <input type="radio" name="patient_sex" value="M" checked={patient.patient_sex === "M"? true : false} onChange={handleChange}></input>
              <label className="ml-3 mb-0">남</label>
            </div>
            <div className="col-sm d-flex align-items-center">
              <input type="radio" name="patient_sex" value="F" checked={patient.patient_sex === "F"? true : false} onChange={handleChange}></input>
              <label className="ml-3 mb-0">여</label>
            </div>
          </div>
          <div className="Patient_item">
            <label className="col-sm-3 m-0">전화 번호: </label>
            <div className="row col-sm">
              <select className="col-sm-2 ml-3" name="patient_tel1" value={patient.patient_tel1} onChange={handleChange} defaultValue="010">
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
              <input type="text" className="col-sm-2" name="patient_tel2" value={patient.patient_tel2} onChange={handleChange} ref={register({required: true, minLength: 3, maxLength: 4})}></input>
              <div className="mr-2 ml-2 d-flex align-items-center">-</div>
              <input type="text" className="col-sm-2" name="patient_tel3" value={patient.patient_tel3} onChange={handleChange} ref={register({required: true, minLength: 3, maxLength: 4})}></input>
            </div>
          </div>
          <div className="Patient_item">
            <label className="col-sm-3 m-0">주소: </label>
            <div className="col-sm">
              <div className="row mb-2"> 
                <input type="text" className="col-sm-3 ml-3" name="patient_zipcode" value={patient.patient_zipcode} placeholder="우편번호" onChange={handleChange} readOnly></input>
                <React.Fragment>
                  <button className="button_team2_empty" onClick={openModal}>우편번호 찾기</button>
                  <Modal open={modalOpen} close={closeModal} send={sendModal}></Modal>
                </React.Fragment>   
              </div>
              <input type="text" className="col-sm mb-2" name="patient_address" placeholder="주소" value={patient.patient_address} onChange={handleChange} readOnly></input>
              <div className="row  no-gutters mb-2">
                <input type="text" className="col-sm mr-2" name="patient_detailaddress1" value={patient.patient_detailaddress1} placeholder="상세주소" onChange={handleChange}></input>
                <input type="text" className="col-sm" name="patient_detailaddress2" value={patient.patient_detailaddress2} placeholder="참고항목" onChange={handleChange} readOnly></input>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end"><button className="button_team2_fill" type="submit">등록</button></div>
        </form>
      </div>
      
    </div>
  );
}

export default PatientCreateForm;