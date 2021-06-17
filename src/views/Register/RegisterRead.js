import { useState } from "react";

// 임의의 환자 정보 
function getPatient(){
  const patient = {
    Patient_Name: "이종현",
    Patient_Birth: "940606",
    Patient_Tel: "010-9947-7430",
    Doctor_Name: "김더존(D13801001001)",
    Treatment_Date: "2021-06-17",
    Treatment_Time: "14:00",
    Treatment_Memo: "메모입니다.",
    Communication_Memo: "의사소통 해요",
  };
  return patient;
}

function RegisterRead(props) {
  const [patient, setPatient] = useState(getPatient);
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
                <input className="RegisterRead_content_list_input_readOnly" type="text" value={patient.Patient_Name} readOnly/>
              </div>
            </div>
            <div className="RegisterRead_content_list">
              <div className="RegisterRead_content_list_label">
                생년월일:
              </div>
              <div className="RegisterRead_content_list_input">
                <input className="RegisterRead_content_list_input_readOnly" type="text" value={patient.Patient_Birth} readOnly/>
              </div>
            </div>
            <div className="RegisterRead_content_list">
              <div className="RegisterRead_content_list_label">
                전화번호:
              </div>
              <div className="RegisterRead_content_list_input">
                <input className="RegisterRead_content_list_input_readOnly" type="text" value={patient.Patient_Tel} readOnly/>
              </div>
            </div>
            <div className="RegisterRead_content_list">
              <div className="RegisterRead_content_list_label">
                담당의:
              </div>
              <div className="RegisterRead_content_list_input">
                <input className="RegisterRead_content_list_input_readOnly" type="text" value={patient.Doctor_Name} readOnly/>  
              </div>
            </div>
            <div className="RegisterRead_content_list">
              <div className="RegisterRead_content_list_label">
                진료 날짜:
              </div>
              <div className="RegisterRead_content_list_input">
                <input className="RegisterRead_content_list_input_readOnly"  type="date" value={patient.Treatment_Date} readOnly/>
              </div>
            </div>
            <div className="RegisterRead_content_list">
              <div className="RegisterRead_content_list_label">
                진료 시간:
              </div>
              <div className="RegisterRead_content_list_input">
                <input className="RegisterRead_content_list_input_readOnly" type="text" value={patient.Treatment_Time} readOnly/>  
              </div>
            </div>
            <div className="RegisterRead_content_list">
              <div className="RegisterRead_content_list_label">
                접수 메모:
              </div>
              <div className="RegisterRead_content_list_input">
                <input className="RegisterRead_content_list_input_readOnly" type="text" value={patient.Treatment_Memo} />
              </div>
            </div>
            <div className="RegisterRead_content_list">
              <div className="RegisterRead_content_list_label">
                의사소통 메모:
              </div>
              <div className="RegisterRead_content_list_input">
                <input className="RegisterRead_content_list_input_readOnly" type="text" value={patient.Communication_Memo} />
              </div>
            </div>
          </form>
          {/* 수정 취소 버튼 */}
          <div className="RegisterRead_content_button">
            <button className="button_team2_fill">수정</button>
            <button className="button_team2_empty">취소</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default RegisterRead;
