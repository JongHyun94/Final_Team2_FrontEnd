import "./Register.css";
import DatePicker from "react-datepicker";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import ko from 'date-fns/locale/ko';
import moment from "moment";
import { registerLocale } from "react-datepicker";
import { changeRegisterState, getRegisterList } from "apis/register";
import Spinner from "components/common/Spinner";
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

  // 공통 날짜 상태 
  const { registerDate, setSelectedPatient, setRegisterDate, publishTopic, message } = props;
  // 접수 목록 상태
  const [registerList, setRegisterList] = useState([]);

  // 접수 날짜 검색
  const [startDate, setStartDate] = useState(registerDate);
  //const [dateForRegister2, setDateForRegister2] = useState(registerDate);

  // 접수 상태 (대기, 완료, 취소)
  const [registerStateReady, setRegisterStateReady] = useState(0);
  const [registerStateFinish, setRegisterStateFinish] = useState(0);
  const [registerStateCancel, setRegisterStateCancel] = useState(0);

  // 선택된 접수 상태
  const [selectedRegister, setSelectedRegister] = useState();

  // spinner 
  const [loading, setLoading] = useState(false);

  //-------------------------------------------------------------
  //버튼 이벤트 처리
  //-------------------------------------------------------------

  // 날짜 이동 버튼
  const searchDateBtn = (newDate) => {
    setRegisterDate(newDate);
  };

  // 체크박스 클릭시 체크 됨
  const checkboxHandler = (register_id) => {
    if (register_id === selectedRegister) {
      setSelectedRegister(register_id);
    } else {
      setSelectedRegister(register_id);
      const selectPatient = registerList.find(register => {
        // 해당 아이디의 정보를 찾아서 수정
        if (register.register_id === register_id) {
          return true;
        }
      });
      setSelectedPatient(selectPatient);
    }
  };

  // 진료 상태 대기 -> 완료로 
  const changeRegisterStateToFinish = async (register_id) => {
    try {
      let selectRegister = registerList.find(register => {
        if (register.register_id === register_id) {
          if (register.register_state === "대기") {
            return register;
          }
        }
      });
      selectRegister.register_state = "완료";
      if (selectRegister) {
        var list = await changeRegisterState(selectRegister);
        //setRegisterList(list.data.registerList);
        publishTopic(0);
        publishTopic(1);
      }
    } catch (e) {
      console.log(e);
    }
    // const newRegisters = registerList.map(register => {
    //   // 해당 아이디의 정보를 찾아서 수정
    //   if (register.register_id === register_id) {
    //     const newRegister = { ...register, register_state: "완료" };
    //     return newRegister;
    //   } else {
    //     return register;
    //   }
    // });
    // setRegisterList(newRegisters);
  };

  // 진료 상태 대기 -> 취소로 
  const changeRegisterStateToCancel = async (register_id) => {
    try {
      let selectRegister = registerList.find(register => {
        if (register.register_id === register_id) {
          if (register.register_state === "대기") {
            return register;
          }
        }
      });
      selectRegister.register_state = "취소";
      if (selectRegister) {
        var list = await changeRegisterState(selectRegister);
        //setRegisterList(list.data.registerList);
        publishTopic(0);
      }
    } catch (e) {
      console.log(e);
    }
    // const newRegisters = registerList.map(register => {
    //   // 해당 아이디의 정보를 찾아서 수정
    //   if (register.register_id === register_id) {
    //     const newRegister = { ...register, register_state: "취소" };
    //     return newRegister;
    //   } else {
    //     return register;
    //   }
    // });
    // setRegisterList(newRegisters);
  };

  // 전체 보여주기
  const showTotal = async () => {
    setLoading(true);
    try {
      var list = await getRegisterList(moment(registerDate).format("yyyy-MM-DD HH:mm"), "");
      setRegisterList(list.data.registerList);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  // 대기 보여주기
  const showReady = async () => {
    setLoading(true);
    try {
      var list = await getRegisterList(moment(registerDate).format("yyyy-MM-DD HH:mm"), "대기");
      setRegisterList(list.data.registerList);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  // 완료 보여주기
  const showFinish = async () => {
    setLoading(true);
    try {
      var list = await getRegisterList(moment(registerDate).format("yyyy-MM-DD HH:mm"), "완료");
      setRegisterList(list.data.registerList);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  // 취소 보여주기
  const showCancel = async () => {
    setLoading(true);
    try {
      var list = await getRegisterList(moment(registerDate).format("yyyy-MM-DD HH:mm"), "취소");
      setRegisterList(list.data.registerList);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  //-------------------------------------------------------------
  //실행 함수
  //-------------------------------------------------------------

  //해당 날짜에 맞는 리스트 가져오기
  const getList = async (date) => {
    setLoading(true);
    try {
      var list = await getRegisterList(moment(date).format("yyyy-MM-DD HH:mm"), "");
      setRegisterList(list.data.registerList);
      getRegistersState(list.data.registerList);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
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
    const work = async () => {
      setLoading(true);
      try {
        var list = await getRegisterList(moment(registerDate).format("yyyy-MM-DD HH:mm"), "");
        setRegisterList(list.data.registerList);
        getRegistersState(list.data.registerList);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    work();
  }, [registerDate]);

  useEffect(() => {
    getList(moment(registerDate).format("yyyy-MM-DD HH:mm"));
  }, [registerDate]);

  useEffect(() => {
    console.log("MESSAGE: ", message);
    const work = async () => {
      setLoading(true);
      try {
        var list = await getRegisterList(moment(registerDate).format("yyyy-MM-DD HH:mm"), "");
        setRegisterList(list.data.registerList);
        getRegistersState(list.data.registerList);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    if (message.content === "refreshRegisters") {
      work();
    }
  }, [message, props, registerDate]);
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
              <DatePicker locale="ko" selected={startDate} onChange={(date) => setStartDate(date)} dateFormat="yyyy.MM.dd" />
            </div>
            <div>
              <button className="button_team2_fill" onClick={() => searchDateBtn(startDate)}>이동</button>
            </div>
          </div>
          <div className="RegisterList_content_1_2">
            <div className="RegisterList_content_1_2_total" onClick={showTotal}>
              전체: {registerStateReady + registerStateFinish + registerStateCancel}명
            </div>
            <div className="RegisterList_content_1_2_ready" onClick={showReady}>
              대기: {registerStateReady}명
            </div>
            <div className="RegisterList_content_1_2_finish" onClick={showFinish}>
              완료: {registerStateFinish}명
            </div>
            <div className="RegisterList_content_1_2_cancel " onClick={showCancel}>
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
              {loading ? <Spinner /> : <>
                {registerList.map((register, index) => {
                  return (
                    <tr key={index} className="RegisterList_content_2_tr" onClick={(event) => checkboxHandler(register.register_id)}>
                      <td><input type="checkbox" name="chk" checked={selectedRegister === register.register_id ? true : false} readOnly /></td>
                      <td>{index + 1}</td>
                      <td>{moment(register.register_date).format("yyyy-MM-DD HH:mm")}</td>
                      <td>{register.register_id}</td>
                      <td>{register.patient_name}</td>
                      <td>{(register.patient_ssn).substring(0, 6)}</td>
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
                })} </>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default RegisterList;
