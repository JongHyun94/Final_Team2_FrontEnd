import DatePicker from "react-datepicker";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { getYear, getMonth } from "date-fns";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import { registerLocale } from "react-datepicker";
import ko from 'date-fns/locale/ko';
import { updateRegister } from "apis/register";
import moment from "moment";

registerLocale("ko", ko);

const _ = require('lodash');
const years = _.range(1990, getYear(new Date()) + 1, 1);
const months = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];

function RegisterUpdateForm(props) {
  const noneRegister = {
    register_id: "",
    register_patient_id: "",
    register_user_id: "",
    register_regdate: "",
    register_date: new Date(),
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
  var selectedPatient;
  if (props.selectedPatient) {
    selectedPatient = props.selectedPatient;
  } else {
    selectedPatient = noneRegister;
  }
  const noneDoctor = {
    user_id: "",
    user_hospital_id: "",
    user_password: "",
    user_name: "",
    user_ssn: "",
    user_tel: "",
    user_email: "",
    user_sex: "",
    user_zipcode: "",
    user_address: "",
    user_detailaddress1: "",
    user_detailaddress2: "",
    user_regdate: "",
    user_enabled: "",
    user_authority: "",
  };
  var doctors;
  if (props.doctors) {
    doctors = props.doctors;
  } else {
    doctors = noneDoctor;
  }

  //-------------------------------------------------------------  
  //상태 선언
  //-------------------------------------------------------------

  // 진료 날짜 상태

  const [startDate, setStartDate] = useState(new Date());

  // 담당의 상태

  // 다른 의사들
  const [doctorsList, setDoctorsList] = useState(doctors);
  // 선택된 의사
  const [newDoctor, setNewDoctor] = useState(selectedPatient.register_user_id);
  const changeNewDoctor = (event) => {
    setNewDoctor(event.target.value);
  };

  // 접수 메모 상태
  const [newMemo, setNewMemo] = useState(selectedPatient.register_memo);
  const changeNewMemo = (event) => {
    setNewMemo(event.target.value);
  };

  // 의사소통 메모 상태
  const [newCommunication, setNewCommunication] = useState(selectedPatient.register_communication);
  const changeNewCommunication = (event) => {
    setNewCommunication(event.target.value);
  };
  //-------------------------------------------------------------
  //버튼 이벤트 처리
  //-------------------------------------------------------------

  const updateRegisterBtn = async (event) => {
    try {
      let newRegister = {
        register_id: selectedPatient.register_id,
        register_patient_id: selectedPatient.register_patient_id,
        register_user_id: newDoctor,
        register_regdate: selectedPatient.register_regdate,
        register_date: moment(startDate).format("yyyy-MM-DD HH:mm"),
        register_starttime: "",
        register_memo: newMemo,
        register_communication: newCommunication,
        register_state: selectedPatient.register_state,
      };
      console.log("new",newRegister);
      var list = await updateRegister(newRegister);
      console.log(list.data.result);
      props.changeRegister();
    } catch (e) {
      console.log(e);
    }
  };
  const cancelRegisterForm = (event) => {
    props.cancelRegister();
  };

  //-------------------------------------------------------------
  //마운트 및 언마운트에 실행할 내용
  //-------------------------------------------------------------

  //-------------------------------------------------------------
  //렌더링 내용
  //-------------------------------------------------------------
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
                <input className="RegisterUpdateForm_content_list_input_readOnly" type="text" value={selectedPatient.patient_name} readOnly />
              </div>
            </div>
            <div className="RegisterUpdateForm_content_list">
              <div className="RegisterUpdateForm_content_list_label">
                생년월일:
              </div>
              <div className="RegisterUpdateForm_content_list_input">
                <input className="RegisterUpdateForm_content_list_input_readOnly" type="text" value={selectedPatient.patient_ssn? selectedPatient.patient_ssn.substring(0,6) : selectedPatient.patient_ssn} readOnly />
              </div>
            </div>
            <div className="RegisterUpdateForm_content_list">
              <div className="RegisterUpdateForm_content_list_label">
                성별:
              </div>
              <div className="RegisterRead_content_list_input">
                <input className="RegisterRead_content_list_input_readOnly" type="text" value={selectedPatient.patient_sex} readOnly />
              </div>
            </div>
            <div className="RegisterUpdateForm_content_list">
              <div className="RegisterUpdateForm_content_list_label">
                전화번호:
              </div>
              <div className="RegisterUpdateForm_content_list_input">
                <input className="RegisterUpdateForm_content_list_input_readOnly" type="text" value={selectedPatient.patient_tel} readOnly />
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
                  {doctorsList.map(doctor => {
                    return (
                      <option key={doctor.user_id} value={doctor.user_id}>{doctor.user_name}</option>
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
                <DatePicker
                  renderCustomHeader={({
                    date,
                    changeYear,
                    changeMonth,
                    decreaseMonth,
                    increaseMonth,
                    prevMonthButtonDisabled,
                    nextMonthButtonDisabled
                  }) => (
                    <div
                      style={{
                        margin: 10,
                        display: "flex",
                        justifyContent: "center"
                      }}
                    >
                      <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                        {"<"}
                      </button>
                      <select
                        value={getYear(date)}
                        onChange={({ target: { value } }) => changeYear(value)}
                      >
                        {years.map(option => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>

                      <select
                        value={months[getMonth(date)]}
                        onChange={({ target: { value } }) =>
                          changeMonth(months.indexOf(value))
                        }
                      >
                        {months.map(option => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>

                      <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                        {">"}
                      </button>
                    </div>
                  )}
                  locale="ko"
                  showTimeSelect
                  selected={startDate}
                  onChange={(date) => {
                    setStartDate(date);
                  }
                  }
                  timeIntervals={15}
                  timeCaption="시간"
                  minTime={setHours(setMinutes(new Date(), 0), 9)}
                  maxTime={setHours(setMinutes(new Date(), 45), 17)}
                  dateFormat="yyyy-MM-dd h:mm"
                />
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
            <button className="button_team2_empty" onClick={cancelRegisterForm} >취소</button>
            <button className="button_team2_fill" type="submit" onClick={updateRegisterBtn} >수정</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default RegisterUpdateForm;
