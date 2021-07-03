import { Modal } from "../../components/common/Address";
import React, { useState } from "react";
import { AutoSizer, List } from "react-virtualized";

function getPatientList() {
  const patients = [];
  for (var i = 50; i >= 1; i--) {
    patients.push({patientId: i, patientName: "환자"+i, patientSsn1: "910612", patientSsn2: "1234567", patientSex: "M", patientTel1: "010", patientTel2: "1234", patientTel3: "5678", patientZipcode: "01234", patientAddress: "서울시 송파구", patientDetailAddress1: "12층 강의실", patientDetailAddress2: "아이티벤처타워", patientRegDate: "2021-06-01"})
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
      <div className="PatientList_tr" key={key} style={style} onClick={() => handleClick(patients[index])}>
        <div style={{width: "3%"}} key={patients.patientId}><input type="checkbox" name="patientCheck" checked={id === patients[index].patientId? true : false} width={50} readOnly></input></div>
        <div style={{width: "10%"}}>{patients[index].patientId}</div>
        <div style={{width: "10%"}}>{patients[index].patientName}</div>
        <div style={{width: "10%"}}>{patients[index].patientSsn1}</div>
        <div style={{width: "5%"}}>{patients[index].patientSex}</div>
        <div style={{width: "15%"}}>{patients[index].patientTel1}-{patients[index].patientTel2}-{patients[index].patientTel3}</div>
        <div style={{width: "35%"}}>{patients[index].patientAddress} {patients[index].patientDetailAddress1} {patients[index].patientDetailAddress2}</div>
        <div style={{width: "13%"}}>{patients[index].patientRegDate}</div>
      </div>
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
        <div className="text-center">
            <div className={`PatientList_Table`}>
              <div style={{width: "2%"}}></div>
              <div style={{width: "12%"}}>환자 코드</div>
              <div style={{width: "8%"}}>환자명</div>
              <div style={{width: "12%"}}>생년월일</div>
              <div style={{width: "4%"}}>성별</div>
              <div style={{width: "15%"}}>전화번호</div>
              <div style={{width: "35%"}}>주소</div>
              <div style={{width: "13%"}}>등록일</div>
              <div style={{width: "2%"}}></div>
            </div>
          <div>
            <AutoSizer disableHeight>
              {({width, height}) => {
                return <List width={width} height={675} list={patients} rowCount={patients.length} rowHeight={44} rowRenderer={rowRenderer} overscanRowCount={5}></List>
              }}
            </AutoSizer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientList;