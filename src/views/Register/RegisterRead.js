import { useEffect, useState } from "react";

// 임의의 환자 정보 
function getPatient(){
  const patient = {
    patientName: "이종현",
    patientBirth: "940606",
    patientTel: "010-9947-7430",
    doctorName: "김더존(D13801001001)",
    registerDate: "2021-06-17",
    registerTime: "14:00",
    registerMemo: "메모입니다.",
    registerCommunication: "의사소통 해요",
  };
  return patient;
}

function RegisterRead(props) {

  const selectedPatient = props.selectedPatient;

  const showUpdateForm = (event) => {
    props.changeRegister();
  }
  
  const [patient, setPatient] = useState();

  return (
    <>
      {/* 상단 메뉴 이름 */}
      <div className="RegisterRead_header">
        접수 상세 내역
      </div>
      {/* 하단 내용 */}
      <div className="RegisterRead_content border">
        {/* 접수 상세 내역 내용 */}
        <div className="RegisterRead_content_form">
          <form>
            <div className="RegisterRead_content_list">
              <div className="RegisterRead_content_list_label">
                환자명:
              </div>
              <div className="RegisterRead_content_list_input">
                <input className="RegisterRead_content_list_input_readOnly" type="text" value={selectedPatient.patientName} readOnly/>
              </div>
            </div>
            <div className="RegisterRead_content_list">
              <div className="RegisterRead_content_list_label">
                생년월일:
              </div>
              <div className="RegisterRead_content_list_input">
                <input className="RegisterRead_content_list_input_readOnly" type="text" value={selectedPatient.patientBirth} readOnly/>
              </div>
            </div>
            <div className="RegisterRead_content_list">
              <div className="RegisterRead_content_list_label">
                전화번호:
              </div>
              <div className="RegisterRead_content_list_input">
                <input className="RegisterRead_content_list_input_readOnly" type="text" value={selectedPatient.patientTel} readOnly/>
              </div>
            </div>
            <div className="RegisterRead_content_list">
              <div className="RegisterRead_content_list_label">
                담당의:
              </div>
              <div className="RegisterRead_content_list_input">
                <input className="RegisterRead_content_list_input_readOnly" type="text" value={selectedPatient.doctorName} readOnly/>  
              </div>
            </div>
            <div className="RegisterRead_content_list">
              <div className="RegisterRead_content_list_label">
                진료 날짜:
              </div>
              <div className="RegisterRead_content_list_input">
                <input className="RegisterRead_content_list_input_readOnly"  type="date" value={selectedPatient.registerDate} readOnly/>
              </div>
            </div>
            <div className="RegisterRead_content_list">
              <div className="RegisterRead_content_list_label">
                진료 시간:
              </div>
              <div className="RegisterRead_content_list_input">
                <input className="RegisterRead_content_list_input_readOnly" type="text" value={selectedPatient.registerTime} readOnly/>  
              </div>
            </div>
            <div className="RegisterRead_content_list">
              <div className="RegisterRead_content_list_label">
                접수 메모:
              </div>
              <div className="RegisterRead_content_list_input">
                <input className="RegisterRead_content_list_input_readOnly" type="text" value={selectedPatient.registerMemo} readOnly/>
              </div>
            </div>
            <div className="RegisterRead_content_list">
              <div className="RegisterRead_content_list_label">
                의사소통 메모:
              </div>
              <div className="RegisterRead_content_list_input">
                <input className="RegisterRead_content_list_input_readOnly" type="text" value={selectedPatient.registerCommunication} readOnly/>
              </div>
            </div>
          </form>
          {/* 수정 취소 버튼 */}
          <div className="RegisterRead_content_button">
            <button className="button_team2_fill" onClick={showUpdateForm}>수정</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default RegisterRead;
