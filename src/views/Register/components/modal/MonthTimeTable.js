import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import moment from "moment";
import { registerLocale } from "react-datepicker";
import ko from 'date-fns/locale/ko';
import "./MonthTimeTable.css";

function MonthTimeTable(props) {
  const [today, setToday] = useState(moment());
  console.log(today);
  return (
    <div className="MonthTimeTable">
      <div className="MonthTimeTable_btns">
        <button className="button_team2_empty">&lt;</button>
        <button className="button_team2_fill">오늘</button>
        <button className="button_team2_empty">&gt;</button>
      </div>
      <div className="yearAndMonth">
        
      </div>
      <div className="days">
        <div className="day button_team2_fill">일</div>
        <div className="day button_team2_empty">월</div>
        <div className="day button_team2_empty">화</div>
        <div className="day button_team2_empty">수</div>
        <div className="day button_team2_empty">목</div>
        <div className="day button_team2_empty">금</div>
        <div className="day button_team2_empty">토</div>
      </div>
      <div className="dates">

      </div>
    </div>
  );
}
export default MonthTimeTable;
