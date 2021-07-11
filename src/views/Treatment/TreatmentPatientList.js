import { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getTreatmentPatientList } from "apis/treatments";
import moment from "moment";



function TreatmentPatientList(props) {
  
  //부모에서 생성한 환자 리스트, 체크된환자정보 담을 상태
  const { setCheckedpatient, message } = props;

  //환자 대기 목록 상태
  const [patientlists, setPatientlists] = useState([]);

  //처음 받는 날짜
  const [inputdate, setInputdate] = useState(new Date());
  const [inputdate2, setInputdate2] = useState(new Date());

  // 접수아이디 선택 상태
  const [selectedRegisterId, setSelectedRegisterId] = useState("");

  // const [state, setState] = useState(() => getState(patientlists));
  //진료 상태(대기,완료)
  const [ready, setReady] = useState(0);
  const [done, setDone] = useState(0);

  // 마운트 및 언마운트에 실행할 내용------------------------------------
  // useEffect(() => {
  //   getTreatmentPatientLists(inputdate2);
  // }, [inputdate2]);

  // useEffect(() => {
  //   getState(patientlists);
  // }, [patientlists]);
  useEffect(() => {
    const work = async () =>{
      try{
          var list = await getTreatmentPatientList(inputdate2, "");
          setPatientlists(list.data.treatmentlist);
          getState(list.data.treatmentlist);
      }catch(error){
        console.log(error);
      }
    };
    work();
  }, [inputdate2]);


  useEffect(() => {
    getList(inputdate2);
  }, [inputdate2]);

  // useEffect(() => {
  //   console.log(message);
  //   getList(inputdate2);
  // },[inputdate2, message, props])

  //버튼 이벤트 처리---------------------------------------------------

  //날짜 이동 버튼
  const searchDateBtn = (inputdate) => {
    setInputdate2(moment(inputdate).format("yyyy-MM-DD HH:mm"));
      // getPatient2(treatmentDate2);
  };

  //진료대기 환자 선택함수
  const checkedtreatmentPatient = (treatment_register_id, patientlist) => {
    setSelectedRegisterId(treatment_register_id);
    //선택된 환자 정보 리스트
    setCheckedpatient(patientlist);
  };

// 전체 보여주기
const showTotal = async () => {
  try{
    var list = await getTreatmentPatientList(inputdate2,"");
    setPatientlists(list.data.treatmentlist);
  } catch(e) {
    console.log(e);
  }
};

// 대기 보여주기
const showReady = async () => {
  try{
    var list = await getTreatmentPatientList(inputdate2,"대기");
    setPatientlists(list.data.treatmentlist);
  } catch(e) {
    console.log(e);
  }
};

// 완료 보여주기
const showFinish = async () => {
  try{
    var list = await getTreatmentPatientList(inputdate2,"완료");
    setPatientlists(list.data.treatmentlist);
  } catch(e) {
    console.log(e);
  }
};


  //실행 함수--------------------------------
  //선택 날자에 맞는 리스트 가져오기
  const getList = async (inputdate2) => {
    try{
      const list = await getTreatmentPatientList(inputdate2,"");
      // console.log(list.data.treatmentlist);
      setPatientlists(list.data.treatmentlist);
      getState(list.data.treatmentlist);
    }catch (e){
      console.log(e);
    }

  };
//진료 상태 수 계산
const getState = (patientlists) => {
    var readyState = 0;
    var doneState = 0;
    for (var i = 0; i < patientlists.length; i++) {
      if (patientlists[i].treatment_state === "대기") {
        readyState++;
      } else {
        doneState++;
      }
    }
    setReady(readyState);
    setDone(doneState);
};


  return (
    <div>
      <div className="TreatmentPatientList_title">진료대기환자</div>

      <div className="TreatmentPatientList_border border">
        <div className="TreatmentPatientList_search">
          {/* <input type="date" DatePicker selected={inputdate} onChange={(date) => setInputdate(date)} /> */}
          <DatePicker locale="ko" dateFormat="yyyy.MM.dd" selected={inputdate} onChange={(date) => setInputdate(date)} />
          <button className="button_team2_fill" onClick={() => searchDateBtn(inputdate)}>이동</button>
          <div onClick={showTotal}>전체:{ready + done}명</div>
          <div className="row_1" onClick={showReady}>대기:{ready}명</div>
          <div className="row_2" onClick={showFinish}>완료:{done}명</div>
        </div>
        <div className="TreatmentPatientList_Totaltable">
          <table className="table TreatmentPatientList_table">
            <thead className="TreatmentPatientList_table_thead">
              <tr>
                <th width="1%"></th>
                <th width="5%">번호</th>
                <th width="10%">환자명</th>
                <th width="10%">생년월일</th>
                <th width="4%">성별</th>
                <th width="10%">진료번호</th>
                <th width="15%">의사소통 메모</th>
                <th width="15%">접수 날짜</th>
                <th width="7%">상태</th>
              </tr>
            </thead>

            <tbody>
              {patientlists.map((patientlist) => {
                return (
                  <tr className="TreatmentPatientList_table_tr" key={patientlist.treatment_register_id} onClick={(event) => checkedtreatmentPatient(patientlist.treatment_register_id, patientlist)}>
                    <td>
                      <input type="checkbox" checked={selectedRegisterId === patientlist.treatment_register_id ? true : false} readOnly />
                    </td>
                    <td>{patientlist.treatment_register_id}</td>
                    <td>{patientlist.patient_name}</td>
                    <td>{patientlist.patient_ssn}</td>
                    <td>{patientlist.patient_sex}</td>
                    <td>{patientlist.treatment_id}</td>
                    <td>{patientlist.register_communication}</td>
                    <td>{moment(patientlist.register_starttime).format("yyyy-MM-DD")}</td>
                    {patientlist.treatment_state === "대기" ? <td className="row_1">{patientlist.treatment_state}</td> : <td className="row_2">{patientlist.treatment_state}</td>}
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
export default TreatmentPatientList;
