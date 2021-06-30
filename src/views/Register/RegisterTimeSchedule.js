import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "./Register.css";
import moment from "moment";
import RegisterCreateModal from "./components/modal/RegisterCreateModal";
import { registerLocale } from "react-datepicker";
import ko from 'date-fns/locale/ko';
import WeatherAPI from "./components/api/WeatherAPI";
import RegisterWeekTimeTableModal from "./components/modal/RegisterWeekTimeTableModal";

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
      registerDate: "2021-06-29 10:30",
      registerState: "대기",
    },
    {
      doctorName: "의사2",
      patientName: "환자2",
      registerId: "2",
      registerDate: "2021-06-29 16:00",
      registerState: "대기",
    },
    {
      doctorName: "의사3",
      patientName: "환자3",
      registerId: "3",
      registerDate: "2021-06-29 12:30",
      registerState: "대기",
    },
    {
      doctorName: "의사4",
      patientName: "환자4",
      registerId: "4",
      registerDate: "2021-06-29 17:30",
      registerState: "완료",
    },
    {
      doctorName: "의사1",
      patientName: "환자5",
      registerId: "5",
      registerDate: "2021-06-29 15:30",
      registerState: "취소",
    },
  ];
  const _6_25_register = [
    {
      doctorName: "의사1",
      patientName: "환자1",
      registerId: "1",
      registerDate: "2021-06-30 10:00",
      registerState: "대기",
    },
    {
      doctorName: "의사2",
      patientName: "환자2",
      registerId: "2",
      registerDate: "2021-06-30 11:00",
      registerState: "대기",
    },
    {
      doctorName: "의사2",
      patientName: "환자7",
      registerId: "7",
      registerDate: "2021-06-30 11:45",
      registerState: "완료",
    },
    {
      doctorName: "의사3",
      patientName: "환자3",
      registerId: "3",
      registerDate: "2021-06-30 12:30",
      registerState: "대기",
    },
    {
      doctorName: "의사4",
      patientName: "환자4",
      registerId: "4",
      registerDate: "2021-06-30 12:30",
      registerState: "완료",
    },
    {
      doctorName: "의사1",
      patientName: "환자5",
      registerId: "5",
      registerDate: "2021-06-30 12:30",
      registerState: "취소",
    },
    {
      doctorName: "의사1",
      patientName: "환자6",
      registerId: "6",
      registerDate: "2021-06-30 16:30",
      registerState: "대기",
    },
    {
      doctorName: "의사5",
      patientName: "환자10",
      registerId: "8",
      registerDate: "2021-06-30 9:00",
      registerState: "대기",
    },
    {
      doctorName: "의사6",
      patientName: "환자9",
      registerId: "9",
      registerDate: "2021-06-30 9:00",
      registerState: "완료",
    },
    {
      doctorName: "의사6",
      patientName: "환자10",
      registerId: "10",
      registerDate: "2021-06-30 17:45",
      registerState: "완료",
    },
    {
      doctorName: "의사1",
      patientName: "환자11",
      registerId: "11",
      registerDate: "2021-06-30 17:45",
      registerState: "완료",
    },
  ];
  const [registers, setRegisters] = useState(_6_25_register);
  const noneRegister = {
    doctorName: "",
    patientName: "",
    registerId: "",
    registerDate: new Date(),
    registerState: "신규",
  };

  const [startDate, setStartDate] = useState(new Date());
  const changeDateToday = () => {
    setStartDate(new Date());
  }
  const [selectedRegister, setSelectedRegister] = useState(noneRegister);


  //신규 접수 등록 모달
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  }
  const closeModal = () => {
    setModalOpen(false);
  }

  const [headerContent, setHeaderContent] = useState("신규");

  //기존 접수 수정 모달
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const openRegisterModal = (register) => {
    setHeaderContent(register.registerState);
    setSelectedRegister(register);
    setRegisterModalOpen(true);
  };
  const closeRegisterModal = () => {
    setSelectedRegister(noneRegister);
    setRegisterModalOpen(false);
  };

  // 의사별 개인 타임 테이블 모달
  const [selctedDoctor, setSelectedDoctor] = useState();
  const [registerWeekTimeTableOpen, setRegisterWeekTimeTableOpen] = useState(false);
  const openRegisterWeekTimeTableOpen = (doctor) => {
    console.log(doctor);
    setSelectedDoctor(doctor);
    setRegisterWeekTimeTableOpen(true);
  };
  const closeRegisterWeekTimeTableOpen = () => {
    setRegisterWeekTimeTableOpen(false);
  };


  return (
    <>
      {/* 상단 버튼 */}
      <div className="RegisterTimeSchedule_header">
        <div className="RegisterTimeSchedule_header_btn">
          <button className="button_team2_fill" onClick={openModal}>신규 접수 등록</button>
        </div>
        <React.Fragment>
            <RegisterCreateModal
              open={modalOpen}
              close={closeModal}
              header="신규 접수 등록"
              doctors={doctors}
              register={selectedRegister}
            />
            <RegisterCreateModal
              open={registerModalOpen}
              close={closeRegisterModal}
              header={headerContent + " 수정"}
              doctors={doctors}
              register={selectedRegister}
            />
            <RegisterWeekTimeTableModal
              open={registerWeekTimeTableOpen}
              close={closeRegisterWeekTimeTableOpen}
              header={"Dr. " + selctedDoctor}
            />
        </React.Fragment>
        {/* <div className="WeatherAPI">
          <WeatherAPI />
        </div> */}
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
                      let currentTime = moment().format("YYYY-MM-DD H:m");
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
          {doctors.map((doctor, index) => {
            return (
              <div className="RegisterTimeSchedule_content_timetable_doctors">
                <div className="RegisterTimeSchedule_content_timetable_doctors_doctor" onDoubleClick={() => openRegisterWeekTimeTableOpen(doctor)}>
                  {doctor}님
                </div>
                <div className="RegisterTimeSchedule_content_timetable_doctors_registers">
                  {hours.map((hour, index1) => {
                    return (
                      <>
                        {mins.map(min => {
                          return (
                            <div className="RegisterTimeSchedule_content_timetable_doctors_registers_register" onDoubleClick={openModal}>
                              {registers.map(register => {
                                if ((register.doctorName === doctor)
                                  && (moment(register.registerDate).format("YYYY-MM-DD H:m") === (moment(startDate).format("YYYY-MM-DD") + " " + hour + ":" + min))) {
                                  if (register.registerState === "대기") {
                                    if (index < 4 && index1 < 8) {
                                      return (
                                        <>
                                          <div
                                            className="RegisterTimeSchedule_content_timetable_doctors_registers_register_ready tip_normal"
                                            onClick={() => { openRegisterModal(register) }}
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
                                        </>
                                      )
                                    } else {
                                      if (index >= 4 && index1 < 8) {
                                        return (
                                          <>
                                            <div
                                              className="RegisterTimeSchedule_content_timetable_doctors_registers_register_ready tip_upside"
                                              onClick={() => { openRegisterModal(register) }}
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
                                          </>
                                        )
                                      } else if (index < 4 && index1 >= 8) {
                                        return (
                                          <>
                                            <div
                                              className="RegisterTimeSchedule_content_timetable_doctors_registers_register_ready tip_rightside"
                                              onClick={() => { openRegisterModal(register) }}
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
                                          </>
                                        )
                                      } else {
                                        return (
                                          <>
                                            <div
                                              className="RegisterTimeSchedule_content_timetable_doctors_registers_register_ready tip_uprightside"
                                              onClick={() => { openRegisterModal(register) }}
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
                                          </>
                                        )
                                      }
                                    }
                                  } else if (register.registerState === "완료") {
                                    if (index < 4 && index1 < 8) {
                                      return (
                                        <>
                                          <div
                                            className="RegisterTimeSchedule_content_timetable_doctors_registers_register_success tip_normal"
                                            onClick={() => { openRegisterModal(register) }}
                                          >
                                            {register.patientName}<br></br>{register.registerState}
                                            <span className="balloon_success">
                                              <div>
                                                환자명:{register.patientName}
                                              </div>
                                              <div>
                                                담당의:{register.doctorName}
                                              </div>
                                            </span>
                                          </div>
                                        </>
                                      )
                                    } else {
                                      if (index >= 4 && index1 < 8) {
                                        return (
                                          <>
                                            <div
                                              className="RegisterTimeSchedule_content_timetable_doctors_registers_register_success tip_upside"
                                              onClick={() => { openRegisterModal(register) }}
                                            >
                                              {register.patientName}<br></br>{register.registerState}
                                              <span className="balloon_success">
                                                <div>
                                                  환자명:{register.patientName}
                                                </div>
                                                <div>
                                                  담당의:{register.doctorName}
                                                </div>
                                              </span>
                                            </div>
                                          </>
                                        )
                                      } else if (index < 4 && index1 >= 8) {
                                        return (
                                          <>
                                            <div
                                              className="RegisterTimeSchedule_content_timetable_doctors_registers_register_success tip_rightside"
                                              onClick={() => { openRegisterModal(register) }}
                                            >
                                              {register.patientName}<br></br>{register.registerState}
                                              <span className="balloon_success">
                                                <div>
                                                  환자명:{register.patientName}
                                                </div>
                                                <div>
                                                  담당의:{register.doctorName}
                                                </div>
                                              </span>
                                            </div>
                                          </>
                                        )
                                      } else {
                                        return (
                                          <>
                                            <div
                                              className="RegisterTimeSchedule_content_timetable_doctors_registers_register_success tip_uprightside"
                                              onClick={() => { openRegisterModal(register) }}
                                            >
                                              {register.patientName}<br></br>{register.registerState}
                                              <span className="balloon_success">
                                                <div>
                                                  환자명:{register.patientName}
                                                </div>
                                                <div>
                                                  담당의:{register.doctorName}
                                                </div>
                                              </span>
                                            </div>
                                          </>
                                        )
                                      }
                                    }
                                  } else if (register.registerState === "취소") {
                                    if (index < 4 && index1 < 8) {
                                      return (
                                        <>
                                          <div
                                            className="RegisterTimeSchedule_content_timetable_doctors_registers_register_cancel tip_normal"
                                            onClick={() => { openRegisterModal(register) }}
                                          >
                                            {register.patientName}<br></br>{register.registerState}
                                            <span className="balloon_cancel">
                                              <div>
                                                환자명:{register.patientName}
                                              </div>
                                              <div>
                                                담당의:{register.doctorName}
                                              </div>
                                            </span>
                                          </div>
                                        </>
                                      )
                                    } else {
                                      if (index >= 4 && index1 < 8) {
                                        return (
                                          <>
                                            <div
                                              className="RegisterTimeSchedule_content_timetable_doctors_registers_register_cancel tip_upside"
                                              onClick={() => { openRegisterModal(register) }}
                                            >
                                              {register.patientName}<br></br>{register.registerState}
                                              <span className="balloon_cancel">
                                                <div>
                                                  환자명:{register.patientName}
                                                </div>
                                                <div>
                                                  담당의:{register.doctorName}
                                                </div>
                                              </span>
                                            </div>
                                          </>
                                        )
                                      } else if (index < 4 && index1 >= 8) {
                                        return (
                                          <>
                                            <div
                                              className="RegisterTimeSchedule_content_timetable_doctors_registers_register_cancel tip_rightside"
                                              onClick={() => { openRegisterModal(register) }}
                                            >
                                              {register.patientName}<br></br>{register.registerState}
                                              <span className="balloon_cancel">
                                                <div>
                                                  환자명:{register.patientName}
                                                </div>
                                                <div>
                                                  담당의:{register.doctorName}
                                                </div>
                                              </span>
                                            </div>
                                          </>
                                        )
                                      } else {
                                        return (
                                          <>
                                            <div
                                              className="RegisterTimeSchedule_content_timetable_doctors_registers_register_cancel tip_uprightside"
                                              onClick={() => { openRegisterModal(register) }}
                                            >
                                              {register.patientName}<br></br>{register.registerState}
                                              <span className="balloon_cancel">
                                                <div>
                                                  환자명:{register.patientName}
                                                </div>
                                                <div>
                                                  담당의:{register.doctorName}
                                                </div>
                                              </span>
                                            </div>
                                          </>
                                        )
                                      }
                                    }
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
