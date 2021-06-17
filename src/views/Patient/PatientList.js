import { Modal } from "./Modal";
import React, { useContext, useState } from "react";
import { AutoSizer, List } from "react-virtualized";
import style from "./style.module.css";
import PatientContext from "./PatientContext";

function getPatientList() {
  const patients = [];
  for (var i = 50; i >= 1; i--) {
    patients.push({patientCheck: "false", patientId: i, patientName: "환자"+i, patientSsn: "910612", patientSex: "M", patientTel: "010-1234-5678", paritentAddress: "서울시 송파구 아이티벤처타워 12층 1강의실", patientRegDate: "2021-06-01"})
  }
  return patients;
}

function PatientList(props) {
  // 환자 목록 상태
  const [patients, setPatients] = useState(getPatientList);
  // 환자 상태
  const [patient, setPatient] = useState({
    patientId: "",
    patientName: "",
    patientSsn: "",
    patientSex: "",
    patientTel: "",
    patientAddress: "",
    patientRegDate: ""
  });
  // 검색 상태
  const [search, setSearch] = useState("");

  const patientContext = useContext(PatientContext);

  const [patientId, setPatientId] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  // 검색 실행
  const handleSearch = (event) => {
    event.preventDefault();
    const keyword = {...search};
    console.log(keyword);
  }

  // 환자 선택
  const handleClick = async (patientId) => {
    try {
      console.log(patientId);
      setPatientId(patientId);
      patientContext.setPatientId(patientId);
    } catch(error) {
      console.log(error);
    }
  };

  const rowRenderer = ({index, key, style}) => {
    return (
      <tr key={key} style={style} onClick={() => handleClick(patients[index].patientId)}>
        <td key={patients.patientId}><input type="radio" name="patientCheck" value={patient.patientCheck}></input></td>
        <td width={100}>{patients[index].patientId}</td>
        <td>{patients[index].patientName}</td>
        <td>{patients[index].patientSsn}</td>
        <td>{patients[index].patientSex}</td>
        <td>{patients[index].patientTel}</td>
        <td width={400}>{patients[index].paritentAddress}</td>
        <td>{patients[index].patientRegDate}</td>
      </tr>
    );
  };

  // 모달 상태(open일 떄 true로 바뀌어 열림)
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  }

  return (
    
      <div className={style.PatientList}>
        <div className={`${style.title}`}>환자 목록</div>
        <div className={`${style.PatientList_content} border`}>
          <div className="mb-2">
            <input type="text" className="col-3" name="search" placeholder="이름/생년월일을 입력하세요." onChange={handleChange}></input>
            <button className="button_team2_fill" onClick={handleSearch}>검색</button>
            <React.Fragment>
              <button className="button_team2_empty" onClick={openModal}>모달</button>
              <Modal open={modalOpen} close={closeModal} header="Modal Heading">모달 내용</Modal>
            </React.Fragment>   
          </div>
          <table className="table text-center">
            <thead>
              <tr className={`${style.PatientList_Table}`}>
                <th style={{width: "5%"}}></th>
                <th style={{width: "9%"}}>환자 코드</th>
                <th style={{width: "10%"}}>환자명</th>
                <th style={{width: "9%"}}>생년월일</th>
                <th style={{width: "6%"}}>성별</th>
                <th style={{width: "15%"}}>전화번호</th>
                <th>주소</th>
                <th style={{width: "13%"}}>등록 날짜</th>
              </tr>
            </thead>
            <tbody>
              <AutoSizer disableHeight>
                {({width, height}) => {
                  return <List width={width} height={635} list={patients} rowCount={patients.length} rowHeight={44} rowRenderer={rowRenderer} overscanRowCount={5}></List>
                }}
              </AutoSizer>
            </tbody>
          </table>
        </div>
      </div>
  );
}

export default PatientList;