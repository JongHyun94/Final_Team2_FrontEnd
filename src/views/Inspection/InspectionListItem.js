import React, { useCallback, useEffect, useState } from "react";
import InspectionImgForm from "./InspectionImgForm";
import InspectionImgCreateForm from "./InspectionImgCreateForm";
import InspectionImgModifyForm from "./InspectionImgModifyForm";
import { produceWithPatches } from "immer";

function InspectionListItem(props) {
  //혈액검사, 영상검사 구분하기 위함
  const [category, setCategory] = useState(props.inspection.inspectionListCategory);

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
  };

  //영상검사 보기 버튼
  const openModal1 = useCallback((event) => {
    setModalOpen1(true);
    console.log("보기버튼", modalOpen1);
  }, [modalOpen1]);
  const modalClose1 = (event) => {
    setModalOpen1(false);
  };

  //영상검사 수정 버튼
  const openModal2 = useCallback((event) => {
    setModalOpen2(true);
    console.log("수정버튼", modalOpen2);
  }, [modalOpen2]);
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
   const openModal3 = useCallback((event) => {
    setModalOpen3(true);
    console.log("등록버튼", modalOpen3);
  }, [modalOpen3]);
  const modalRClose3 = (event) => {
    //모달 안에서 등록버튼으로 나옴
    //inspectionResult: "" ~> "img"
    // event.preventDefault();
    setModalOpen3(false);
    props.inspection.inspectionResult = "img";
    setInspectionR();
    console.log("모달에서 등록버튼");
  };
  const modalClose3 = (event) => {
    event.preventDefault();
    setModalOpen3(false);
  };

  //바코드 출력 확인버튼 : 검사상태(대기~>검사중) 변경
  const inspectionStateChange1 = () => {
    if(props.inspection.inspectionId === props.id){
      if(props.inspection.inspectionState === "대기"){
        props.inspection.inspectionState = "검사중";
      }
    }
    props.handleBarcode();
  };

  //검사 취소 버튼 : 검사상태(검사중~>대기) 변경
  const inspectionStateChange2 = () => {
    if(props.inspection.inspectionId === props.id){
      if(props.inspection.inspectionState === "검사중"){
        props.inspection.inspectionState = "대기";
      }
    }
    props.handleCancel();
  };

  //검사 완료 버튼 : 검사상태(~>완료) 변경
  const inspectionStateChange3 = () => {
    if(props.inspection.inspectionId === props.id){
      if(props.inspection.inspectionState === "검사중"){
        props.inspection.inspectionState = "완료";
      }
    }
    props.handleComplete();
  };
  

  return (
    <>
      <tr className="InspectionListItem" key={props.inspection.inspectionId} onClick={() => {props.handleChecked(props.inspection.inspectionId)}}>
        <td>
          <input type="checkbox" name="inspectionCheck" checked={props.id === props.inspection.inspectionId ? true : false} readOnly/>
        </td>
        <td>{props.inspection.inspectionListCategory}</td>
        <td>{props.inspection.inspectionListSpecimen}</td>
        <td>{props.inspection.inspectionListName}</td>

        {props.inspection.inspectionListCategory === "혈액검사" ?
          props.inspection.inspectionResult === "" ?
            <td>
              <div>
                <input type="text" name="iR1" onChange={handleResultChange} style={{width:"100px"}}/>
                <button className="button_team2_fill" onClick={inspectionRRegister}>등록</button>
              </div>
            </td>
            :
            <td>
              <div>
                <input type="text" name="iR2" value={inspectionR} onChange={handleResultChange} style={{width:"100px"}}/>
                <button className="button_team2_fill" onClick={inspectionRModify}>수정</button>
              </div>
            </td>
          :
          props.inspection.inspectionResult === "" ?
            <td className="InspectionListItem_1">
              <div>
              <React.Fragment>
                <button className="button_team2_empty" onClick={openModal3}>등록</button>
                <InspectionImgCreateForm id={props.id} open={modalOpen3} closeR={modalRClose3} close={modalClose3}/>
              </React.Fragment>
              </div>
            </td>
            : 
            <td>
              <div className="InspectionListItem_1">
                <React.Fragment>
                  <button className="button_team2_fill" onClick={openModal1}>보기</button>
                  <InspectionImgForm id={props.id} open={modalOpen1} close={modalClose1}/>
                  <button className="button_team2_empty" onClick={openModal2}>수정</button>
                  <InspectionImgModifyForm id={props.id} open={modalOpen2} closeM={modalMClose2} close={modalClose2}/>
                </React.Fragment>
              </div>
            </td>
        }

        <td>{props.inspection.inspectionListReference}</td>
        <td>{props.inspection.inspectionDate}</td>
        <td>{props.inspection.inspectionListContainer}</td>
        <td>{props.inspection.inspectionDoctorName}</td>
        <td>{props.inspection.inspectionInspectorName}</td>
        <td>{props.inspection.inspectionListLab}</td>
        {props.inspection.inspectionState === "대기" ?
          <td style={{color:"#009900"}}>{props.inspection.inspectionState}</td>
          :
          props.inspection.inspectionState === "검사중" ?
            <td style={{color:"#ff6600"}}>{props.inspection.inspectionState}</td>
            :
            <td style={{color:"#0100FF"}}>{props.inspection.inspectionState}</td>
        }
        
      </tr>
    </>
  );
}

export default InspectionListItem;
