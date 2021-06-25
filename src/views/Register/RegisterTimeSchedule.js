import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "./Register.css";
import moment from "moment";
import RegisterCreateModal from "./components/modal/RegisterCreateModal";
import { registerLocale } from "react-datepicker";
import ko from 'date-fns/locale/ko';

registerLocale("ko", ko);

function RegisterTimeSchedule(props) {
  const hours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
  const mins = ["0", "15", "30", "45"];
  const doctors = ["의사1", "의사2", "의사3", "의사4", "의사5", "의사6"];
  const _6_24_register = [
    {
      doctorName: "의사1",
      patientName: "환자1",
      registerId: "1",
      registerDate: "2021-06-24 10:30",
      registerState: "대기",
    },
    {
      doctorName: "의사2",
      patientName: "환자2",
      registerId: "2",
      registerDate: "2021-06-24 16:00",
      registerState: "대기",
    },
    {
      doctorName: "의사3",
      patientName: "환자3",
      registerId: "3",
      registerDate: "2021-06-24 12:30",
      registerState: "대기",
    },
    {
      doctorName: "의사4",
      patientName: "환자4",
      registerId: "4",
      registerDate: "2021-06-24 17:30",
      registerState: "완료",
    },
    {
      doctorName: "의사1",
      patientName: "환자5",
      registerId: "5",
      registerDate: "2021-06-24 15:30",
      registerState: "취소",
    },
  ];
  const _6_25_register = [
    {
      doctorName: "의사1",
      patientName: "환자1",
      registerId: "1",
      registerDate: "2021-06-25 10:00",
      registerState: "대기",
    },
    {
      doctorName: "의사2",
      patientName: "환자2",
      registerId: "2",
      registerDate: "2021-06-25 11:00",
      registerState: "대기",
    },
    {
      doctorName: "의사2",
      patientName: "환자7",
      registerId: "7",
      registerDate: "2021-06-25 11:45",
      registerState: "완료",
    },
    {
      doctorName: "의사3",
      patientName: "환자3",
      registerId: "3",
      registerDate: "2021-06-25 12:30",
      registerState: "대기",
    },
    {
      doctorName: "의사4",
      patientName: "환자4",
      registerId: "4",
      registerDate: "2021-06-25 12:30",
      registerState: "완료",
    },
    {
      doctorName: "의사1",
      patientName: "환자5",
      registerId: "5",
      registerDate: "2021-06-25 12:30",
      registerState: "취소",
    },
    {
      doctorName: "의사1",
      patientName: "환자6",
      registerId: "6",
      registerDate: "2021-06-25 16:30",
      registerState: "대기",
    },
    {
      doctorName: "의사5",
      patientName: "환자10",
      registerId: "8",
      registerDate: "2021-06-25 14:00",
      registerState: "대기",
    },
    {
      doctorName: "의사6",
      patientName: "환자9",
      registerId: "9",
      registerDate: "2021-06-25 16:30",
      registerState: "완료",
    },
  ];
  const [registers, setRegisters] = useState(_6_25_register);
  const createNewRegister = () => {
    console.log("click");
  };

  const [startDate, setStartDate] = useState(new Date());
  const changeDateToday = () => {
    setStartDate(new Date());
  }
  const [] = useState();

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  }
  const closeModal = () => {
    setModalOpen(false);
  }

  const [modalRegisterOpen, setRegisterModalOpen] = useState(false);

  const openRegisterModal = (registerId) => {
    console.log(registerId);
    setRegisterModalOpen(true);
  };

  const closeRegisterModal = () => {
    setRegisterModalOpen(false);
  };

  return (
    <>
      {/* 상단 버튼 */}
      <div className="RegisterTimeSchedule_header">
        <React.Fragment>
          <button className="button_team2_fill" onClick={openModal}>신규 접수 등록</button>
          <RegisterCreateModal
            open={modalOpen}
            close={closeModal}
            header="신규 접수 등록"
            doctors={doctors}
          />
        </React.Fragment>
      </div>
      {/* 스케쥴 타임테이블 */}
      <div className="RegisterTimeSchedule_content">
        <div className="RegisterTimeSchedule_content_title">
          {/* 오늘 날짜 */}
          <div className="RegisterTimeSchedule_content_title_today" onDoubleClick={changeDateToday}>
            <ReactDatePicker
              locale="ko"
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
                setRegisters(
                  _6_24_register
                  //   ...registers,
                  //   (date)=>{
                  //   if(moment(date).format("YYYY-MM-DD") === moment(_6_24_register[0].registerDate).format("YYYY-MM-DD")){
                  //     return _6_24_register;
                  //   }
                  // }
                );
              }}
              dateFormat="M/dd"
            />
          </div>
          {/* 9시~18시 */}
          <div className="RegisterTimeSchedule_content_title_hours">
            {hours.map(hour => {
              return (
                <div className="RegisterTimeSchedule_content_title_hours_hour">
                  <div className="RegisterTimeSchedule_content_title_hours_hour_upside">
                    {hour}시
                  </div>
                  <div className="RegisterTimeSchedule_content_title_hours_hour_downside">
                    {mins.map(min => {
                      let currentTime = moment().format("YYYY-MM-DD h:m");
                      let minCurrentTime = moment(startDate).format("YYYY-MM-DD") + " " + hour + ":" + min;
                      let maxCurrentTime = moment(minCurrentTime).add(15, "m");
                      if (moment(currentTime).isBetween(minCurrentTime, maxCurrentTime, undefined, '[)')) {
                        return (
                          <div className="RegisterTimeSchedule_content_title_hours_hour_downside_content_today">
                            {min}
                          </div>
                        )
                      } else {
                        return (
                          <div className="RegisterTimeSchedule_content_title_hours_hour_downside_content">
                            {min}
                          </div>
                        )
                      }
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="RegisterTimeSchedule_content_timetable">
          {doctors.map(doctor => {
            return (
              <div className="RegisterTimeSchedule_content_timetable_doctors">
                <div className="RegisterTimeSchedule_content_timetable_doctors_doctor">
                  {doctor}님
                </div>
                <div className="RegisterTimeSchedule_content_timetable_doctors_registers">
                  {hours.map(hour => {
                    return (
                      <>
                        {mins.map(min => {
                          return (
                            <div className="RegisterTimeSchedule_content_timetable_doctors_registers_register">
                              {registers.map(register => {
                                if ((register.doctorName === doctor)
                                  && (moment(register.registerDate).format("YYYY-MM-DD HH:m") === (moment(startDate).format("YYYY-MM-DD") + " " + hour + ":" + min))) {
                                  if (register.registerState === "대기") {
                                    return (
                                      <React.Fragment>
                                        <div 
                                          className="RegisterTimeSchedule_content_timetable_doctors_registers_register_ready tip" 
                                          onClick={() => { openRegisterModal(register.registerId) }}
                                        >
                                          {register.patientName}<br></br>{register.registerState}
                                          <span className="balloon_ready">
                                            <div>
                                              환자명:{register.patientName}
                                            </div>
                                            <div>
                                              담당의:{register.doctorName}
                                            </div>
                                          </span>
                                        </div>
                                        <RegisterCreateModal
                                          open={modalRegisterOpen}
                                          close={closeRegisterModal}
                                          header="접수 대기 변경"
                                          doctors={doctors}
                                        />
                                      </React.Fragment>
                                    )
                                  }
                                  else if (register.registerState === "완료") {
                                    return (
                                      <React.Fragment>
                                        <div 
                                          className="RegisterTimeSchedule_content_timetable_doctors_registers_register_success tip" 
                                          onClick={() => { openRegisterModal(register.registerId) }}
                                        >
                                          {register.patientName}<br></br>{register.registerState}
                                        </div>
                                        <RegisterCreateModal
                                          open={modalRegisterOpen}
                                          close={closeRegisterModal}
                                          header="접수 완료 변경"
                                          doctors={doctors}
                                        />
                                      </React.Fragment>
                                    )
                                  }
                                  else if (register.registerState === "취소") {
                                    return (
                                      <React.Fragment>
                                        <div 
                                          className="RegisterTimeSchedule_content_timetable_doctors_registers_register_cancel tip"
                                          onClick={() => { openRegisterModal(register.registerId) }}
                                        >
                                          {register.patientName}<br></br>{register.registerState}
                                        </div>
                                        <RegisterCreateModal
                                          open={modalRegisterOpen}
                                          close={closeRegisterModal}
                                          header="접수 취소 변경"
                                          doctors={doctors}
                                        />
                                      </React.Fragment>
                                    )
                                  }
                                  else {
                                    return (
                                      <div className="RegisterTimeSchedule_content_timetable_doctors_registers_register_nothing">

                                      </div>
                                    )
                                  }
                                }
                              })}
                            </div>
                          )
                        })}
                      </>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>


    </>
  );
}
export default RegisterTimeSchedule;
