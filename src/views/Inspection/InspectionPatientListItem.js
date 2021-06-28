import { useCallback, useEffect, useState } from "react";

function InspectionPatientListItem(props) {
  useEffect(() => {
    if(props.iState === true){
      iStateChange1();
    }
    if(props.iStateFinish === true){
      iStateFinishChange();
    }
  });

  //총검사상태: 대기~>검사 변경
  const iStateChange1 = () => {
    if(props.patient.treatmentId === props.id){
      if(props.patient.treatmentIstate === "대기"){
        props.patient.treatmentIstate = "검사";
      }
    }
    props.handleBarcodeBack();
  };

  //총검사상태: 검사~>완료 변경
  const iStateFinishChange = () => {
    if(props.patient.treatmentId === props.id){
      if(props.patient.treatmentIstate === "검사"){
        props.patient.treatmentIstate = "완료";
      }
    }
    props.handleFinishBack();
  };

  return (
    <>
      <tr className="InspectionPatientListItem" key={props.patient.treatmentId} onClick={() => {props.handleChecked(props.patient.treatmentId)}}>
        <td>
          <input type="checkbox" name="treatmentCheck" checked={props.id === props.patient.treatmentId ? true : false} readOnly/>
        </td>
        <td>{props.patient.treatmentId}</td>
        <td>{props.patient.patientName}</td>
        <td>{props.patient.patientBirth}</td>
        <td>{props.patient.patientSex}</td>
        {props.patient.treatmentIstate === "대기" ?
          <td style={{color:"#009900"}}>{props.patient.treatmentIstate}</td>
        :
          props.patient.treatmentIstate === "검사" ?
            <td style={{color:"#ff6600"}}>{props.patient.treatmentIstate}</td>
          :
            <td style={{color:"#00AAF0"}}>{props.patient.treatmentIstate}</td>
        }
        
        <td>{props.patient.treatmentCommunication}</td>
      </tr>
    </>
  );
}

export default InspectionPatientListItem;
