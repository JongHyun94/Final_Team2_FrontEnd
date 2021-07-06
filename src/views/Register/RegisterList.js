import "./Register.css";
import DatePicker from "react-datepicker";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import ko from 'date-fns/locale/ko';
import moment from "moment";
import { registerLocale } from "react-datepicker";
import { getRegisterList } from "apis/register";
registerLocale("ko", ko);
// 컬럼 : 순번(index), 예약시간, 접수번호(pk), 환자명, 생년월일, 성별, 담당의, 접수메모, 의사소통메모, 접수상태

// private int register_id;
// private int register_patient_id;
// private String register_user_id;
// private Date register_regdate;
// private Date register_date;
// private Date register_starttime;
// private String register_memo;
// private String register_communication;
// private String register_state;

// // Add Data
// private String patient_name;
// private String patient_ssn;
// private String patient_sex;
// private String patient_tel;

// private String user_name;


function RegisterList(props) {
  //-------------------------------------------------------------  
  //상태 선언
  //-------------------------------------------------------------

  // 접수 목록 상태
  const [registerList, setRegisterList] = useState([]);

  // 접수 날짜 검색
  const [dateForRegister, setDateForRegister] = useState(new Date());

  // 접수 상태 (대기, 완료, 취소)
  const [registerStateReady, setRegisterStateReady] = useState(0);
  const [registerStateFinish, setRegisterStateFinish] = useState(0);
  const [registerStateCancel, setRegisterStateCancel] = useState(0);

  // 선택된 접수 상태
  const [selectedRegister, setSelectedRegister] = useState();

  //-------------------------------------------------------------
  //버튼 이벤트 처리
  //-------------------------------------------------------------

  // 체크박스 클릭시 체크 됨
  const checkboxHandler = (register_id) => {
    if (register_id === selectedRegister) {
      setSelectedRegister("");
    } else {
      setSelectedRegister(register_id);
      const selectPatient = registerList.find(register => {
        // 해당 아이디의 정보를 찾아서 수정
        if (register.register_id === register_id) {
          return true;
        }
      });
      props.setSelectedPatient(selectPatient);
    }
  };

  // 진료 상태 대기 -> 완료로 
  const changeRegisterStateToFinish = (register_id) => {
    console.log(register_id);
    const newRegisters = registerList.map(register => {
      // 해당 아이디의 정보를 찾아서 수정
      if (register.register_id === register_id) {
        const newRegister = { ...register, register_state: "완료" };
        return newRegister;
      } else {
        return register;
      }
    });
    setRegisterList(newRegisters);
  };

  // 진료 상태 대기 -> 취소로 
  const changeRegisterStateToCancel = (register_id) => {
    console.log(register_id);
    const newRegisters = registerList.map(register => {
      // 해당 아이디의 정보를 찾아서 수정
      if (register.register_id === register_id) {
        const newRegister = { ...register, register_state: "취소" };
        return newRegister;
      } else {
        return register;
      }
    });
    setRegisterList(newRegisters);
  };

  //-------------------------------------------------------------
  //실행 함수
  //-------------------------------------------------------------

  //해당 날짜에 맞는 리스트 가져오기
  const getList = async (date) => {
    try {
      var list = await getRegisterList(moment(date).format("yyyy-MM-DD HH:mm"));
      setRegisterList(list.data.registerList);
    } catch (e) {
      console.log(e);
    }
  };

  //리스트의 개수 새기
  const getRegistersState = (registerList) => {
    var count1 = 0;
    var count2 = 0;
    var count3 = 0;
    for (var i = 0; i < registerList.length; i++) {
      if (registerList[i].register_state === "대기") {
        count1++;
      } else if (registerList[i].register_state === "완료") {
        count2++;
      } else if (registerList[i].register_state === "취소") {
        count3++;
      }
    }
    setRegisterStateReady(count1); // 대기
    setRegisterStateFinish(count2); // 완료
    setRegisterStateCancel(count3); // 취소
  };

  
  //-------------------------------------------------------------
  //마운트 및 언마운트에 실행할 내용
  //-------------------------------------------------------------

  useEffect(() => {
    getList(moment(dateForRegister).format("yyyy-MM-DD HH:mm"));
  }, [dateForRegister]);

  useEffect(() => {
    getRegistersState(registerList);
  }, [registerList]);

  //-------------------------------------------------------------
  //렌더링 내용
  //-------------------------------------------------------------
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
            <div className="RegisterList_content_1_2_total">
              전체: {registerStateReady + registerStateFinish + registerStateCancel}명
            </div>
            <div className="RegisterList_content_1_2_ready">
              대기: {registerStateReady}명
            </div>
            <div className="RegisterList_content_1_2_finish">
              완료: {registerStateFinish}명
            </div>
            <div className="RegisterList_content_1_2_cancel">
              취소: {registerStateCancel}명
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
              {registerList.map((register, index) => {
                return (
                  <tr key={index} className="RegisterList_content_2_tr" onClick={(event) => checkboxHandler(register.register_id)}>
                    <td><input type="checkbox" name="chk" checked={selectedRegister === register.register_id ? true : false} readOnly /></td>
                    <td>{index+1}</td>
                    <td>{moment(register.register_date).format("yyyy-MM-DD HH:mm")}</td>
                    <td>{register.register_id}</td>
                    <td>{register.patient_name}</td>
                    <td>{register.patient_ssn}</td>
                    <td>{register.patient_sex}</td>
                    <td>{register.user_name}</td>
                    <td>{register.register_memo}</td>
                    <td>{register.register_communication}</td>
                    <td className={
                      register.register_state === "완료" ? "RegisterList_content_2_tr_td_finish" : "" ||
                        register.register_state === "취소" ? "RegisterList_content_2_tr_td_cancel" : "" ||
                          register.register_state === "대기" ? "RegisterList_content_2_tr_td_ready" : ""
                    }>
                      {register.register_state}
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
