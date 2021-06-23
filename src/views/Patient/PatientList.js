import { Modal } from "./AddressModal";
import React, { useState } from "react";
import { AutoSizer, List } from "react-virtualized";

function getPatientList() {
  const patients = [];
  for (var i = 50; i >= 1; i--) {
    patients.push({patientId: i, patientName: "환자"+i, patientSsn: "910612", patientSex: "M", patientTel1: "010", patientTel2: "1234", patientTel3: "5678", patientZipcode: "01234", patientAddress: "서울시 송파구", patientDetailAddress1: "12층 강의실", patientDetailAddress2: "아이티벤처타워", patientRegDate: "2021-06-01"})
  }
  return patients;
}

function PatientList(props) {
  // 환자 목록 상태
  const [patients, setPatients] = useState(getPatientList);

  // 검색 상태
  const [keyword, setKeyword] = useState("");

  // 환자 코드 비교를 위한 상태
  const [id, setId] = useState("");

  // const patientContext = useContext(PatientContext);

  const handleChange = (event) => {
    setKeyword(event.target.value);
    console.log(keyword);
  };

  // 검색
  const handleSearch = (event) => {
    event.preventDefault();
    const data = {...keyword};
    props.search(data);
  };

  // 환자 선택
  const handleClick = (patient) => {
    setId(patient.patientId);
    props.changePatient(patient);
  };

  const rowRenderer = ({index, key, style}) => {
    return (
      <tr className="PatientList_tr" key={key} style={style} onClick={() => handleClick(patients[index])}>
        <td key={patients.patientId}><input type="checkbox" name="patientCheck" checked={id === patients[index].patientId? true : false} width={50} readOnly></input></td>
        <td width={110}>{patients[index].patientId}</td>
        <td width={100}>{patients[index].patientName}</td>
        <td width={120}>{patients[index].patientSsn}</td>
        <td>{patients[index].patientSex}</td>
        <td width={190}>{patients[index].patientTel1}-{patients[index].patientTel2}-{patients[index].patientTel3}</td>
        <td width={350}>{patients[index].patientAddress} {patients[index].patientDetailAddress1} {patients[index].patientDetailAddress2}</td>
        <td>{patients[index].patientRegDate}</td>
      </tr>
    );
  };

  // 모달 상태(open일 떄 true로 바뀌어 열림)
  /* const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  } */

  return (
    
      <div className="PatientList">
        <div className={`Patient_title`}>환자 목록</div>
        <div className={`PatientList_content border`}>
          <div className="mb-2">
            <input type="text" className="col-3" name="search" placeholder="이름/생년월일을 입력하세요." onChange={handleChange}></input>
            <button className="button_team2_fill" onClick={handleSearch}>검색</button>
            {/* <React.Fragment>
              <button className="button_team2_empty" onClick={openModal}>모달</button>
              <Modal open={modalOpen} close={closeModal} header="Modal Heading"></Modal>
            </React.Fragment>    */}
          </div>
          <table className="table text-center">
            <thead>
              <tr className={`PatientList_Table`}>
                <th style={{width: "4%"}}></th>
                <th style={{width: "9%"}}>환자 코드</th>
                <th style={{width: "10%"}}>환자명</th>
                <th style={{width: "9%"}}>생년월일</th>
                <th style={{width: "6%"}}>성별</th>
                <th style={{width: "15%"}}>전화번호</th>
                <th>주소</th>
                <th style={{width: "13%"}}>등록일</th>
                <th style={{width: "3%"}}></th>
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