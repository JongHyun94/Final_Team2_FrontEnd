import "./Register.css";
// import { AutoSizer, List } from "react-virtualized";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";


// 임의의 접수 내역 목록 만들기
function getRegisters() {
  const registers = [];
  for (var i = 1; i <= 50; i++) {
    // 컬럼 : 순번(index), 예약시간, 접수번호(pk), 환자명, 생년월일, 성별, 담당의, 접수메모, 의사소통메모, 접수상태
    registers.push({
      index: i,
      registerTime: "10:" + i,
      registerId: "10000" + i,
      patientCode: "환자" + i,
      patientBirth: "" + i,
      patientSex: "F",
      doctorName: "의사" + i,
      registerMemo: "메모" + i,
      registerCommunication: "의사소통메모" + i,
      registerState: "대기"
    });
  }
  for (i ; i <= 100; i++) {
    registers.push({
      index: i,
      registerTime: "10:" + i,
      registerId: "10000" + i,
      patientCode: "환자" + i,
      patientBirth: "" + i,
      patientSex: "F",
      doctorName: "의사" + i,
      registerMemo: "메모" + i,
      registerCommunication: "의사소통메모" + i,
      registerState: "완료"
    });
  }
  for (i ; i <= 120; i++) {
    registers.push({
      index: i,
      registerTime: "10:" + i,
      registerId: "10000" + i,
      patientCode: "환자" + i,
      patientBirth: "" + i,
      patientSex: "M",
      doctorName: "의사" + i,
      registerMemo: "메모" + i,
      registerCommunication: "의사소통메모" + i,
      registerState: "취소"
    });
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
  const [startDate, setStartDate] = useState(new Date());

  // 접수 목록 상태
  const [registerList, setRegisterList] = useState(getRegisters);

  // 접수 상태 (대기, 완료, 취소)
  const [registerState, setRegisterState] = useState(() => getRegistersState(registerList));

  const [registerStateReady, setRegisterStateReady] = useState(registerState[0]);
  const [registerStateFinish, setRegisterStateFinish] = useState(registerState[1]);
  const [registerStateCancel, setRegisterStateCancel] = useState(registerState[2]);


  // 진료 상태 대기 -> 완료로 
  const changeRegisterStateToFinish = () => {
    
  };

  // 체크박스 클릭시 체크 됨
  const checkboxHandler = (item) => {
    console.log(item);
  }

  // const rowRenderer = ({index, key, style}) => {
  //   return (
  //     <div key={key} style={style}>
  //       <BoardListItem board={boards[index]} 
  //                      changeBoard={changeBoard} 
  //                      removeBoard={removeBoard}/>        
  //     </div>
  //   );
  // };


  const [dateForRegister, setDateForRegister] = useState(new Date());
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
              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
            <div>
              <button className="button_team2_fill">이동</button>
            </div>
          </div>
          <div className="RegisterList_content_1_2">
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
            <button className="button_team2_fill" onClick={changeRegisterStateToFinish}>접수 완료</button>
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
                  <tr key={register.index}>
                    <td><input type="checkbox" name="chk" value={register.registerId} onChange={(event) => checkboxHandler(register.registerId)} /></td>
                    <td>{register.index}</td>
                    <td>{register.registerTime}</td>
                    <td>{register.registerId}</td>
                    <td>{register.patientCode}</td>
                    <td>{register.patientBirth}</td>
                    <td>{register.patientSex}</td>
                    <td>{register.doctorName}</td>
                    <td>{register.registerMemo}</td>
                    <td>{register.registerCommunication}</td>
                    <td>{register.registerState}</td>
                  </tr>
                );
              })}
              {/* <AutoSizer disableHeight>
                {({ width, height }) => {
                  return (
                    <List width={width} height={300}
                      list={boards}
                      rowCount={boards.length}
                      rowHeight={40}
                      rowRenderer={rowRenderer}
                      overscanRowCount={5}
                    // style={{outline:"none"}}
                    />
                  );
                }}
              </AutoSizer> */}
              {/* <tr>
                <td><input type="checkbox"/></td>
                <td>1</td>
                <td>10:30</td>
                <td>33333</td>
                <td>박빛나</td>
                <td>960903</td>
                <td>F</td>
                <td>나의사</td>
                <td>접수 메모</td>
                <td>의사소통 메모</td>
                <td>접수 상태</td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>2</td>
                <td>11:30</td>
                <td>33334</td>
                <td>이종현</td>
                <td>940606</td>
                <td>M</td>
                <td>나의사</td>
                <td>접수 메모</td>
                <td>의사소통 메모</td>
                <td>접수 상태</td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>3</td>
                <td>12:30</td>
                <td>33335</td>
                <td>민지현</td>
                <td>960119</td>
                <td>F</td>
                <td>나의사</td>
                <td>접수 메모</td>
                <td>의사소통 메모</td>
                <td>접수 상태</td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>4</td>
                <td>13:30</td>
                <td>33336</td>
                <td>윤서영</td>
                <td>960708</td>
                <td>F</td>
                <td>나의사</td>
                <td>접수 메모</td>
                <td>의사소통 메모</td>
                <td>접수 상태</td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default RegisterList;
