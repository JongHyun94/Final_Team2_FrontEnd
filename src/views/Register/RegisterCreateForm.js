import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

function getDoctors() {
  const doctors = [];
  for (var i = 1; i <= 5; i++) {
    doctors.push({
      doctorName: "김더존(D13801001001)_" + i,
    });
  }
  return doctors;
}

function RegisterCreateForm(props) {

  const [startDate, setStartDate] = useState(new Date());

  // 담당의 상태

  const [doctors, setDoctors] = useState(getDoctors);

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
          selected={startDate}
          onChange={(date) => setStartDate(date)}
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
            <div>진료 시간</div>
            <div>
              <select className="RegisterCreateForm_input_select" value={newTime} onChange={changeNewTime}>
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
          <div>
            <div>접수 메모</div>
            <textarea className="RegisterCreateForm_input_textarea" value={newMemo} onChange={changeMemo}></textarea>
          </div>
        </form>
      </div>
      {/* 등록 버튼 */}
      <div className="RegisterCreateForm_button">
        <button className="button_team2_fill" onClick={createRegister}>등록</button>
      </div>
    </div>
  );
}
export default RegisterCreateForm;
