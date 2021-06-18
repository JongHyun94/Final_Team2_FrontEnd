import React, { Component, useState } from "react";
import moment from "moment";
import TimeTable from "react-timetable-events";

function RegisterTimeTable(props) {
  const [events, setEvents] = useState({
    events: {
      monday: [
        {
          id: 1,
          name: "환자1",
          type: "custom",
          startTime: moment("2021-06-17T11:00:00"),
          endTime: moment("2021-06-17T12:00:00")
        },
      ],
      tuesday: [

      ],
      wednesday: [

      ],
      thursday: [

      ],
      friday: [

      ],
      saturday: [

      ],
      sunday: []
    }
  });

  const renderHour = (hour, defaultAttributes, styles) => {
    return (
      <div {...defaultAttributes} key={hour}>
        {hour}h
      </div>
    );
  };

  const renderEvent = (event, defaultAttributes, styles) => {
    return (
      <div {...defaultAttributes} title={event.name} key={event.id}>
        <span className={styles.event_info}>[ {event.name} ]</span>
        <span className={styles.event_info}>
          {event.startTime.format("HH:mm")} - {event.endTime.format("HH:mm")}
        </span>
      </div>
    );
  };

  return (
    <div className="RegisterTimeTable_content">
      <TimeTable
          events={events.events}
          renderHour={renderHour}
          renderEvent={renderEvent}
          hoursInterval={[9, 18]}
          timeLabel="접수 내역"
        />
      {/* <table className="table table-bordered RegisterTimeTable_content">
        <thead>
          <tr>
            <td></td>
            <th>월</th>
            <th>화</th>
            <th>수</th>
            <th>목</th>
            <th>금</th>
            <th>토</th>
            <th>일</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>09:00</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>10:00</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>11:00</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>12:00</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>13:00</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>14:00</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>15:00</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>16:00</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>17:00</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>18:00</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table> */}
    </div>
  );
}
export default RegisterTimeTable;
