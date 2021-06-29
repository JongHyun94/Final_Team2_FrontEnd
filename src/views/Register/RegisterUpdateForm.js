import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { getYear, getMonth } from "date-fns";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import { registerLocale } from "react-datepicker";
import ko from 'date-fns/locale/ko';

registerLocale("ko", ko);
const _ = require('lodash');
const years = _.range(1990, getYear(new Date()) + 1, 1);
const months = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];


function getDoctors() {
  const doctors = [];
  for (var i = 1; i <= 5; i++) {
    doctors.push({
      Doctor_Name: "의사" + i,
    });
  }
  return doctors;
}

// function getPatient() {
//   const selectedPatient = {
//     patientName : "이종현",
//     patientBirth : "940606",
//     patientTel : "010-9947-7430",
//     doctorName : "김더존(D13801001001)_3",
//     registerDate : "2021-06-17",
//     registerTime : "10:00",
//     registerMemo : "복통심함",
//     registerCommunication : "15분 뒤에 들어감."
//   };
//   return selectedPatient;
// }

function RegisterUpdateForm(props) {

  const updateRegister = (event) => {
    props.changeRegister();
  };
  const cancelRegisterForm = (event) => {
    props.cancelRegister();
  };

  // 환자 상태

  const [patient, setPatient] = useState();
  const noneRegister = {
    doctorName: "",
    patientName: "",
    registerId: "",
    registerDate: new Date(),
    registerState: "",
  };
  var selectedPatient;
  if(props.selectedPatient){
    selectedPatient = props.selectedPatient;
  } else {
    selectedPatient = noneRegister;
  }


  // 진료 날짜 상태

  const [startDate, setStartDate] = useState(Date.parse(selectedPatient.registerDate));

  // 담당의 상태

  // 다른 의사들
  const [doctors, setDoctors] = useState(getDoctors);
  // 선택된 의사
  const [newDoctor, setNewDoctor] = useState(selectedPatient.doctorName);

  const changeNewDoctor = (event) => {
    setNewDoctor(event.target.value);
  };

  // 진료 시간 상태

  const [newTime, setNewTime] = useState(selectedPatient.registerTime);

  const changeNewTime = (event) => {
    setNewTime(event.target.value);
  };

  // 접수 메모 상태

  const [newMemo, setNewMemo] = useState(selectedPatient.registerMemo);

  const changeNewMemo = (event) => {
    setNewMemo(event.target.value);
  };

  // 의사소통 메모 상태

  const [newCommunication, setNewCommunication] = useState(selectedPatient.registerCommunication);

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
                <input className="RegisterUpdateForm_content_list_input_readOnly" type="text" value={selectedPatient.patientName} readOnly />
              </div>
            </div>
            <div className="RegisterUpdateForm_content_list">
              <div className="RegisterUpdateForm_content_list_label">
                생년월일:
              </div>
              <div className="RegisterUpdateForm_content_list_input">
                <input className="RegisterUpdateForm_content_list_input_readOnly" type="text" value={selectedPatient.patientBirth} readOnly />
              </div>
            </div>
            <div className="RegisterUpdateForm_content_list">
              <div className="RegisterUpdateForm_content_list_label">
                성별:
              </div>
              <div className="RegisterRead_content_list_input">
                <input className="RegisterRead_content_list_input_readOnly" type="text" value={selectedPatient.patientSex} readOnly/>
              </div>
            </div>
            <div className="RegisterUpdateForm_content_list">
              <div className="RegisterUpdateForm_content_list_label">
                전화번호:
              </div>
              <div className="RegisterUpdateForm_content_list_input">
                <input className="RegisterUpdateForm_content_list_input_readOnly" type="text" value={selectedPatient.patientTel} readOnly />
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
                {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}
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
            {/* <div className="RegisterUpdateForm_content_list">
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
            </div> */}
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
            <button className="button_team2_fill" type="submit" onClick={updateRegister} >수정</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default RegisterUpdateForm;
