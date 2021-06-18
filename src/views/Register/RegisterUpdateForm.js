import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

function getDoctors() {
  const doctors = [];
  for (var i = 1; i <= 5; i++) {
    doctors.push({
      Doctor_Name: "김더존(D13801001001)_" + i,
    });
  }
  return doctors;
}

function getPatient() {
  const selectedPatient = {
    patientName : "이종현",
    patientBirth : "940606",
    patientTel : "010-9947-7430",
    doctorName : "김더존(D13801001001)_3",
    treatmentDate : "2021-06-17",
    treatmentTime : "10:00",
    treatmentMemo : "복통심함",
    communicationMemo : "15분 뒤에 들어감."
  };
  return selectedPatient;
}
function RegisterUpdateForm(props) {

  const updateRegister = (event) => {
    props.changeRegister();
  }
  const cancelRegisterForm = (event) => {
    props.cancelRegister();
  }

  // 환자 상태

  const [patient, setPatient] = useState(getPatient);

  // 진료 날짜 상태

  const [startDate, setStartDate] = useState(new Date(patient.treatmentDate));

  // 담당의 상태

  // 다른 의사들
  const [doctors, setDoctors] = useState(getDoctors);
  // 선택된 의사
  const [newDoctor, setNewDoctor] = useState(patient.doctorName);

  const changeNewDoctor = (event) => {
    setNewDoctor(event.target.value);
  };

  // 진료 시간 상태

  const [newTime, setNewTime] = useState(patient.treatmentTime);

  const changeNewTime = (event) => {
    setNewTime(event.target.value);
  };

  // 접수 메모 상태

  const [newMemo, setNewMemo] = useState(patient.treatmentMemo);

  const changeNewMemo = (event) => {
    setNewMemo(event.target.value);
  };

  // 의사소통 메모 상태

  const [newCommunication, setNewCommunication] = useState(patient.communicationMemo);

  const changeNewCommunication = (event) => {
    setNewCommunication(event.target.value);
  };

  return (
    <>
      {/* 상단 메뉴 이름 */}
      <div className="RegisterUpdateForm_header">
        접수 수정
      </div>
      {/* 하단 내용 */}
      <div className="RegisterUpdateForm_content border">
        {/* 접수 상세 내역 내용 */}
        <div className="RegisterUpdateForm_content_form">
          <form>
            <div className="RegisterUpdateForm_content_list">
              <div className="RegisterUpdateForm_content_list_label">
                환자명:
              </div>
              <div className="RegisterUpdateForm_content_list_input">
                <input className="RegisterUpdateForm_content_list_input_readOnly" type="text" value={patient.patientName} readOnly />
              </div>
            </div>
            <div className="RegisterUpdateForm_content_list">
              <div className="RegisterUpdateForm_content_list_label">
                생년월일:
              </div>
              <div className="RegisterUpdateForm_content_list_input">
                <input className="RegisterUpdateForm_content_list_input_readOnly" type="text" value={patient.patientBirth} readOnly />
              </div>
            </div>
            <div className="RegisterUpdateForm_content_list">
              <div className="RegisterUpdateForm_content_list_label">
                전화번호:
              </div>
              <div className="RegisterUpdateForm_content_list_input">
                <input className="RegisterUpdateForm_content_list_input_readOnly" type="text" value={patient.patientTel} readOnly/>
              </div>
            </div>
            <div className="RegisterUpdateForm_content_list">
              <div className="RegisterUpdateForm_content_list_label">
                담당의:
              </div>
              <div className="RegisterUpdateForm_content_list_input">
                <select className="RegisterUpdateForm_input_select" value={newDoctor} onChange={changeNewDoctor}>
                  <option disabled>담당의를 선택해주세요</option>
                  {/* 임의의 데이터 넣어서 출력 해보기 */}
                  {doctors.map(doctor => {
                    return (
                      <option key={doctor.Doctor_Name} value={doctor.Doctor_Name}>{doctor.Doctor_Name}</option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="RegisterUpdateForm_content_list">
              <div className="RegisterUpdateForm_content_list_label">
                진료 날짜:
              </div>
              <div className="RegisterUpdateForm_content_list_input">
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
              </div>
            </div>
            <div className="RegisterUpdateForm_content_list">
              <div className="RegisterUpdateForm_content_list_label">
                진료 시간:
              </div>
              <div className="RegisterUpdateForm_content_list_input">
                <select className="RegisterUpdateForm_input_select" value={newTime} onChange={changeNewTime}>
                  <option disabled>진료시간을 선택해주세요</option>
                  <option value="09:00">09:00</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="12:00">12:00</option>
                  <option value="13:00">13:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                  <option value="17:00">17:00</option>
                </select>
              </div>
            </div>
            <div className="RegisterUpdateForm_content_list">
              <div className="RegisterUpdateForm_content_list_label">
                접수 메모:
              </div>
              <div className="RegisterUpdateForm_content_list_input">
                <input type="text" value={newMemo} onChange={changeNewMemo} />
              </div>
            </div>
            <div className="RegisterUpdateForm_content_list">
              <div className="RegisterUpdateForm_content_list_label">
                의사소통 메모:
              </div>
              <div className="RegisterUpdateForm_content_list_input">
                <input type="text" value={newCommunication} onChange={changeNewCommunication} />
              </div>
            </div>
          </form>
          {/* 수정 취소 버튼 */}
          <div className="RegisterUpdateForm_content_button">
            <button className="button_team2_fill" type="submit" onClick={updateRegister} >수정</button>
            <button className="button_team2_empty" onClick={cancelRegisterForm} >취소</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default RegisterUpdateForm;
