import "./Register.css";
import DatePicker from "react-datepicker";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import ko from 'date-fns/locale/ko';
import moment from "moment";
import { registerLocale } from "react-datepicker";
registerLocale("ko", ko);

// 임의의 접수 내역 목록 만들기
function getRegisters() {
  const registers = [];// 컬럼 : 순번(index), 예약시간, 접수번호(pk), 환자명, 생년월일, 성별, 담당의, 접수메모, 의사소통메모, 접수상태

  // 대기 상태 50개
  for (var i = 1; i <= 50; i++) {
    if (i < 10) {
      registers.push({
        index: i,
        registerDate: "2021-06-17 10:0" + i,
        registerTime: "10:0" + i,
        registerId: "10000" + i,
        patientName: "환자" + i,
        patientBirth: "" + i,
        patientTel: "010-9947-7430",
        patientSex: "F",
        doctorName: "김더존(D13801001001)_3",
        registerMemo: "메모" + i,
        registerCommunication: "의사소통메모" + i,
        registerState: "대기"
      });
    } else {
      registers.push({
        index: i,
        registerDate: "2021-06-17 10:" + i,
        registerTime: "10:" + i,
        registerId: "10000" + i,
        patientName: "환자" + i,
        patientBirth: "" + i,
        patientTel: "010-9947-7430",
        patientSex: "F",
        doctorName: "의사" + i,
        registerMemo: "메모" + i,
        registerCommunication: "의사소통메모" + i,
        registerState: "대기"
      });
    }
  }

  // 완료 상태 50개
  for (i; i <= 100; i++) {
    if (i < 60) {
      registers.push({
        index: i,
        registerDate: "2021-06-17 11:0" + (i - 50),
        registerTime: "11:0" + (i - 50),
        registerId: "10000" + i,
        patientName: "환자" + i,
        patientBirth: "" + i,
        patientTel: "010-9947-7430",
        patientSex: "M",
        doctorName: "의사" + i,
        registerMemo: "메모" + i,
        registerCommunication: "의사소통메모" + i,
        registerState: "완료"
      });
    } else {
      registers.push({
        index: i,
        registerDate: "2021-06-17 11:" + (i - 50),
        registerTime: "11:" + (i - 50),
        registerId: "10000" + i,
        patientName: "환자" + i,
        patientBirth: "" + i,
        patientTel: "010-9947-7430",
        patientSex: "M",
        doctorName: "의사" + i,
        registerMemo: "메모" + i,
        registerCommunication: "의사소통메모" + i,
        registerState: "완료"
      });
    }
  }

  // 취소 상태 20개
  for (i; i <= 120; i++) {
    if (i < 110) {
      registers.push({
        index: i,
        registerDate: "2021-06-17 12:0" + (i - 100),
        registerTime: "12:0" + (i - 100),
        registerId: "10000" + i,
        patientName: "환자" + i,
        patientBirth: "" + i,
        patientTel: "010-9947-7430",
        patientSex: "F",
        doctorName: "의사" + i,
        registerMemo: "메모" + i,
        registerCommunication: "의사소통메모" + i,
        registerState: "취소"
      });
    } else {
      registers.push({
        index: i,
        registerDate: "2021-06-17 12:" + (i - 100),
        registerTime: "12:" + (i - 100),
        registerId: "10000" + i,
        patientName: "환자" + i,
        patientBirth: "" + i,
        patientTel: "010-9947-7430",
        patientSex: "F",
        doctorName: "의사" + i,
        registerMemo: "메모" + i,
        registerCommunication: "의사소통메모" + i,
        registerState: "취소"
      });
    }

  }
  return registers;
}

function getRegistersState(registerList) {
  const registerState = [];
  var count1 = 0;
  var count2 = 0;
  var count3 = 0;
  for (var i = 0; i < registerList.length; i++) {
    if (registerList[i].registerState === "대기") {
      count1++;
    } else if (registerList[i].registerState === "완료") {
      count2++;
    } else if (registerList[i].registerState === "취소") {
      count3++;
    }
  }
  registerState.push(count1); // 대기
  registerState.push(count2); // 완료
  registerState.push(count3); // 취소

  return registerState;
}

function RegisterList(props) {
  // 접수 날짜 검색
  const [dateForRegister, setDateForRegister] = useState(new Date());

  // 접수 목록 상태
  const [registerList, setRegisterList] = useState(getRegisters);

  // 접수 상태 (대기, 완료, 취소)
  const [registerState, setRegisterState] = useState(() => getRegistersState(registerList));

  // 진료 상태 대기 -> 완료로 
  const changeRegisterStateToFinish = (registerId) => {
    console.log(registerId);
    const newRegisters = registerList.map(register => {
      // 해당 아이디의 정보를 찾아서 수정
      if (register.registerId === registerId) {
        const newRegister = { ...register, registerState: "완료" };
        return newRegister;
      } else {
        return register;
      }
    });
    setRegisterList(newRegisters);
  };
  const changeRegisterStateToCancel = (registerId) => {
    console.log(registerId);
    const newRegisters = registerList.map(register => {
      // 해당 아이디의 정보를 찾아서 수정
      if (register.registerId === registerId) {
        const newRegister = { ...register, registerState: "취소" };
        return newRegister;
      } else {
        return register;
      }
    });
    setRegisterList(newRegisters);
  };

  // registerList가 바뀔때 상태값 바꾸기
  useEffect(() => {
    setRegisterState(getRegistersState(registerList));
  }, [registerList]);

  // 선택된 접수 상태
  const [selectedRegister, setSelectedRegister] = useState();

  // 체크박스 클릭시 체크 됨
  const checkboxHandler = (registerId) => {
    if (registerId === selectedRegister) {
      setSelectedRegister("");
    } else {
      setSelectedRegister(registerId);
      const selectPatient = registerList.find(register => {
        // 해당 아이디의 정보를 찾아서 수정
        if (register.registerId === registerId) {
          return true;
        }
      });
      props.setSelectedPatient(selectPatient);
    }
  };

  return (
    <div>
      {/* 상단 메뉴 이름 + 버튼 */}
      <div className="RegisterList_header">
        <div className="RegisterList_header_content">
          접수 내역
        </div>
        <div className="RegisterList_header_button">
          <Link to="/Patient" ><button className="button_team2_fill">신규 환자 등록</button></Link>
        </div>
      </div>
      {/* 하단 내용 */}
      <div className="RegisterList_content border">
        {/* 달력 , 상태 , 완료 버튼 */}
        <div className="RegisterList_content_1">
          <div className="RegisterList_content_1_1">
            <div>
              <DatePicker locale="ko" selected={dateForRegister} onChange={(date) => setDateForRegister(date)} dateFormat="yyyy.MM.dd" />
            </div>
            <div>
              <button className="button_team2_fill">이동</button>
            </div>
          </div>
          <div className="RegisterList_content_1_2">
            <div className="RegisterList_content_1_2_ready">
              대기: {registerState[0]}명
            </div>
            <div className="RegisterList_content_1_2_finish">
              완료: {registerState[1]}명
            </div>
            <div className="RegisterList_content_1_2_cancel">
              취소: {registerState[2]}명
            </div>
          </div>
          <div className="RegisterList_content_1_3">
            <button className="button_team2_empty" onClick={() => changeRegisterStateToCancel(selectedRegister)}>접수 취소</button>
            <button className="button_team2_fill" onClick={() => changeRegisterStateToFinish(selectedRegister)}>진료 시작</button>
          </div>
        </div>
        {/* 접수 내역 테이블 */}
        <div className="RegisterList_content_2">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>순번</th>
                <th>예약 시간</th>
                <th>접수 번호</th>
                <th>환자명</th>
                <th>생년월일</th>
                <th>성별</th>
                <th>담당의</th>
                <th>접수 메모</th>
                <th>의사소통 메모</th>
                <th>접수 상태</th>
              </tr>
            </thead>
            <tbody>
              {/* 임의의 데이터 넣어서 출력 해보기 */}
              {registerList.map(register => {
                return (
                  <tr key={register.index} className="RegisterList_content_2_tr" onClick={(event) => checkboxHandler(register.registerId)}>
                    <td><input type="checkbox" name="chk" checked={selectedRegister === register.registerId ? true : false} readOnly /></td>
                    <td>{register.index}</td>
                    <td>{register.registerTime}</td>
                    <td>{register.registerId}</td>
                    <td>{register.patientName}</td>
                    <td>{register.patientBirth}</td>
                    <td>{register.patientSex}</td>
                    <td>{register.doctorName}</td>
                    <td>{register.registerMemo}</td>
                    <td>{register.registerCommunication}</td>
                    <td className={
                      register.registerState === "완료" ? "RegisterList_content_2_tr_td_finish" : "" ||
                        register.registerState === "취소" ? "RegisterList_content_2_tr_td_cancel" : "" ||
                          register.registerState === "대기" ? "RegisterList_content_2_tr_td_ready" : ""
                      }>
                      {register.registerState}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default RegisterList;
