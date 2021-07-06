
function RegisterRead(props) {
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

    user_name: ""
  };
  var selectedPatient
  if (props.selectedPatient) {
    selectedPatient = props.selectedPatient;
  } else {
    selectedPatient = noneRegister;
  }

  const showUpdateForm = (event) => {
    props.changeRegister();
  }


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
                <input className="RegisterRead_content_list_input_readOnly" type="text" value={selectedPatient.patient_name} readOnly />
              </div>
            </div>
            <div className="RegisterRead_content_list">
              <div className="RegisterRead_content_list_label">
                생년월일:
              </div>
              <div className="RegisterRead_content_list_input">
                <input className="RegisterRead_content_list_input_readOnly" type="text" value={selectedPatient.patient_ssn} readOnly />
              </div>
            </div>
            <div className="RegisterRead_content_list">
              <div className="RegisterRead_content_list_label">
                성별:
              </div>
              <div className="RegisterRead_content_list_input">
                <input className="RegisterRead_content_list_input_readOnly" type="text" value={selectedPatient.patient_sex} readOnly />
              </div>
            </div>
            <div className="RegisterRead_content_list">
              <div className="RegisterRead_content_list_label">
                전화번호:
              </div>
              <div className="RegisterRead_content_list_input">
                <input className="RegisterRead_content_list_input_readOnly" type="text" value={selectedPatient.patient_tel} readOnly />
              </div>
            </div>
            <div className="RegisterRead_content_list">
              <div className="RegisterRead_content_list_label">
                담당의:
              </div>
              <div className="RegisterRead_content_list_input">
                <input className="RegisterRead_content_list_input_readOnly" type="text" value={selectedPatient.user_name} readOnly />
              </div>
            </div>
            <div className="RegisterRead_content_list">
              <div className="RegisterRead_content_list_label">
                진료 날짜:
              </div>
              <div className="RegisterRead_content_list_input">
                <input className="RegisterRead_content_list_input_readOnly" type="text" value={selectedPatient.register_date} readOnly />
              </div>
            </div>
            <div className="RegisterRead_content_list">
              <div className="RegisterRead_content_list_label">
                접수 메모:
              </div>
              <div className="RegisterRead_content_list_input">
                <input className="RegisterRead_content_list_input_readOnly" type="text" value={selectedPatient.register_memo} readOnly />
              </div>
            </div>
            <div className="RegisterRead_content_list">
              <div className="RegisterRead_content_list_label">
                의사소통 메모:
              </div>
              <div className="RegisterRead_content_list_input">
                <input className="RegisterRead_content_list_input_readOnly" type="text" value={selectedPatient.register_communication} readOnly />
              </div>
            </div>
          </form>
          {/* 수정 취소 버튼 */}
          <div className="RegisterRead_content_button">
            {selectedPatient.register_state === "대기" ? <button className="button_team2_fill" onClick={showUpdateForm}>수정</button> : false}
          </div>
        </div>
      </div>
    </>
  );
}
export default RegisterRead;
