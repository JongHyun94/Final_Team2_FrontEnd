import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
function RegisterCreateForm(props) {

  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
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
              <select className="RegisterCreateForm_input_select">
                <option>김의사</option>
              </select>
            </div>
          </div>
          <div>
            <div>진료 시간</div>
            <div>
              <select className="RegisterCreateForm_input_select">
                <option>14:00</option>
                <option>15:00</option>
              </select>
            </div>
          </div>
          <div>
            <div>접수 메모</div>
            <textarea className="RegisterCreateForm_input_textarea"></textarea>
          </div>
        </form>
      </div>
      {/* 등록 버튼 */}
      <div className="RegisterCreateForm_button">
        <button className="btn btn-primary btn-sm">등록</button>
      </div>
    </div>
  );
}
export default RegisterCreateForm;
