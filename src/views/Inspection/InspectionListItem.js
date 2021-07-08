import React, { useCallback, useEffect, useState } from "react";
import InspectionImgFormModal from "./components/modal/InspectionImgFormModal";
import InspectionImgCreateFormModal from "./components/modal/InspectionImgCreateFormModal";
import InspectionImgModifyFormModal from "./components/modal/InspectionImgModifyFormModal";
import moment from "moment";
import { updateState, updateResult} from "apis/inspections";

function InspectionListItem(props) {
  //검사 결과(사진 있는 결과의 경우, 사진이 있으면 결과에 img(아무거나) 넣어주기)
  const [inspectionR, setInspectionR] = useState(props.inspection.inspection_result);

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
  const inspectionRRegister = async (event) => {
    try {
      props.inspection.inspection_result = inspectionR;
        await updateResult(props.id, inspectionR);
      setInspectionR();
    } catch(error) {
      console.log(error);
    }
  };

  //혈액검사 수정 버튼
  const inspectionRModify = async (event) => {
    try {
      props.inspection.inspection_result = inspectionR;
        await updateResult(props.id, inspectionR);
    } catch(error) {
      console.log(error);
    }
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
  const modalRClose3 = async (event) => {
    //모달 안에서 등록버튼으로 나옴
    //inspectionResult: "" ~> "img"
    // event.preventDefault();
    try {
      setModalOpen3(false);
      props.inspection.inspection_result = "img";
        await updateResult(props.id, "img");
      setInspectionR();
    } catch(error) {
      console.log(error);
    }
    
  };
  const modalClose3 = (event) => {
    event.preventDefault();
    setModalOpen3(false);
  };

  //바코드 출력 확인버튼 : 검사상태(대기~>검사) 변경
  const inspectionStateChange1 = async () => {
    try {
      if(props.inspection.inspection_id === props.id){
        if(props.inspection.inspection_state === "대기"){
          props.inspection.inspection_state = "검사";
            await updateState(props.id, "검사");
        }
      }
      props.handleBarcode();
    } catch(error) {
      console.log(error);
    }
  };

  //검사 취소 버튼 : 검사상태(검사~>대기) 변경
  const inspectionStateChange2 = async () => {
    try {
      if(props.inspection.inspection_id === props.id){
        if(props.inspection.inspection_state === "검사"){
          props.inspection.inspection_state = "대기";
            await updateState(props.id, "대기");
        }
      }
      props.handleCancel();
    } catch(error) {
      console.log(error);
    }
  };

  //검사 완료 버튼 : 검사상태(~>완료) 변경
  const inspectionStateChange3 = async () => {
    try {
      if(props.inspection.inspection_id === props.id){
        if(props.inspection.inspection_state === "검사"){
          props.inspection.inspection_state = "완료";
            await updateState(props.id, "완료");
          //검사상태count ++
          props.countIState();
        }
      }
      props.handleComplete();
    } catch(error) {
      console.log(error);
    }
    
  };
  
  return (
    <>
      <tr className="InspectionListItem" key={props.inspection.inspection_id} onClick={() => {props.handleChecked(props.inspection.inspection_id)}}>
        <td className="align-middle">
          <input type="checkbox" name="inspectionCheck" checked={props.id === props.inspection.inspection_id ? true : false} readOnly/>
        </td>
        <td className="align-middle">{props.inspection.inspection_list_category}</td>
        <td className="align-middle">{props.inspection.inspection_list_specimen}</td>
        <td className="align-middle">{props.inspection.inspection_list_name}</td>

        {props.inspection.inspection_list_category === "혈액검사" ?
          props.inspection.inspection_result === "" ?
            props.inspection.inspection_state === "대기" ?
              <td></td>
              :
              props.inspection.inspection_state === "완료" ?
              <td></td>
                :
            <td className="align-middle">
              <div>
                <input type="text" value={inspectionR} onChange={handleResultChange} style={{width:"70px"}}/>
                <button className="button_team2_fill" onClick={inspectionRRegister}>등록</button>
              </div>
            </td>
            :
            props.inspection.inspection_state === "완료" ?
              <td className="align-middle">{props.inspection.inspection_result}</td>
              :
            <td className="align-middle">
              <div>
                <input type="text" value={inspectionR || props.inspection.inspection_result} onChange={handleResultChange} style={{width:"70px"}}/>
                <button className="button_team2_fill" onClick={inspectionRModify}>수정</button>
              </div>
            </td>
          :
          props.inspection.inspection_result === "" ?
            props.inspection.inspection_state === "대기" ?
              <td></td>
              :
              props.inspection.inspection_state === "완료" ?
              <td></td>
                :
            <td className="InspectionListItem_1 align-middle">
              <div>
              <React.Fragment>
                <button className="button_team2_empty" onClick={openModal3}>등록</button>
                <InspectionImgCreateFormModal id={props.id} open={modalOpen3} closeR={modalRClose3} close={modalClose3} inspection={props.inspection}/>
              </React.Fragment>
              </div>
            </td>
            :
            props.inspection.inspection_state === "완료" ?
              <td className="align-middle">
                <React.Fragment>
                  <button className="button_team2_fill" onClick={openModal1}>보기</button>
                  <InspectionImgFormModal id={props.id} open={modalOpen1} close={modalClose1} inspection={props.inspection}/>
                </React.Fragment>
              </td>
              : 
            <td className="align-middle">
              <div className="InspectionListItem_1">
                <React.Fragment>
                  <button className="button_team2_fill" onClick={openModal1}>보기</button>
                  <InspectionImgFormModal id={props.id} open={modalOpen1} close={modalClose1} inspection={props.inspection}/>
                  <button className="button_team2_empty" onClick={openModal2}>수정</button>
                  <InspectionImgModifyFormModal id={props.id} open={modalOpen2} closeM={modalMClose2} close={modalClose2} inspection={props.inspection}/>
                </React.Fragment>
              </div>
            </td>
        }

        <td className="align-middle">{props.inspection.inspection_list_reference}</td>
        <td className="align-middle">{moment(props.inspection.inspection_date).format("HH:mm")}</td>
        {props.inspection.inspeciton_list_container === "EDTA" ?
          <td className="align-middle" style={{color:"#8041D9"}}>●{props.inspection.inspeciton_list_container}</td>
          :
          props.inspection.inspeciton_list_container === "SST" ?
          <td className="align-middle" style={{color:"#FFE400"}}>●{props.inspection.inspeciton_list_container}</td>
          :
          <td className="align-middle">{props.inspection.inspeciton_list_container}</td>
        }
        <td className="align-middle">{props.inspection.inspection_doctor_name}</td>
        <td className="align-middle">{props.inspection.inspection_inspector_name}</td>
        <td className="align-middle">{props.inspection.inspection_lab}</td>
        {props.inspection.inspection_state === "대기" ?
          <td className="align-middle" style={{color:"#009900"}}>{props.inspection.inspection_state}</td>
          :
          props.inspection.inspection_state === "검사" ?
            <td className="align-middle" style={{color:"#ff6600"}}>{props.inspection.inspection_state}</td>
            :
            <td className="align-middle" style={{color:"#00AAF0"}}>{props.inspection.inspection_state}</td>
        }
        
      </tr>
    </>
  );
}

export default InspectionListItem;
