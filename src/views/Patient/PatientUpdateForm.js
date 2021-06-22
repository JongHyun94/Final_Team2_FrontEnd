import { Modal } from "./AddressModal";
import React, { useContext, useState } from "react";
import PatientContext from "./PatientContext";

function PatientUpdateForm(props) {
  // const patientContext = useContext(PatientContext);
  // const id = patientContext.patientId;

  // 환자 코드
  const patientId = props.patientId;
  console.log("patientId: ",patientId);

  // 환자 상태
  const [patient, setPatient] = useState({
    patientId: "",
    patientName: "홍길동",
    patientSsn: "910612",
    patientSex: "M",
    patientTel1: "010",
    patientTel2: "1234",
    patientTel3: "5678", 
    paitentZipcode: "01234", 
    paitentAddress: "서울시 송파구", 
    paitentDetailAddress1: "12층 1강의실", 
    paitentDetailAddress2: "아이티벤처타워",
    patientRegDate: "2021-06-01"
  });

  const handleChange = (event) => {
    setPatient({
      ...patient,
      patientId: props.patientId,
      [event.target.name]: event.target.value
    });
  };

  // 환자 정보 수정
  const handleUpdate = (event) => {
    event.preventDefault();
    const updatePatient = {...patient};
    console.log("환자 정보 수정: ", updatePatient);
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
      paitentZipcode: data.zonecode, 
      paitentAddress: data.address
    })
    if (data.buildingName === "") {
      setPatient(prevPatient => {
        return {
          ...prevPatient,
          paitentDetailAddress2: data.bname          
        };
      });
    } else {
      setPatient(prevPatient => {
        return {
          ...prevPatient,
          paitentDetailAddress2: data.bname + ", " + data.buildingName   
        };
      });
    }
  };

  return (
    <div>
      <div className={`title`}>환자 정보 수정</div>
      <div className={`border p-3 PatientUpdateForm`}>
        <form>
          <div className="row align-items-center mb-2">
            <label className="col-sm-3 pl-3 p-0 m-0">환자 코드: </label>
            <div className="col-sm d-flex ">{props.patientId}</div>
          </div>
          <div className="row align-items-center mb-2">
            <label className="col-sm-3 pl-3 p-0 m-0">환자명: </label>
            <div className="col-sm">{patientId && patient.patientName}</div>
          </div>
          <div className="row align-items-center mb-2">
            <label className="col-sm-3 pl-3 p-0 m-0">생년 월일: </label>
            <div className="col-sm">{patientId && patient.patientSsn}</div>
          </div>
          <div className="row align-items-center mb-2">
            <label className="col-sm-3 pl-3 p-0 m-0">성별: </label>
            <div className="col-sm">{patientId && patient.patientSex}</div>
          </div>
          <div className="row align-items-center mb-2">
            <label className="col-sm-3 m-0">전화 번호: </label>
            <div className="row col-sm">
              <select className="col-sm-2 ml-3" name="patientTel1" value={patientId && patient.patientTel1} onChange={handleChange}>
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
              <input type="text" className="col-sm-2" name="patientTel2" value={patientId && patient.patientTel2} onChange={handleChange}></input>
              <div className="mr-2 ml-2 d-flex align-items-center">-</div>
              <input type="text" className="col-sm-2" name="patientTel3" value={patientId && patient.patientTel3} onChange={handleChange}></input>
            </div>
          </div>
          <div className="row">
            <label className="col-sm-3 m-0">주소: </label>
            <div className="col-sm">
              <div className="row mb-2"> 
                <input type="text" className="col-sm-2 ml-3" name="paitentZipcode" value={patientId && patient.paitentZipcode} placeholder="우편번호" readOnly></input>
                <React.Fragment>
                  <button className="button_team2_empty" onClick={openModal}>우편번호 찾기</button>
                  <Modal open={modalOpen} close={closeModal} send={sendModal}></Modal>
                </React.Fragment>   
              </div>
              <input type="text" className="col-sm-5 mb-2" name="paitentAddress" value={patientId && patient.paitentAddress} placeholder="주소" readOnly></input>
              <div className="row no-gutters mb-2">
                <input type="text" className="col-sm mr-2" name="paitentDetailAddress1" value={patientId && patient.paitentDetailAddress1} placeholder="상세주소" onChange={handleChange}></input>
                <input type="text" className="col-sm" name="paitentDetailAddress2" value={patientId && patient.paitentDetailAddress2} placeholder="참고항목" readOnly></input>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label pl-3 p-0">등록 날짜: </label>
            <div className="col-sm d-flex align-items-center">{patientId && patient.patientRegDate}</div>
          </div>
          <div className="d-flex justify-content-end"><button className="button_team2_fill" onClick={handleUpdate}>수정</button></div>
        </form>
      </div>
    </div>
  );
}

export default PatientUpdateForm;