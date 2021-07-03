import React, { useCallback, useEffect, useState } from "react";
import InspectionImgFormModal from "./components/modal/InspectionImgFormModal";
import InspectionImgCreateFormModal from "./components/modal/InspectionImgCreateFormModal";
import InspectionImgModifyFormModal from "./components/modal/InspectionImgModifyFormModal";

function InspectionListItem(props) {
  //검사 결과(사진 있는 결과의 경우, 사진이 있으면 결과에 img(아무거나) 넣어주기)
  const [inspectionR, setInspectionR] = useState(props.inspection.inspectionResult);

  //모달 상태 (1:보기모달, 2:수정모달, 3:등록모달)
  const [modalOpen1, setModalOpen1] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [modalOpen3, setModalOpen3] = useState(false);

  useEffect(() => {
    if(props.barcode === true){
      inspectionStateChange1();
    }
    if(props.cancel === true){
      inspectionStateChange2();
    }
    if(props.complete === true){
      inspectionStateChange3();
    }
  });

  const handleResultChange = (event) => {
    setInspectionR(event.target.value);
  };

  //혈액검사 등록 버튼
  const inspectionRRegister = (event) => {
   props.inspection.inspectionResult = inspectionR;
   setInspectionR();
  };

  //혈액검사 수정 버튼
  const inspectionRModify = (event) => {
    props.inspection.inspectionResult = inspectionR;
    // setInspectionR(event.target.value);
  };

  //영상검사 보기 버튼
  const openModal1 = (event) => {
    setModalOpen1(true);
  };
  const modalClose1 = (event) => {
    setModalOpen1(false);
  };

  //영상검사 수정 버튼
  const openModal2 = (event) => {
    setModalOpen2(true);
  };
  const modalMClose2 = (event) => {
    //모달 안에서 수정버튼으로 나옴
    // event.preventDefault();
    setModalOpen2(false);
  };
  const modalClose2 = (event) => {
    event.preventDefault();
    setModalOpen2(false);
  };

   //영상검사 등록 버튼
   const openModal3 = (event) => {
    setModalOpen3(true);
  };
  const modalRClose3 = (event) => {
    //모달 안에서 등록버튼으로 나옴
    //inspectionResult: "" ~> "img"
    // event.preventDefault();
    setModalOpen3(false);
    props.inspection.inspectionResult = "img";
    setInspectionR();
  };
  const modalClose3 = (event) => {
    event.preventDefault();
    setModalOpen3(false);
  };

  //바코드 출력 확인버튼 : 검사상태(대기~>검사) 변경
  const inspectionStateChange1 = () => {
    if(props.inspection.inspectionId === props.id){
      if(props.inspection.inspectionState === "대기"){
        props.inspection.inspectionState = "검사";
      }
    }
    props.handleBarcode();
  };

  //검사 취소 버튼 : 검사상태(검사~>대기) 변경
  const inspectionStateChange2 = () => {
    if(props.inspection.inspectionId === props.id){
      if(props.inspection.inspectionState === "검사"){
        props.inspection.inspectionState = "대기";
      }
    }
    props.handleCancel();
  };

  //검사 완료 버튼 : 검사상태(~>완료) 변경
  const inspectionStateChange3 = () => {
    if(props.inspection.inspectionId === props.id){
      if(props.inspection.inspectionState === "검사"){
        props.inspection.inspectionState = "완료";
        //검사상태count ++
        props.countIState();
      }
    }
    props.handleComplete();
  };
  

  return (
    <>
      <tr className="InspectionListItem" key={props.inspection.inspectionId} onClick={() => {props.handleChecked(props.inspection.inspectionId)}}>
        <td className="align-middle">
          <input type="checkbox" name="inspectionCheck" checked={props.id === props.inspection.inspectionId ? true : false} readOnly/>
        </td>
        <td className="align-middle">{props.inspection.inspectionListCategory}</td>
        <td className="align-middle">{props.inspection.inspectionListSpecimen}</td>
        <td className="align-middle">{props.inspection.inspectionListName}</td>

        {props.inspection.inspectionListCategory === "혈액검사" ?
          props.inspection.inspectionResult === "" ?
            props.inspection.inspectionState === "대기" ?
              <td></td>
              :
              props.inspection.inspectionState === "완료" ?
              <td></td>
                :
            <td className="align-middle">
              <div>
                <input type="text" value={inspectionR} onChange={handleResultChange} style={{width:"70px"}}/>
                <button className="button_team2_fill" onClick={inspectionRRegister}>등록</button>
              </div>
            </td>
            :
            props.inspection.inspectionState === "완료" ?
              <td className="align-middle">{props.inspection.inspectionResult}</td>
              :
            <td className="align-middle">
              <div>
                <input type="text" value={inspectionR || props.inspection.inspectionResult} onChange={handleResultChange} style={{width:"70px"}}/>
                <button className="button_team2_fill" onClick={inspectionRModify}>수정</button>
              </div>
            </td>
          :
          props.inspection.inspectionResult === "" ?
            props.inspection.inspectionState === "대기" ?
              <td></td>
              :
              props.inspection.inspectionState === "완료" ?
              <td></td>
                :
            <td className="InspectionListItem_1 align-middle">
              <div>
              <React.Fragment>
                <button className="button_team2_empty" onClick={openModal3}>등록</button>
                <InspectionImgCreateFormModal id={props.id} open={modalOpen3} closeR={modalRClose3} close={modalClose3}/>
              </React.Fragment>
              </div>
            </td>
            :
            props.inspection.inspectionState === "완료" ?
              <td className="align-middle">
                <React.Fragment>
                  <button className="button_team2_fill" onClick={openModal1}>보기</button>
                  <InspectionImgFormModal id={props.id} open={modalOpen1} close={modalClose1}/>
                </React.Fragment>
              </td>
              : 
            <td className="align-middle">
              <div className="InspectionListItem_1">
                <React.Fragment>
                  <button className="button_team2_fill" onClick={openModal1}>보기</button>
                  <InspectionImgFormModal id={props.id} open={modalOpen1} close={modalClose1}/>
                  <button className="button_team2_empty" onClick={openModal2}>수정</button>
                  <InspectionImgModifyFormModal id={props.id} open={modalOpen2} closeM={modalMClose2} close={modalClose2}/>
                </React.Fragment>
              </div>
            </td>
        }

        <td className="align-middle">{props.inspection.inspectionListReference}</td>
        <td className="align-middle">{props.inspection.inspectionDate}</td>
        {props.inspection.inspectionListContainer === "EDTA" ?
          <td className="align-middle" style={{color:"#8041D9"}}>●{props.inspection.inspectionListContainer}</td>
          :
          <td className="align-middle">{props.inspection.inspectionListContainer}</td>
        }
        <td className="align-middle">{props.inspection.inspectionDoctorName}</td>
        <td className="align-middle">{props.inspection.inspectionInspectorName}</td>
        <td className="align-middle">{props.inspection.inspectionListLab}</td>
        {props.inspection.inspectionState === "대기" ?
          <td className="align-middle" style={{color:"#009900"}}>{props.inspection.inspectionState}</td>
          :
          props.inspection.inspectionState === "검사" ?
            <td className="align-middle" style={{color:"#ff6600"}}>{props.inspection.inspectionState}</td>
            :
            <td className="align-middle" style={{color:"#00AAF0"}}>{props.inspection.inspectionState}</td>
        }
        
      </tr>
    </>
  );
}

export default InspectionListItem;
