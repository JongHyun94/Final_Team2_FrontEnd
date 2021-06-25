import { Modal } from "./AddressModal";
import React, { useEffect, useState } from "react";

function PatientUpdateForm(props) {
  // 환자 상태
  const [patient, setPatient] = useState({});

  const handleChange = (event) => {
    setPatient({
      ...patient,
      patientId: props.patient.patientId,
      [event.target.name]: event.target.value
    });
  };

  useEffect(() => {
    setPatient({
      ...patient,
      patientId: props.patient.patientId,
      patientName: props.patient.patientName,
      patientSsn: props.patient.patientSsn,
      patientSex: props.patient.patientSex,
      patientTel1: props.patient.patientTel1,
      patientTel2: props.patient.patientTel2,
      patientTel3: props.patient.patientTel3, 
      patientZipcode: props.patient.patientZipcode, 
      patientAddress: props.patient.patientAddress, 
      patientDetailAddress1: props.patient.patientDetailAddress1, 
      patientDetailAddress2: props.patient.patientDetailAddress2,
      patientRegDate: props.patient.patientRegDate
    })
  }, [props]);

  // 환자 정보 수정
  const handleUpdate = (event) => {
    event.preventDefault();
    const updatePatient = {...patient};
    console.log("환자 정보 수정: ", updatePatient);
    // props.changePatient(updatePatient);
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
    console.log("send1 실행", data);
    setPatient({
      ...patient,
      patientZipcode: data.zonecode, 
      patientAddress: data.address
    })
    if (data.buildingName === "") {
      setPatient(prevPatient => {
        return {
          ...prevPatient,
          patientDetailAddress2: data.bname          
        };
      });
    } else {
      setPatient(prevPatient => {
        return {
          ...prevPatient,
          patientDetailAddress2: data.bname + ", " + data.buildingName   
        };
      });
    }
  };

  return (
    <div>
      <div className={`Patient_title`}>환자 정보 수정</div>
      <div className={`border p-3`}>
        <form>
          <div className="Patient_item">
            <label className="col-sm-3 pl-3 p-0 m-0">환자 코드: </label>
            <div className="col-sm d-flex ">{patient.patientId}</div>
          </div>
          <div className="Patient_item">
            <label className="col-sm-3 pl-3 p-0 m-0">환자명: </label>
            <div className="col-sm">
              <input type="text" name="patientName" value={patient.patientName} placeholder="환자명" onChange={handleChange}></input>
            </div>
          </div>
          <div className="Patient_item">
            <label className="col-sm-3 pl-3 p-0 m-0">생년월일: </label>
            <div className="col-sm">{patient.patientSsn}</div>
          </div>
          <div className="Patient_item">
            <label className="col-sm-3 pl-3 p-0 m-0">성별: </label>
            <div className="col-sm d-flex align-items-center">
              <input type="radio" name="patientSex" value="M" checked={patient.patientSex === "M"? true : false} onChange={handleChange}></input>
              <label className="ml-3 mb-0">남</label>
            </div>
            <div className="col-sm d-flex align-items-center">
              <input type="radio" name="patientSex" value="F" checked={patient.patientSex === "F"? true : false} onChange={handleChange}></input>
              <label className="ml-3 mb-0">여</label>
            </div>
          </div>
          <div className="Patient_item">
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
          <div className="Patient_item">
            <label className="col-sm-3 m-0">주소: </label>
            <div className="col-sm">
              <div className="row mb-2"> 
                <input type="text" className="col-sm-3 ml-3" name="patientZipcode" value={patient.patientZipcode} placeholder="우편번호" readOnly></input>
                <React.Fragment>
                  <button className="button_team2_empty" onClick={openModal}>우편번호 찾기</button>
                  <Modal open={modalOpen} close={closeModal} send={sendModal}></Modal>
                </React.Fragment>   
              </div>
              <input type="text" className="col-sm mb-2" name="patientAddress" value={patient.patientAddress} placeholder="주소" readOnly></input>
              <div className="row no-gutters mb-2">
                <input type="text" className="col-sm mr-2" name="patientDetailAddress1" value={patient.patientDetailAddress1} placeholder="상세주소" onChange={handleChange}></input>
                <input type="text" className="col-sm" name="pattentDetailAddress2" value={patient.patientDetailAddress2} placeholder="참고항목" readOnly></input>
              </div>
            </div>
          </div>
          <div className="Patient_item">
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