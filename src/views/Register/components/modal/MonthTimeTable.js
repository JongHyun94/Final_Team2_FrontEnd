import React, { useEffect, useState } from "react";
import moment from "moment";
import "./MonthTimeTable.css";

function MonthTimeTable(props) {
  const [today, setToday] = useState(new Date());
  let todayYear = today.getFullYear();
  let todayMonth = (today.getMonth() + 1);

  const thisYaerAndMonth = todayYear + " 년 " + todayMonth + " 월";

  const calCalender = (today) => {
    const thisYear = today.getFullYear();
    const thisMonth = today.getMonth() + 1;

    const prevLast = new Date(thisYear, thisMonth - 1, 0);
    const thisLast = new Date(thisYear, thisMonth, 0);

    const prevLastDate = prevLast.getDate();
    const prevLastDay = prevLast.getDay();

    const todayLastDate = thisLast.getDate();
    const todayLastDay = thisLast.getDay();

    const prevDates = [];
    const thisDates = [...Array(todayLastDate + 1).keys()].slice(1);
    const nextDates = [];

    if (prevLastDay !== 6) {
      for (let i = 0; i < prevLastDay + 1; i++) {
        prevDates.unshift(prevLastDate - i);
      }
    }

    for (let i = 1; i < 7 - todayLastDay; i++) {
      nextDates.push(i);
    }
    const dates = prevDates.concat(thisDates, nextDates);

    return dates;
  };
  const [dates, setDates] = useState(calCalender(today));

  // 버튼 이벤트 함수
  const prevMonth = () => {
    today.setMonth(today.getMonth() - 1);
    setToday(today);
    setDates(calCalender(today));
  };
  const nextMonth = () => {
    today.setMonth(today.getMonth() + 1);
    setToday(today);
    setDates(calCalender(today));
  };
  const goToday = () => {
    setToday(new Date());
  };


  useEffect(() => {
    setDates(calCalender(today));
  }, [today]);

  let selectToday = new Date();
  let selectTodayYear = selectToday.getFullYear();
  let selectTodayMonth = selectToday.getMonth() + 1;
  let selectTodayDate = selectToday.getDate();

  return (
    <div className="MonthTimeTable">
      <div className="MonthTimeTable_btns">
        <button className="button_team2_empty MonthTimeTable_btn"
          onClick={prevMonth}
        >
          &lt;
        </button>
        <button className="button_team2_fill MonthTimeTable_btnToday"
          onClick={goToday}
        >
          오 늘
        </button>
        <button className="button_team2_empty MonthTimeTable_btn"
          onClick={nextMonth}
        >
          &gt;
        </button>
      </div>
      <div className="yearAndMonth">
        {thisYaerAndMonth}
      </div>
      <div className="days">
        <div className="day">일</div>
        <div className="day dayN">월</div>
        <div className="day dayN">화</div>
        <div className="day dayN">수</div>
        <div className="day dayN">목</div>
        <div className="day dayN">금</div>
        <div className="day">토</div>
      </div>
      <div className="dates">
        {dates.map((date, index) => {
          if (todayYear === selectTodayYear
            && todayMonth === selectTodayMonth
            && date === selectTodayDate) {
            return (
              <div className="date">
                <div className="thisDate">
                  {date}
                </div>
                <div>

                </div>
              </div>
            )
          } else {
            if (index < 7 && date > 7) {
              return (
                <div className="date" onDoubleClick={prevMonth}>
                  <div className="otherDate1">
                    {date}
                  </div>
                  <div>

                  </div>
                </div>
              )
            }
            else if (index > 28 && date < 7) {
              return (
                <div className="date" onDoubleClick={nextMonth}>
                  <div className="otherDate2">
                    {date}
                  </div>
                  <div>

                  </div>
                </div>
              )
            } else {
              return (
                <div className="date">
                  <div className="otherDate">
                    {date}
                  </div>
                  <div>

                  </div>
                </div>
              )
            }
          }
        })}
      </div>
    </div>
  );
}
export default MonthTimeTable;
