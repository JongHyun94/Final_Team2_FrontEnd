import { useState } from "react";
import Switch from "react-router-dom";
import RegisterCreateForm from "./RegisterCreateForm";
import RegisterList from "./RegisterList";
import RegisterPatientList from "./RegisterPatientList";
import RegisterRead from "./RegisterRead";
import RegisterTimeTable from "./RegisterTimeTable";
import RegisterUpdateForm from "./RegisterUpdateForm";


// 부모 상태 

// 임의의 접수 내역 목록 만들기
// function getRegisters() {
//   const registers = [];
//   for (var i = 1; i <= 50; i++) {
//     // 컬럼 : 순번(index), 예약시간, 접수번호(pk), 환자명, 생년월일, 성별, 담당의, 접수메모, 의사소통메모, 접수상태
//     registers.push({ 
//       index: i, 
//       REGISTER_TIME: "10:" + i, 
//       REGISTER_ID: "10000" + i,
//       Patient_Name: "환자" + i,
//       Patient_Birth: "" + i,
//       Sex: "F", 
//       Doctor_Name: "의사" + i,
//       REGISTER_MEMO: "메모" + i, 
//       REGISTER_COMMUNICATION: "의사소통메모" + i, 
//       REGISTER_STATE: "대기"
//     });
//   }
//   return registers;
// }

function Register(props) {
  // 상태 

  // 접수 DB 컬럼 REGISTERS TABLE
  // REGISTER_ID, REGISTER_PATIENT_ID, REGISTER_USER_ID, 
  // REGISTER_REGDATE, REGISTER_DATE, REGISTER_TIME, 
  // REGISTER_MEMO, REGISTER_COMMUNICATION, REGISTER_STATE

  // 접수 내역 배열 

  // 접수 상태 (대기, 완료, 취소)
  // const [registerState, setRegisterState] = useState();

  // 접수 상세 내역 & 접수 수정 체인지
  const [registerRead, setRegisterRead] = useState(true);

  const changeRegister = (event) => {
    if(registerRead === true){
      setRegisterRead(false);
    } else {
      setRegisterRead(true);
    }
  };

  const cancelRegister = (event) => {
    if(registerRead === true){
      setRegisterRead(false);
    } else {
      setRegisterRead(true);
    }
  };

  return (
    <div className="Register">
      {/* 상단 */}
      <div className="Register_1">
        {/* 접수 내역 */}
        <div className="RegisterList">
          <RegisterList />
        </div>
        {/* 접수 상세 내역 or  접수 수정*/}
        <div className="RegisterRead">
          {registerRead ? 
            <RegisterRead registerRead={registerRead} changeRegister={changeRegister} cancelRegister={cancelRegister}/> 
            : 
            <RegisterUpdateForm registerRead={registerRead} changeRegister={changeRegister} cancelRegister={cancelRegister}/>
          }
        </div>
      </div>
      {/* 하단 */}
      <div className="Register_2">
        <div className="Register_2_header">
          접수 등록
        </div>
        <div className="Register_Components border">
          {/* 환자 검색 */}
          <div className="RegisterPatientList">
            <RegisterPatientList />
          </div>
          {/* 접수 등록 */}
          <div className="RegisterCreateForm">
            <RegisterCreateForm />
          </div>
          {/* 접수 타임테이블 */}
          <div className="RegisterTimeTable">
            <RegisterTimeTable />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;