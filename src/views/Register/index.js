import { getDoctorList, getRegisterList } from "apis/register";
import { useEffect, useState } from "react";
import RegisterList from "./RegisterList";
import RegisterRead from "./RegisterRead";
import RegisterTimeSchedule from "./RegisterTimeSchedule";
import RegisterUpdateForm from "./RegisterUpdateForm";

function Register(props) {
  //-------------------------------------------------------------  
  //상태 선언
  //-------------------------------------------------------------

  // 접수 DB 컬럼 REGISTERS TABLE
  // REGISTER_ID, REGISTER_PATIENT_ID, REGISTER_USER_ID, 
  // REGISTER_REGDATE, REGISTER_DATE, REGISTER_TIME, 
  // REGISTER_MEMO, REGISTER_COMMUNICATION, REGISTER_STATE

  // 접수 내역 배열 
  const [registerList, setRegisterList] = useState();

  // 선택된 환자 내용
  const [selectedPatient, setSelectedPatient] = useState({});

  // 접수 상세 내역 & 접수 수정 체인지
  const [registerRead, setRegisterRead] = useState(true);

  // 등록된 의사들 배열
  const [doctors, setDoctors] = useState([]);

  //-------------------------------------------------------------
  //버튼 이벤트 처리
  //-------------------------------------------------------------
  
  const changeRegister = (event) => {
    if (registerRead === true) {
      setRegisterRead(false);
    } else {
      setRegisterRead(true);
    }
  };

  const cancelRegister = (event) => {
    if (registerRead === true) {
      setRegisterRead(false);
    } else {
      setRegisterRead(true);
    }
  };

  //-------------------------------------------------------------
  //마운트 및 언마운트에 실행할 내용
  //-------------------------------------------------------------

  const getDoctorLists = async () => {
    try {
      var list = await getDoctorList();
      setDoctors(list.data.doctorList);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(()=>{
    getDoctorLists();
  },[]);

  //-------------------------------------------------------------
  //렌더링 내용
  //-------------------------------------------------------------
  return (
    <div className="Register">
      {/* 상단 */}
      <div className="Register_1">
        {/* 접수 내역 */}
        <div className="RegisterList">
          <RegisterList
            setSelectedPatient={setSelectedPatient} />
        </div>
        {/* 접수 상세 내역 or 접수 수정*/}
        <div className="RegisterRead">
          {registerRead ?
            <RegisterRead
              registerRead={registerRead}
              changeRegister={changeRegister}
              selectedPatient={selectedPatient}
            />
            :
            <RegisterUpdateForm
              registerRead={registerRead}
              changeRegister={changeRegister}
              cancelRegister={cancelRegister}
              selectedPatient={selectedPatient}
              doctors={doctors}
            />
          }
        </div>
      </div>
      {/* 하단 */}
      <div className="Register_2">
        <div className="Register_2_header">
          진료 예정표
        </div>
        <div className="Register_Components border">
          <div className="RegisterTimeSchedule">
            <RegisterTimeSchedule />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;