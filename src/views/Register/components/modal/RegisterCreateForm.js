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
const months = ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월']; 

function getDoctors(doctors1) {
  const doctors = [];
  doctors1.map((doctor)=>{
    doctors.push({
      doctorName: doctor
    })
  });
  // for (var i = 1; i <= 5; i++) {
  //   doctors.push({
  //     doctorName: "김더존(D13801001001)_" + i,
  //   });
  // }
  return doctors;
}

function RegisterCreateForm(props) {

  const [startDate, setStartDate] = useState(new Date());

  // 담당의 상태
  const {doctors1} = props;
  const [doctors, setDoctors] = useState(()=>getDoctors(doctors1));

  const [newDoctor, setNewDoctor] = useState("담당의를 선택해주세요");

  const changeNewDoctor = (event) => {
    setNewDoctor(event.target.value);
  };

  // 진료 시간 상태

  const [newTime, setNewTime] = useState("진료시간을 선택해주세요");

  const changeNewTime = (event) => {
    setNewTime(event.target.value);
  };

  // 메모 상태 
  const [newMemo, setNewMemo] = useState("");

  const changeMemo = (event) => {
    setNewMemo(event.target.value);
  };

  // 등록 버튼
  const createRegister = (event) => {
    event.preventDefault();
    console.log("등록");
  };

  return (
    <div className="RegisterCreateForm_content border">
      {/* 달력 */}
      <div className="RegisterCreateForm_cal">
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
          maxTime={setHours(setMinutes(new Date(), 0), 17)}
          dateFormat="yyyy-MM-dd h:mm"
          inline
        />
      </div>
      {/* content */}
      <div className="RegisterCreateForm_input">
        <form>
          <div>
            <div>의사 이름</div>
            <div>
              <select className="RegisterCreateForm_input_select" value={newDoctor} onChange={changeNewDoctor}>
                <option disabled>담당의를 선택해주세요</option>
                {/* 임의의 데이터 넣어서 출력 해보기 */}
                {doctors.map(doctor => {
                  return (
                    <option key={doctor.doctorName} value={doctor.doctorName}>{doctor.doctorName}</option>
                  );
                })}
              </select>
            </div>
          </div>
          <div>
            <div>접수 메모</div>
            <textarea className="RegisterCreateForm_input_textarea" value={newMemo} onChange={changeMemo}></textarea>
          </div>
        </form>
      </div>
      {/* 등록 버튼 */}
      {/* <div className="RegisterCreateForm_button">
        <button className="button_team2_fill" onClick={createRegister}>등록</button>
      </div> */}
    </div>
  );
}
export default RegisterCreateForm;
