import { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getTreatmentPatientList } from "apis/treatments";
import moment from "moment";



function TreatmentPatientList(props) {
  
  //부모에서 생성한 환자 리스트, 체크된환자정보 담을 상태
  const { setCheckedpatient, message } = props;
  const [patientlists, setPatientlists] = useState([]);
  const [inputdate, setInputdate] = useState(new Date());
  const [inputdate2, setInputdate2] = useState(new Date());

  // 접수아이디 선택 상태
  const [selectedRegisterId, setSelectedRegisterId] = useState("");

  // const [state, setState] = useState(() => getState(patientlists));
  const [ready, setReady] = useState(0);
  const [done, setDone] = useState(0);

  useEffect(() => {
    getTreatmentPatientLists(inputdate2);
  }, [inputdate2]);

  useEffect(() => {
    getState(patientlists);
  }, [patientlists]);

  useEffect(() => {
    // console.log(message);
  },[props])


  //진료대기 환자 선택함수
  const checkedtreatmentPatient = (treatment_register_id, patientlist) => {
    setSelectedRegisterId(treatment_register_id);

    //선택된 환자 정보 리스트
    setCheckedpatient(patientlist);
  };

  const getTreatmentPatientLists = async (inputdate2) => {
    try{
      const list = await getTreatmentPatientList(inputdate2);
      // console.log(list.data.treatmentlist);
      setPatientlists(list.data.treatmentlist);
    }catch (e){
      console.log(e);
    }

  };

    //날짜 이동 버튼
    const searchDateBtn = (inputdate) => {
      setInputdate2(moment(inputdate).format("yyyy-MM-DD HH:mm"));
      // getPatient2(treatmentDate2);
  };


  //진료 상태를 위한 함수
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
          <div className="row_1">대기:{ready}명</div>
          <div className="row_2">완료:{done}명</div>
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
                <th width="20%">의사소통 메모</th>
                <th width="15%">접수 날짜</th>
                <th width="10%">상태</th>
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
